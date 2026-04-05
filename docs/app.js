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
  let leaderLines = [];
  let map;
  let journeyLine;
  let baseLayers = {};
  let historicalOverlay;
  let historicalVisible = false;

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
  const dedicationModal = $("#dedication-modal");
  const closeDedication = $("#close-dedication");

  // ---- Dedication Modal ----
  closeDedication.addEventListener("click", () => {
    dedicationModal.classList.add("hidden");
  });
  dedicationModal.addEventListener("click", (e) => {
    if (e.target === dedicationModal) dedicationModal.classList.add("hidden");
  });

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

    // ---- Basemap layers ----
    baseLayers.light = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    );

    baseLayers.satellite = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          '&copy; Esri, Maxar, Earthstar Geographics',
        maxZoom: 19,
      }
    );

    // Default basemap
    baseLayers.light.addTo(map);

    // ---- Historical overlay ----
    historicalOverlay = L.tileLayer(
      "https://maps.georeferencer.com/georeferences/28da2318-c4b3-5f25-a4f0-3d3b8e1210a1/2022-08-25T12:25:57.721924Z/map/{z}/{x}/{y}.png?key=mpIMvCWIYHCcIFEqLGfx",
      {
        attribution: 'Historical: David Rumsey Map Collection',
        opacity: 0.6,
        maxZoom: 15,
        minZoom: 5,
        bounds: [[47, 5], [56, 25]],
      }
    );

    // Draw journey path
    journeyLine = L.polyline(JOURNEY_PATH, {
      color: "#8b4513",
      weight: 2.5,
      opacity: 0.35,
      dashArray: "2 8",
      lineCap: "round",
    }).addTo(map);

    // Add markers with offset handling
    STORY_DATA.forEach((story, idx) => {
      const markerLat = story.displayLat || story.lat;
      const markerLng = story.displayLng || story.lng;
      const isOffset = !!(story.displayLat || story.displayLng);
      const isFamily = story.section === "family";
      const num = idx + 1;

      const familyClass = isFamily ? " family-marker" : "";
      const icon = L.divIcon({
        className: "custom-marker",
        html: `<div class="marker-pin${familyClass}" data-id="${story.id}"><span class="marker-number">${num}</span></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -30],
      });

      const marker = L.marker([markerLat, markerLng], {
        icon,
        zIndexOffset: idx,
      })
        .addTo(map)
        .bindTooltip(story.title[currentLang], {
          className: "marker-tooltip",
          direction: "top",
          offset: [0, -30],
        });

      marker.storyId = story.id;
      marker.on("click", () => selectStory(story.id));
      markers.push(marker);

      // Leader lines for offset markers
      if (isOffset) {
        const lineHalo = L.polyline(
          [[markerLat, markerLng], [story.lat, story.lng]],
          { color: "#ffffff", weight: 5, opacity: 0.95, lineCap: "round" }
        ).addTo(map);

        const lineCore = L.polyline(
          [[markerLat, markerLng], [story.lat, story.lng]],
          { color: "#e85d26", weight: 2.5, opacity: 1.0, lineCap: "round" }
        ).addTo(map);

        const dot = L.circleMarker([story.lat, story.lng], {
          radius: 6,
          color: "#ffffff",
          fillColor: "#e85d26",
          fillOpacity: 1.0,
          weight: 2.5,
        }).addTo(map);

        leaderLines.push(lineHalo, lineCore, dot);
      }
    });

    // ---- Layer control panel ----
    initLayerControl();
  }

  // ---- Layer Control ----
  function initLayerControl() {
    const LayerControl = L.Control.extend({
      options: { position: "topright" },
      onAdd: function () {
        const container = L.DomUtil.create("div", "layer-control leaflet-bar");
        container.innerHTML = buildLayerControlHTML();
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);
        return container;
      },
    });
    map.addControl(new LayerControl());
    attachLayerEvents();
  }

  function buildLayerControlHTML() {
    const s = UI_STRINGS[currentLang];
    return `
      <button class="layer-control-toggle" id="layer-toggle-btn" title="${s.layers}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      </button>
      <div class="layer-control-panel hidden" id="layer-panel">
        <div class="layer-section-title">${s.layers}</div>
        <label class="layer-option">
          <input type="radio" name="basemap" value="light" checked />
          <span>${s.basemapLight}</span>
        </label>
        <label class="layer-option">
          <input type="radio" name="basemap" value="satellite" />
          <span>${s.basemapSatellite}</span>
        </label>
        <hr class="layer-divider" />
        <label class="layer-option">
          <input type="checkbox" id="historical-toggle" />
          <span>${s.historicalOverlay}</span>
        </label>
      </div>
    `;
  }

  function attachLayerEvents() {
    const toggleBtn = document.getElementById("layer-toggle-btn");
    const panel = document.getElementById("layer-panel");

    toggleBtn.addEventListener("click", () => {
      panel.classList.toggle("hidden");
    });

    document.querySelectorAll('input[name="basemap"]').forEach((radio) => {
      radio.addEventListener("change", (e) => {
        const val = e.target.value;
        Object.values(baseLayers).forEach((l) => map.removeLayer(l));
        baseLayers[val].addTo(map);
        if (historicalVisible && map.hasLayer(historicalOverlay)) {
          historicalOverlay.bringToFront();
        }
      });
    });

    document.getElementById("historical-toggle").addEventListener("change", (e) => {
      historicalVisible = e.target.checked;
      if (historicalVisible) {
        historicalOverlay.addTo(map);
      } else {
        map.removeLayer(historicalOverlay);
      }
    });
  }

  function updateLayerControlText() {
    const panel = document.getElementById("layer-panel");
    const toggleBtn = document.getElementById("layer-toggle-btn");
    if (!panel || !toggleBtn) return;
    const basemapVal = document.querySelector('input[name="basemap"]:checked')?.value || "light";
    const histChecked = document.getElementById("historical-toggle")?.checked || false;
    const container = document.querySelector(".layer-control");
    if (container) {
      container.innerHTML = buildLayerControlHTML();
      const radio = container.querySelector(`input[name="basemap"][value="${basemapVal}"]`);
      if (radio) radio.checked = true;
      const hist = container.querySelector("#historical-toggle");
      if (hist) hist.checked = histChecked;
      attachLayerEvents();
    }
  }

  // ---- Build Timeline ----
  function buildTimeline() {
    timelineList.innerHTML = "";
    const s = UI_STRINGS[currentLang];

    let lastSection = null;

    STORY_DATA.forEach((story, idx) => {
      const section = story.section || "journey";

      // Add section divider when section changes
      if (section !== lastSection) {
        const divider = document.createElement("div");
        divider.className = "timeline-section-divider";
        divider.textContent = section === "family"
          ? s.timelineFamilySection
          : s.timelineJourneySection;
        timelineList.appendChild(divider);
        lastSection = section;
      }

      const num = idx + 1;
      const isFamily = section === "family";
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.dataset.id = story.id;
      item.innerHTML = `
        <div class="timeline-number${isFamily ? ' family' : ''}">${num}</div>
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
    storyBody.innerHTML = story.body[currentLang] || story.body["en"] || "";
    storyPanel.classList.remove("hidden");

    // Initialize placename tooltips
    initPlacenameTooltips();

    // Scroll story to top
    $("#story-content").scrollTop = 0;

    // Update timeline active state
    document.querySelectorAll(".timeline-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.id == id);
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

    // Pan map to the real location
    map.flyTo([story.lat, story.lng], getZoomForStory(story), {
      duration: 1.2,
    });

    // Close mobile timeline
    timelinePanel.classList.remove("open");
  }

  function getZoomForStory(story) {
    // South America
    if (story.lat < 0) return 6;
    // Central Europe close-ups
    if (story.lat > 50 && story.lng > 10 && story.lng < 17) return 8;
    if (story.lat > 47 && story.lat < 50 && story.lng > 7 && story.lng < 12) return 8;
    // Spain
    if (story.lat > 40 && story.lat < 42 && story.lng > 0) return 8;
    // US East Coast detail
    if (story.lat > 38 && story.lng < -70) return 10;
    // Caribbean
    if (story.lat > 15 && story.lat < 25 && story.lng < -60) return 8;
    return 6;
  }

  // ---- Placename Tooltips ----
  function initPlacenameTooltips() {
    document.querySelectorAll("#story-body .placename").forEach((el) => {
      if (el.dataset.initialized) return;
      el.dataset.initialized = "true";

      const oldName = el.dataset.old;
      const newName = el.dataset.new;
      const tip = document.createElement("span");
      tip.className = "placename-tip";
      tip.textContent = `${oldName} → ${newName}`;
      el.appendChild(tip);
    });
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

    // Update layer control text
    updateLayerControlText();

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

  document.getElementById("map").addEventListener("click", () => {
    timelinePanel.classList.remove("open");
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeStoryPanel();
      aboutModal.classList.add("hidden");
      dedicationModal.classList.add("hidden");
    }
  });

  // ---- Init ----
  initMap();
  buildTimeline();
})();
