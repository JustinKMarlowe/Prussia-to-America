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
  let boundaryLayerGroup = null;
  let boundaryVisible = false;
  let currentBoundaryId = null;

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

  // =============================================
  // Historical Boundary Data
  // GeoJSON-style polylines for borders that
  // differ from the modern basemap
  // =============================================
  const HISTORICAL_BOUNDARIES = {
    prussia: {
      label: {
        en: "German Empire / Prussia (pre-1945 borders)",
        de: "Deutsches Reich / Preußen (Grenzen vor 1945)"
      },
      color: "#b22222",
      // Approximate Oder-Neisse line — the 1945 border change
      lines: [
        [[53.92, 14.22], [53.55, 14.55], [53.07, 14.42], [52.75, 14.55],
         [52.33, 14.55], [51.87, 14.72], [51.65, 14.98], [51.35, 15.02],
         [51.07, 15.00], [50.88, 14.82], [50.77, 14.62]]
      ],
      labelPos: [52.8, 15.8],
      labelText: { en: "Former German territory →\nnow Poland (since 1945)", de: "Ehem. deutsches Gebiet →\njetzt Polen (seit 1945)" },
      regions: [
        {
          name: { en: "West Prussia / Pomerania", de: "Westpreußen / Pommern" },
          coords: [[54.8, 14.2], [54.8, 18.5], [53.0, 18.5], [53.0, 16.0], [52.3, 14.6], [53.5, 14.2], [54.8, 14.2]]
        }
      ]
    },
    eastwest: {
      label: {
        en: "East / West Germany border (1949–1990)",
        de: "Grenze Ost- / Westdeutschland (1949–1990)"
      },
      color: "#4a6fa5",
      lines: [
        [[53.90, 10.90], [53.70, 10.80], [53.40, 10.95], [53.10, 11.05],
         [52.80, 11.10], [52.50, 11.25], [52.30, 11.45], [52.07, 11.35],
         [51.80, 11.42], [51.55, 11.60], [51.30, 11.55], [51.10, 11.40],
         [50.85, 11.20], [50.60, 11.10], [50.40, 11.35], [50.27, 11.50],
         [50.15, 11.80], [50.05, 12.10]]
      ],
      labelPos: [52.1, 11.8],
      labelText: { en: "← West (BRD) | East (DDR) →", de: "← West (BRD) | Ost (DDR) →" },
      regions: [
        {
          name: { en: "Soviet Zone / DDR", de: "Sowjetische Zone / DDR" },
          coords: [[54.5, 10.9], [54.5, 14.2], [53.0, 14.5], [52.3, 14.6], [51.1, 14.9],
                   [50.7, 14.6], [50.1, 12.1], [50.3, 11.5], [50.6, 11.1], [50.9, 11.2],
                   [51.3, 11.6], [51.8, 11.4], [52.1, 11.4], [52.5, 11.2], [52.8, 11.1],
                   [53.4, 11.0], [53.7, 10.8], [53.9, 10.9], [54.5, 10.9]]
        }
      ]
    },
    alsace: {
      label: {
        en: "Alsace-Lorraine (French-German disputed territory)",
        de: "Elsass-Lothringen (französisch-deutsches Grenzgebiet)"
      },
      color: "#2e7d32",
      lines: [
        [[49.50, 8.23], [49.15, 7.90], [48.95, 7.80], [48.60, 7.75],
         [48.30, 7.55], [47.85, 7.52], [47.60, 7.58]]
      ],
      labelPos: [48.5, 7.2],
      labelText: { en: "Alsace-Lorraine\n(returned to France 1945)", de: "Elsass-Lothringen\n(1945 an Frankreich zurück)" },
      regions: [
        {
          name: { en: "Alsace-Lorraine", de: "Elsass-Lothringen" },
          coords: [[49.50, 8.23], [49.50, 7.30], [48.90, 6.90], [48.30, 6.80],
                   [47.60, 7.20], [47.60, 7.58], [48.30, 7.55], [48.60, 7.75],
                   [48.95, 7.80], [49.15, 7.90], [49.50, 8.23]]
        }
      ]
    }
  };

  // Which boundary set applies to which stories
  const STORY_BOUNDARY_MAP = {
    "family-oma": "prussia",
    "family-opa": "prussia",
    "family-mutti": "prussia",
    "family-papa": "prussia",
    1: "prussia",
    2: "prussia",
    3: "prussia",
    4: "prussia",
    5: "eastwest",
    6: "eastwest",
    7: "eastwest",
    8: "eastwest",
    9: "alsace"
  };

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

    baseLayers.light.addTo(map);

    // Boundary layer group (initially empty)
    boundaryLayerGroup = L.layerGroup().addTo(map);

    // Draw journey path
    journeyLine = L.polyline(JOURNEY_PATH, {
      color: "#8b4513",
      weight: 2.5,
      opacity: 0.35,
      dashArray: "2 8",
      lineCap: "round",
    }).addTo(map);

    // Add markers
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

    initLayerControl();
  }

  // ---- Historical Boundaries ----
  function updateBoundaryOverlay(storyId) {
    const boundaryKey = STORY_BOUNDARY_MAP[storyId] || null;

    const toggleContainer = $("#boundary-toggle-container");
    const toggleCheckbox = $("#boundary-toggle");
    const toggleLabel = $("#boundary-label-text");

    if (!boundaryKey) {
      if (toggleContainer) toggleContainer.classList.add("hidden");
      boundaryLayerGroup.clearLayers();
      currentBoundaryId = null;
      boundaryVisible = false;
      return;
    }

    const bData = HISTORICAL_BOUNDARIES[boundaryKey];

    if (toggleContainer) {
      toggleContainer.classList.remove("hidden");
      if (toggleLabel) toggleLabel.textContent = bData.label[currentLang];
    }

    if (boundaryKey === currentBoundaryId) return;

    currentBoundaryId = boundaryKey;
    boundaryVisible = true;
    if (toggleCheckbox) toggleCheckbox.checked = true;

    drawBoundary(boundaryKey);
  }

  function drawBoundary(boundaryKey) {
    boundaryLayerGroup.clearLayers();
    if (!boundaryVisible || !boundaryKey) return;

    const bData = HISTORICAL_BOUNDARIES[boundaryKey];

    // Shaded regions
    if (bData.regions) {
      bData.regions.forEach((region) => {
        const polygon = L.polygon(region.coords, {
          color: bData.color,
          weight: 1,
          opacity: 0.5,
          fillColor: bData.color,
          fillOpacity: 0.08,
          dashArray: "4 4",
        });
        boundaryLayerGroup.addLayer(polygon);

        const center = polygon.getBounds().getCenter();
        const regionLabel = L.marker(center, {
          icon: L.divIcon({
            className: "boundary-region-label",
            html: `<span style="color:${bData.color}">${region.name[currentLang]}</span>`,
            iconSize: [140, 30],
            iconAnchor: [70, 15],
          }),
          interactive: false,
        });
        boundaryLayerGroup.addLayer(regionLabel);
      });
    }

    // Border lines
    if (bData.lines) {
      bData.lines.forEach((coords) => {
        const halo = L.polyline(coords, {
          color: "#ffffff",
          weight: 5,
          opacity: 0.7,
          lineCap: "round",
        });
        boundaryLayerGroup.addLayer(halo);

        const line = L.polyline(coords, {
          color: bData.color,
          weight: 2.5,
          opacity: 0.8,
          dashArray: "8 5",
          lineCap: "round",
        });
        boundaryLayerGroup.addLayer(line);
      });
    }

    // Main label
    if (bData.labelPos) {
      const label = L.marker(bData.labelPos, {
        icon: L.divIcon({
          className: "boundary-main-label",
          html: `<div class="boundary-label-box" style="border-color:${bData.color};color:${bData.color}">${bData.labelText[currentLang].replace(/\n/g, '<br>')}</div>`,
          iconSize: [200, 50],
          iconAnchor: [100, 25],
        }),
        interactive: false,
      });
      boundaryLayerGroup.addLayer(label);
    }
  }

  function clearBoundaryOverlay() {
    boundaryLayerGroup.clearLayers();
    currentBoundaryId = null;
    boundaryVisible = false;
    const toggleContainer = $("#boundary-toggle-container");
    if (toggleContainer) toggleContainer.classList.add("hidden");
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
        <div id="boundary-toggle-container" class="hidden">
          <label class="layer-option">
            <input type="checkbox" id="boundary-toggle" checked />
            <span id="boundary-label-text">${s.historicalBorders}</span>
          </label>
        </div>
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
      });
    });

    const boundaryToggle = document.getElementById("boundary-toggle");
    if (boundaryToggle) {
      boundaryToggle.addEventListener("change", (e) => {
        boundaryVisible = e.target.checked;
        if (boundaryVisible && currentBoundaryId) {
          drawBoundary(currentBoundaryId);
        } else {
          boundaryLayerGroup.clearLayers();
        }
      });
    }
  }

  function updateLayerControlText() {
    const container = document.querySelector(".layer-control");
    if (!container) return;
    const basemapVal = document.querySelector('input[name="basemap"]:checked')?.value || "light";
    const boundaryChecked = boundaryVisible;
    container.innerHTML = buildLayerControlHTML();
    const radio = container.querySelector(`input[name="basemap"][value="${basemapVal}"]`);
    if (radio) radio.checked = true;
    if (currentBoundaryId) {
      const bc = container.querySelector("#boundary-toggle-container");
      if (bc) bc.classList.remove("hidden");
      const bt = container.querySelector("#boundary-toggle");
      if (bt) bt.checked = boundaryChecked;
      const bl = container.querySelector("#boundary-label-text");
      if (bl && HISTORICAL_BOUNDARIES[currentBoundaryId]) {
        bl.textContent = HISTORICAL_BOUNDARIES[currentBoundaryId].label[currentLang];
      }
    }
    attachLayerEvents();
  }

  // ---- Build Timeline ----
  function buildTimeline() {
    timelineList.innerHTML = "";
    const s = UI_STRINGS[currentLang];
    let lastSection = null;

    STORY_DATA.forEach((story, idx) => {
      const section = story.section || "journey";

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

    storyDate.textContent = story.date[currentLang];
    storyTitle.textContent = story.title[currentLang];
    storyBody.innerHTML = story.body[currentLang] || story.body["en"] || "";
    storyPanel.classList.remove("hidden");

    initPlacenameTooltips();
    $("#story-content").scrollTop = 0;

    document.querySelectorAll(".timeline-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.id == id);
    });

    const activeItem = document.querySelector(`.timeline-item[data-id="${id}"]`);
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    markers.forEach((m) => {
      const pin = m.getElement()?.querySelector(".marker-pin");
      if (pin) pin.classList.toggle("active", m.storyId === id);
    });

    map.flyTo([story.lat, story.lng], getZoomForStory(story), { duration: 1.2 });

    updateYearBar(story);
    updateBoundaryOverlay(id);

    timelinePanel.classList.remove("open");
  }

  function getZoomForStory(story) {
    if (story.lat < 0) return 6;
    if (story.lat > 50 && story.lng > 10 && story.lng < 17) return 8;
    if (story.lat > 47 && story.lat < 50 && story.lng > 7 && story.lng < 12) return 8;
    if (story.lat > 40 && story.lat < 42 && story.lng > 0) return 8;
    if (story.lat > 38 && story.lng < -70) return 10;
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
    updateYearBar(null);
    clearBoundaryOverlay();
  }

  // ---- Language Toggle ----
  function toggleLanguage() {
    currentLang = currentLang === "en" ? "de" : "en";

    const labels = langToggle.querySelectorAll(".lang-label");
    labels.forEach((l) => {
      l.dataset.active = l.textContent.trim() === currentLang.toUpperCase() ? currentLang : "";
    });

    const strings = UI_STRINGS[currentLang];
    $("#site-title").textContent = strings.siteTitle;
    $("#site-subtitle").textContent = strings.siteSubtitle;
    $("#timeline-title").textContent = strings.timeline;
    $("#about-title").textContent = strings.aboutTitle;
    $("#about-text").textContent = strings.aboutText;

    buildTimeline();
    updateLayerControlText();

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

    if (boundaryVisible && currentBoundaryId) {
      drawBoundary(currentBoundaryId);
    }

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
  buildYearBar();

  // ---- Year Timeline Bar ----
  function buildYearBar() {
    const labelsContainer = $("#year-bar-labels");
    labelsContainer.innerHTML = "";

    // Dynamic range from first to last story
    const MIN_YEAR = STORY_DATA[0].yearStart;
    const MAX_YEAR = STORY_DATA[STORY_DATA.length - 1].yearEnd;

    // Collect which years have stories
    const storyYears = new Set();
    STORY_DATA.forEach((s) => {
      for (let y = s.yearStart; y <= s.yearEnd; y++) {
        storyYears.add(y);
      }
    });

    // Generate labels: endpoints + every 10 years
    const years = [];
    const firstDecade = Math.ceil(MIN_YEAR / 10) * 10;
    years.push(MIN_YEAR);
    for (let y = firstDecade; y <= MAX_YEAR; y += 10) {
      if (y !== MIN_YEAR) years.push(y);
    }
    if (years[years.length - 1] !== MAX_YEAR) {
      years.push(MAX_YEAR);
    }

    years.forEach((y) => {
      const label = document.createElement("span");
      label.className = "year-label";
      if (storyYears.has(y)) label.classList.add("has-story");
      label.dataset.year = y;
      label.innerHTML = `<span class="year-dot"></span>${y}`;
      label.addEventListener("click", () => {
        const match = STORY_DATA.find((s) => y >= s.yearStart && y <= s.yearEnd);
        if (match) selectStory(match.id);
      });
      labelsContainer.appendChild(label);
    });

    labelsContainer.dataset.minYear = MIN_YEAR;
    labelsContainer.dataset.maxYear = MAX_YEAR;
  }

  function updateYearBar(story) {
    const MIN_YEAR = STORY_DATA[0].yearStart;
    const MAX_YEAR = STORY_DATA[STORY_DATA.length - 1].yearEnd;
    const range = MAX_YEAR - MIN_YEAR;

    if (!story) {
      document.querySelectorAll(".year-label").forEach((el) => {
        el.classList.remove("active", "near");
      });
      const fill = $("#year-bar-fill");
      if (fill) { fill.style.left = "0%"; fill.style.width = "0%"; }
      return;
    }

    const midYear = Math.round((story.yearStart + story.yearEnd) / 2);

    const fillLeft = ((story.yearStart - MIN_YEAR) / range) * 100;
    const fillWidth = Math.max(((story.yearEnd - story.yearStart + 1) / range) * 100, 0.8);
    const fill = $("#year-bar-fill");
    if (fill) { fill.style.left = fillLeft + "%"; fill.style.width = fillWidth + "%"; }

    document.querySelectorAll(".year-label").forEach((el) => {
      const y = parseInt(el.dataset.year);
      el.classList.remove("active", "near");

      if (y >= story.yearStart && y <= story.yearEnd) {
        el.classList.add("active");
      } else if (Math.abs(y - midYear) <= 10) {
        el.classList.add("near");
      }
    });
  }
})();
