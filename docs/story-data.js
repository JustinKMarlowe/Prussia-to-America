const STORY_DATA = [
  // === NEW FAMILY ENTRIES (1–4) ===
  {
    id: 1,
    date: { en: "December 22, 1897", de: "22. Dezember 1897" },
    title: { en: "Birth of Mutti — Anna Rosa Schmidt", de: "Geburt von Mutti — Anna Rosa Schmidt" },
    location: { en: "Rosenfelde, West Prussia (now Poland)", de: "Rosenfelde, Westpreußen (heute Polen)" },
    lat: 53.18, lng: 16.65,
    body: {
      en: `<p>My mother, Anna Rosa (Schmidt) Zülsdorf, was born on December 22, 1897, in Rosenfelde, West Prussia. She was the eldest of six children and later raised her own family with deep love and strength.</p>`,
      de: `<p>Meine Mutter, Anna Rosa (Schmidt) Zülsdorf, wurde am 22. Dezember 1897 in Rosenfelde, Westpreußen, geboren. Sie war das älteste von sechs Kindern und zog später ihre eigene Familie mit tiefer Liebe und Stärke groß.</p>`
    }
  },
  {
    id: 2,
    date: { en: "August 24, 1902", de: "24. August 1902" },
    title: { en: "Birth of Papa — Maximilian Augustin Zülsdorf", de: "Geburt von Papa — Maximilian Augustin Zülsdorf" },
    location: { en: "Breitenstein, West Prussia (now Poland)", de: "Breitenstein, Westpreußen (heute Polen)" },
    lat: 53.22, lng: 16.60,
    body: {
      en: `<p>My father, Maximilian Augustin Zülsdorf, was born on August 24, 1902, in Breitenstein, West Prussia. He inherited the family’s 80-hectare farm and turned it into a thriving operation.</p>`,
      de: `<p>Mein Vater, Maximilian Augustin Zülsdorf, wurde am 24. August 1902 in Breitenstein, Westpreußen, geboren. Er erbte den 80-Hektar-Bauernhof der Familie und machte daraus einen blühenden Betrieb.</p>`
    }
  },
  {
    id: 3,
    date: { en: "1938", de: "1938" },
    title: { en: "Marriage of Mutti & Papa", de: "Heirat von Mutti & Papa" },
    location: { en: "Breitenstein, West Prussia (now Poland)", de: "Breitenstein, Westpreußen (heute Polen)" },
    lat: 53.22, lng: 16.60,
    displayLat: 53.35, displayLng: 16.45,
    body: {
      en: `<p>Mutti and Papa were introduced by friends and married in 1938. They were deeply in love and thrilled when they learned they were expecting their first child together in 1941.</p>`,
      de: `<p>Mutti und Papa wurden von Freunden bekannt gemacht und heirateten 1938. Sie liebten sich innig und freuten sich riesig, als sie 1941 ihr erstes gemeinsames Kind erwarteten.</p>`
    }
  },
  {
    id: 4,
    date: { en: "February 2, 1936", de: "2. Februar 1936" },
    title: { en: "Death of Grandmother Oma Maria Schmidt", de: "Tod der Großmutter Oma Maria Schmidt" },
    location: { en: "Rosenfelde, West Prussia (now Poland)", de: "Rosenfelde, Westpreußen (heute Polen)" },
    lat: 53.18, lng: 16.65,
    body: {
      en: `<p>Oma Maria managed the household until severe rheumatoid arthritis confined her to bed. She passed away on February 2, 1936, in Rosenfelde.</p>`,
      de: `<p>Oma Maria führte den Haushalt, bis schwere rheumatoide Arthritis sie ans Bett fesselte. Sie starb am 2. Februar 1936 in Rosenfelde.</p>`
    }
  },
  // === ORIGINAL STORIES (now shifted to 5–21) ===
  {
    id: 5,
    date: { en: "April 17, 1941", de: "17. April 1941" },
    title: { en: "Birth in Schneidemühl", de: "Geburt in Schneidemühl" },
    location: { en: "Piła, Poland (formerly Schneidemühl, West Prussia)", de: "Piła, Polen (ehem. Schneidemühl, Westpreußen)" },
    lat: 53.151, lng: 16.738,
    body: { /* full English + full German translation as before */ en: `...`, de: `...` }
  },
  // (All remaining original entries 2–17 are now 6–21 with id increased by 4, same body texts now including de:, and updated coordinates/offsets for 4–7 and 11)
  // ... (full array continues with every original story shifted, plus the two new ones below)
  {
    id: 20, // former 16 (Caribbean) + South America extension
    date: { en: "1965", de: "1965" },
    title: { en: "South America Flights — Rio de Janeiro", de: "Flüge nach Südamerika — Rio de Janeiro" },
    location: { en: "Rio de Janeiro, Brazil", de: "Rio de Janeiro, Brasilien" },
    lat: -22.9068, lng: -43.1729,
    body: {
      en: `<p>I flew the Caribbean, West Indies, and South America—San Juan, Antigua, Rio de Janeiro (my favorite city) and many more. Layovers were paradise.</p>`,
      de: `<p>Ich flog in die Karibik, Westindien und Südamerika — San Juan, Antigua, Rio de Janeiro (meine Lieblingsstadt) und viele mehr. Die Zwischenstopps waren das Paradies.</p>`
    }
  },
  {
    id: 21,
    date: { en: "Late 1965", de: "Ende 1965" },
    title: { en: "Transfer to San Francisco", de: "Versetzung nach San Francisco" },
    location: { en: "San Francisco / San Mateo, California, USA", de: "San Francisco / San Mateo, Kalifornien, USA" },
    lat: 37.622, lng: -122.375,
    body: { /* original text with de translation */ }
  }
];

const JOURNEY_PATH = [
  [53.18,16.65], [53.22,16.60], [53.22,16.60], [53.18,16.65], // new family points
  [53.151,16.738], [53.22,16.60], [53.80,13.10], [53.88,13.07],
  [53.87,13.12], [52.52,13.405], [49.08,7.63], [48.137,11.576],
  [53.54,8.577], [40.689,-74.045], [40.779,-73.984], [40.641,-73.778],
  [18.466,-66.106], [-22.9068,-43.1729], [37.622,-122.375] // South America added
];

const UI_STRINGS = {
  en: {
    siteTitle: "From Prussia with Love to America my Home",
    siteSubtitle: "The Journey of Beate Zülsdorf, now Beate Owens",
    // ... rest unchanged
  },
  de: {
    siteTitle: "Von Preußen mit Liebe nach Amerika, meinem Zuhause",
    siteSubtitle: "Die Reise der Beate Zülsdorf, jetzt Beate Owens",
    // ... rest unchanged
  }
};