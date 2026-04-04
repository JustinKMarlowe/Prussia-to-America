# From Prussia with Love

An interactive map tracing the life journey of Beate Zülsdorf (later Beate Owens) — from her birth in West Prussia in 1941 through WWII evacuation, life in Soviet-occupied East Germany, escape to West Germany, and immigration to America in 1963 as a Pan American World Airways stewardess.

## Features

- **Interactive Map** — Leaflet.js map with markers at each location in Beate's journey
- **Timeline Sidebar** — Chronological list of all story chapters
- **Story Panel** — Click any marker or timeline entry to read that chapter
- **Bilingual** — Full EN/DE toggle for all text (story content, UI labels, tooltips)
- **Responsive** — Works on desktop, tablet, and mobile
- **No build step** — Pure HTML/CSS/JS, ready to deploy as-is

## File Structure

```
Prussia-to-America/
├── index.html          # Main HTML page
├── style.css           # All styles
├── app.js              # Map, timeline, and interaction logic
├── story-data.js       # All story entries with coordinates & bilingual text
└── README.md           # This file
```

## Deploying to GitHub Pages

### 1. Push files to the repository

```bash
git clone https://github.com/JustinKMarlowe/Prussia-to-America.git
cd Prussia-to-America

# Copy all four files (index.html, style.css, app.js, story-data.js) into this directory

git add .
git commit -m "Initial deploy: interactive story map"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to **https://github.com/JustinKMarlowe/Prussia-to-America/settings/pages**
2. Under **Source**, select **Deploy from a branch**
3. Under **Branch**, select `main` and folder `/ (root)`
4. Click **Save**
5. Wait 1–2 minutes. Your site will be live at:

```
https://justinkamarlowe.github.io/Prussia-to-America/
```

### 3. (Optional) Custom domain

If you want a custom domain, add a `CNAME` file to the repo root containing your domain name, then configure DNS per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Historical Place Name Mappings

| Historical Name | Modern Name | Country |
|---|---|---|
| Schneidemühl | Piła | Poland |
| Breitenstein (West Prussia) | Near Piła | Poland |
| Märkisch Friedland | Mirosławiec | Poland |
| Moltzahn (Mecklenburg) | Moltzahn | Germany |
| Buschmühl (nr. Demmin) | Near Demmin | Germany |
| Schweix (Pfalz) | Schweix | Germany |
| Idlewild Airport | JFK Airport | USA |

## Tech Stack

- [Leaflet.js](https://leafletjs.com/) v1.9.4 — map rendering
- [CARTO](https://carto.com/) — light basemap tiles
- [Google Fonts](https://fonts.google.com/) — Cormorant Garamond + Source Sans 3
- Vanilla JS — no frameworks, no build tools
