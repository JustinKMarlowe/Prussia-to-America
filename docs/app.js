// =============================================
// App.js — From Prussia with Love
// Interactive map & timeline application
// =============================================

(function () {
  "use strict";

  // ---- State ----
  let currentLang = "en";
  let activeStoryId = null;
  let markers = [];
  let map;
  let journeyLine;

  // ---- DOM refs ----
  const $ = (sel) => document.querySelector(sel);
  const timelineList = $("#timeline-list");
  const storyPanel = $("#story-panel");
  const storyDate = $("#story-date");
  const storyTitle = $("#story-title");
  const storyBody = $("#story-body");
  const langToggle = $("#lang-toggle");
  const infoBtn = $("#info-btn");
  const aboutModal = $("#about-modal");
  const closeAbout = $("#close-about");
  const closeStory = $("#close-story");
  const timelineToggle = $("#timeline-toggle");
  const timelinePanel = $("#timeline-panel");

  // ---- Initialize Map ----
  function initMap() {
    map = L.map("map", {
      center: [48, 8],
      zoom: 4,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    // Vintage-style tile layer
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    // Draw journey path
    journeyLine = L.polyline(JOURNEY_PATH, {
      color: "#8b4513",
      weight: 2,
      opacity: 0.4,
      dashArray: "8 6",
      className: "journey-path",
    }).addTo(map);

    // Add markers
    STORY_DATA.forEach((story, idx) => {
      const icon = L.divIcon({
        className: "custom-marker",
        html: `<div class="marker-pin" data-id="${story.id}"><span class="marker-number">${idx + 1}</span></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -30],
      });

      const marker = L.marker([story.lat, story.lng], { icon })
        .addTo(map)
        .bindTooltip(story.title[currentLang], {
          className: "marker-tooltip",
          direction: "top",
          offset: [0, -30],
        });

      marker.storyId = story.id;
      marker.on("click", () => selectStory(story.id));
      markers.push(marker);
    });
  }

  // ---- Build Timeline ----
  function buildTimeline() {
    timelineList.innerHTML = "";
    STORY_DATA.forEach((story) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.dataset.id = story.id;
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-info">
          <div class="timeline-date">${story.date[currentLang]}</div>
          <div class="timeline-label">${story.title[currentLang]}</div>
          <div class="timeline-location">${story.location[currentLang]}</div>
        </div>
      `;
      item.addEventListener("click", () => selectStory(story.id));
      timelineList.appendChild(item);
    });
  }

  // ---- Select a Story ----
  function selectStory(id) {
    activeStoryId = id;
    const story = STORY_DATA.find((s) => s.id === id);
    if (!story) return;

    // Update story panel
    storyDate.textContent = story.date[currentLang];
    storyTitle.textContent = story.title[currentLang];
    storyBody.innerHTML = story.body[currentLang];
    storyPanel.classList.remove("hidden");

    // Scroll story to top
    $("#story-content").scrollTop = 0;

    // Update timeline active state
    document.querySelectorAll(".timeline-item").forEach((el) => {
      el.classList.toggle("active", parseInt(el.dataset.id) === id);
    });

    // Scroll timeline item into view
    const activeItem = document.querySelector(`.timeline-item[data-id="${id}"]`);
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Update marker active state
    markers.forEach((m) => {
      const pin = m.getElement()?.querySelector(".marker-pin");
      if (pin) {
        pin.classList.toggle("active", m.storyId === id);
      }
    });

    // Pan map to location
    map.flyTo([story.lat, story.lng], getZoomForStory(story), {
      duration: 1.2,
    });

    // Close mobile timeline
    timelinePanel.classList.remove("open");
  }

  function getZoomForStory(story) {
    // Zoom closer for locations that are near each other
    if (story.lat > 50 && story.lng > 10 && story.lng < 17) return 8; // Prussia/Mecklenburg
    if (story.lat > 47 && story.lat < 50 && story.lng > 7 && story.lng < 12) return 8; // S. Germany
    if (story.lat > 40 && story.lat < 42) return 8; // Spain
    if (story.lat > 38 && story.lng < -70) return 10; // NYC/JFK
    return 6;
  }

  // ---- Close Story Panel ----
  function closeStoryPanel() {
    storyPanel.classList.add("hidden");
    activeStoryId = null;
    document.querySelectorAll(".timeline-item").forEach((el) => el.classList.remove("active"));
    markers.forEach((m) => {
      const pin = m.getElement()?.querySelector(".marker-pin");
      if (pin) pin.classList.remove("active");
    });
  }

  // ---- Language Toggle ----
  function toggleLanguage() {
    currentLang = currentLang === "en" ? "de" : "en";

    // Update toggle button
    const labels = langToggle.querySelectorAll(".lang-label");
    labels.forEach((l) => {
      l.dataset.active = l.textContent.trim() === currentLang.toUpperCase() ? currentLang : "";
    });

    // Update UI strings
    const strings = UI_STRINGS[currentLang];
    $("#site-title").textContent = strings.siteTitle;
    $("#site-subtitle").textContent = strings.siteSubtitle;
    $("#timeline-title").textContent = strings.timeline;
    $("#about-title").textContent = strings.aboutTitle;
    $("#about-text").textContent = strings.aboutText;

    // Rebuild timeline
    buildTimeline();

    // Update marker tooltips
    markers.forEach((m) => {
      const story = STORY_DATA.find((s) => s.id === m.storyId);
      if (story) {
        m.unbindTooltip();
        m.bindTooltip(story.title[currentLang], {
          className: "marker-tooltip",
          direction: "top",
          offset: [0, -30],
        });
      }
    });

    // Update story panel if open
    if (activeStoryId !== null) {
      selectStory(activeStoryId);
    }
  }

  // ---- Event Listeners ----
  closeStory.addEventListener("click", closeStoryPanel);
  langToggle.addEventListener("click", toggleLanguage);

  infoBtn.addEventListener("click", () => aboutModal.classList.remove("hidden"));
  closeAbout.addEventListener("click", () => aboutModal.classList.add("hidden"));
  aboutModal.addEventListener("click", (e) => {
    if (e.target === aboutModal) aboutModal.classList.add("hidden");
  });

  timelineToggle.addEventListener("click", () => {
    timelinePanel.classList.toggle("open");
  });

  // Close timeline on map click (mobile)
  document.getElementById("map").addEventListener("click", () => {
    timelinePanel.classList.remove("open");
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeStoryPanel();
      aboutModal.classList.add("hidden");
    }
  });

  // ---- Init ----
  initMap();
  buildTimeline();
})();
