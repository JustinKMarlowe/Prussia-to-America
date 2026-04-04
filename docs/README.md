# From Prussia with Love

An interactive map tracing the life journey of Beate Zülsdorf (later Beate Owens) — from her birth in West Prussia in 1941 through WWII evacuation, life in Soviet-occupied East Germany, escape to West Germany, and immigration to America in 1963 as a Pan American World Airways stewardess.

## Features

- **Interactive Map** — Leaflet.js map with numbered markers at each location
- **Offset markers** — Co-located events (e.g. Breitenstein 1941–44 vs 1944) are offset with leader lines back to the real location so no icons overlap
- **Timeline Sidebar** — Numbered list matching map marker numbers
- **Story Panel** — Click any marker or timeline entry to read that chapter
- **Bilingual** — Full EN/DE toggle for all text, UI labels, and tooltips
- **Placename annotations** — Historical place names in the story text are highlighted with hover tooltips showing the old → modern name mapping
- **Basemap switcher** — Toggle between light cartographic map and Esri satellite imagery
- **Historical overlay** — Optional semi-transparent overlay showing German-era placenames from the 1930s–40s (Central Europe region)
- **Responsive** — Works on desktop, tablet, and mobile
- **No build step** — Pure HTML/CSS/JS, ready to deploy

## File Structure

```
Prussia-to-America/
├── docs/
│   ├── index.html       # Main HTML page
│   ├── style.css        # All styles
│   ├── app.js           # Map, timeline, layers, and interaction logic
│   └── story-data.js    # All story entries with coordinates & bilingual text
└── README.md            # This file
```

## Deploying to GitHub Pages

### 1. Push files to the repository

```bash
git clone https://github.com/JustinKMarlowe/Prussia-to-America.git
cd Prussia-to-America

# Copy the docs/ folder and README.md into the repo root

git add .
git commit -m "Deploy: interactive story map v2"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to **https://github.com/JustinKMarlowe/Prussia-to-America/settings/pages**
2. Under **Source**, select **Deploy from a branch**
3. Under **Branch**, select `main` and folder `/docs`
4. Click **Save**
5. Wait 1–2 minutes. Your site will be live at:

```
https://justinkamarlowe.github.io/Prussia-to-America/
```

### 3. (Optional) Custom domain

Add a `CNAME` file to the `docs/` folder containing your domain name, then configure DNS per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Historical Place Name Mappings

| Historical Name | Modern Name | Country |
|---|---|---|
| Schneidemühl | Piła | Poland |
| Breitenstein (West Prussia) | Near Piła | Poland |
| Märkisch Friedland | Mirosławiec | Poland |
| Moltzahn (Mecklenburg) | Moltzahn | Germany |
| Buschmühl (nr. Demmin) | Near Demmin | Germany |
| Schweix (Pfalz) | Schweix, Rhineland-Palatinate | Germany |
| Pfalz | Rhineland-Palatinate | Germany |
| Pirmasens | Pirmasens, Rhineland-Palatinate | Germany |
| Idlewild Airport | JFK International Airport | USA |
| Mecklenburg | Mecklenburg-Vorpommern | Germany |
| Demmin | Demmin, Mecklenburg-Vorpommern | Germany |

## Tech Stack

- [Leaflet.js](https://leafletjs.com/) v1.9.4 — map rendering
- [CARTO](https://carto.com/) — light basemap tiles
- [Esri World Imagery](https://www.arcgis.com/) — satellite basemap
- [David Rumsey Map Collection](https://www.davidrumsey.com/) — historical overlay tiles
- [Google Fonts](https://fonts.google.com/) — Cormorant Garamond + Source Sans 3
- Vanilla JS — no frameworks, no build tools
