// =============================================
// story-data.js — From Prussia with Love
// Full cohesive autobiography with modern place names
// =============================================

const STORY_DATA = [
  {
    id: 1,
    date: { en: "April 17, 1941", de: "17. April 1941" },
    title: { en: "Birth in Schneidemühl", de: "Geburt in Schneidemühl" },
    location: { en: "Piła, Poland (formerly Schneidemühl, West Prussia)", de: "Piła, Polen (ehem. Schneidemühl, Westpreußen)" },
    lat: 53.151,
    lng: 16.738,
    body: {
      en: `<p>On a crisp, sunlit winter morning in <span class="placename" data-old="Breitenstein" data-new="Dobino (near Piła, Poland)">Breitenstein</span> (now Dobino near Piła, Poland — the German name was used until 1945, after which the area became Polish following World War II border changes and the expulsion of the German population), Mutti stood by the window, happily feeling the baby move. Suddenly she spotted a rat in the barn and shuddered — rodents terrified her. At that exact moment, eighteen-year-old Georg crept up and stroked her shoulder, startling her. She screamed, thinking something was crawling on her. The fright brought on labor pains. The doctor was called, and Papa hitched up the carriage to rush her to the hospital in <span class="placename" data-old="Schneidemühl" data-new="Piła, Poland">Schneidemühl</span> (German name used until 1945; now Piła, Poland — the original Polish name was restored after World War II when the area was returned to Polish control under the Potsdam Agreement).</p><p>Shortly after midnight on April 17, 1941, I was born prematurely — a rosy-cheeked baby girl with pitch-black hair. They named me Beate, meaning "blessed" in Latin. Papa teased Mutti good-naturedly about my dark hair until it turned into golden curls. Despite being a month early, I thrived. I looked just like my father; Uncle Hans called me "Klein Mäxchen" (little Max). I was Papa's "little sunshine."</p>`
    }
  },
  {
    id: 2,
    date: { en: "1941–1944", de: "1941–1944" },
    title: { en: "Childhood on the Farm in Breitenstein", de: "Kindheit auf dem Bauernhof in Breitenstein" },
    location: { en: "Breitenstein, West Prussia (near Piła, Poland)", de: "Breitenstein, Westpreußen (bei Piła, Polen)" },
    lat: 53.22,
    lng: 16.60,
    displayLat: 53.32,
    displayLng: 16.42,
    body: {
      en: `<p>My father, Maximilian Augustin Zülsdorf, was born on August 24, 1902, in <span class="placename" data-old="Breitenstein" data-new="Dobino (near Piła, Poland)">Breitenstein</span>, West Prussia. He inherited the family's 80-hectare (200-acre) farm. I had loving nursemaids, Sophie and Janina Purmann, and played happily with every baby animal on the farm. My favorite horse was Borina. Life on the farm was full of small adventures, but I felt safe and adored, especially by my grandfather Opa.</p>`
    }
  },
  {
    id: 3,
    date: { en: "Autumn 1944", de: "Herbst 1944" },
    title: { en: "Father Drafted — Last Goodbye", de: "Vater eingezogen — Letzter Abschied" },
    location: { en: "Breitenstein, West Prussia (near Piła, Poland)", de: "Breitenstein, Westpreußen (bei Piła, Polen)" },
    lat: 53.22,
    lng: 16.60,
    displayLat: 53.12,
    displayLng: 16.78,
    body: {
      en: `<p>The war reached our peaceful farm in 1944. Papa was conscripted into Hitler's Volkssturm. The last time we saw him, he held me in one arm and embraced Mutti while we all cried. He was sent to the Russian front and listed as missing in action (MIA). We never received official word of his fate.</p>`
    }
  },
  {
    id: 4,
    date: { en: "February 1945", de: "Februar 1945" },
    title: { en: "Evacuation — The Trek West", de: "Evakuierung — Der Treck nach Westen" },
    location: { en: "From Breitenstein to Moltzahn (approx. 200 miles west)", de: "Von Breitenstein nach Moltzahn (ca. 320 km westlich)" },
    lat: 53.80,
    lng: 13.10,
    displayLat: 53.98,
    displayLng: 12.80,
    body: {
      en: `<p>In February 1945 we joined a horse-drawn wagon train evacuating westward to <span class="placename" data-old="Mecklenburg" data-new="Mecklenburg-Vorpommern, Germany">Mecklenburg</span>. In <span class="placename" data-old="Märkisch Friedland" data-new="Mirosławiec, Poland">Märkisch Friedland</span> (now Mirosławiec, Poland — transferred to Poland after World War II) we reunited with Georg. We reached the small town of <span class="placename" data-old="Moltzahn" data-new="Moltzahn, Mecklenburg-Vorpommern, Germany">Moltzahn</span> in the <span class="placename" data-old="Demmin" data-new="Demmin, Mecklenburg-Vorpommern, Germany">Demmin</span> district in March 1945.</p>`
    }
  },
  {
    id: 5,
    date: { en: "March–May 1945", de: "März–Mai 1945" },
    title: { en: "Russian Occupation — Terror in Moltzahn", de: "Russische Besatzung — Terror in Moltzahn" },
    location: { en: "Moltzahn, Mecklenburg-Vorpommern, Germany", de: "Moltzahn, Mecklenburg-Vorpommern, Deutschland" },
    lat: 53.88,
    lng: 13.07,
    body: {
      en: `<p>The war ended on May 8, 1945. The joy of peace was overshadowed by the terror of Russian occupation. Georg had to be hidden nightly while the Purmann brothers protected us. We survived, but the trauma lingered.</p>`
    }
  },
  {
    id: 6,
    date: { en: "1945–1953", de: "1945–1953" },
    title: { en: "Life in the Schoolhouse — Moltzahn", de: "Leben im Schulhaus — Moltzahn" },
    location: { en: "Moltzahn, Mecklenburg-Vorpommern, Germany", de: "Moltzahn, Mecklenburg-Vorpommern, Deutschland" },
    lat: 53.88,
    lng: 13.07,
    displayLat: 53.76,
    displayLng: 13.32,
    body: {
      en: `<p>In autumn 1945 we moved into the <span class="placename" data-old="Moltzahn" data-new="Moltzahn, Mecklenburg-Vorpommern">Moltzahn</span> schoolhouse. Christmas celebrations were magical despite the hardship. We learned to make do with little, but the warmth of friendship made those years bearable.</p>`
    }
  },
  {
    id: 7,
    date: { en: "1948–1952", de: "1948–1952" },
    title: { en: "Farm Life in Buschmühl", de: "Bauernhofleben in Buschmühl" },
    location: { en: "Buschmühl, near Demmin, Mecklenburg-Vorpommern, Germany", de: "Buschmühl, bei Demmin, Mecklenburg-Vorpommern, Deutschland" },
    lat: 53.87,
    lng: 13.12,
    displayLat: 53.97,
    displayLng: 13.40,
    body: {
      en: `<p>Georg married Grete and they leased a farm in <span class="placename" data-old="Buschmühl" data-new="near Demmin, Mecklenburg-Vorpommern">Buschmühl</span>. Life was filled with hard work. Between 1948 and 1952 all farmland was confiscated by the Communist government. They eventually sold Borina — their last treasure from their homeland.</p>`
    }
  },
  {
    id: 8,
    date: { en: "Autumn 1953", de: "Herbst 1953" },
    title: { en: "Escape to West Germany", de: "Flucht nach Westdeutschland" },
    location: { en: "Berlin → Schweix, Rhineland-Palatinate, Germany", de: "Berlin → Schweix, Rheinland-Pfalz, Deutschland" },
    lat: 52.52,
    lng: 13.405,
    body: {
      en: `<p>In autumn 1953 we were allowed to emigrate legally to West Germany. With sponsorship from Mr. Ried, mayor of <span class="placename" data-old="Pirmasens" data-new="Pirmasens, Rhineland-Palatinate">Pirmasens</span> in the <span class="placename" data-old="Pfalz" data-new="Rhineland-Palatinate (Rheinland-Pfalz), Germany">Pfalz</span> (now Rhineland-Palatinate), we moved to the tiny border village of <span class="placename" data-old="Schweix" data-new="Schweix, Rhineland-Palatinate">Schweix</span> near the French <span class="placename" data-old="Elsaß/Lothringen" data-new="Alsace-Lorraine (now part of Grand Est, France)">Elsaß/Lothringen</span> border (the territory was returned to France permanently in 1945).</p>`
    }
  },
  {
    id: 9,
    date: { en: "December 1953", de: "Dezember 1953" },
    title: { en: "New Life in Schweix", de: "Neues Leben in Schweix" },
    location: { en: "Schweix, Rhineland-Palatinate, West Germany", de: "Schweix, Rheinland-Pfalz, Westdeutschland" },
    lat: 49.08,
    lng: 7.63,
    body: {
      en: `<p>We arrived in December 1953 with two suitcases. Our first Christmas in the new attic apartment was the saddest we ever spent. I entered seventh grade in January 1954 and adjusted to life in the deeply Catholic community of Schweix.</p>`
    }
  },
  {
    id: 10,
    date: { en: "1957–1960", de: "1957–1960" },
    title: { en: "Munich: Nursing Training and Loss", de: "München: Krankenpflege-Ausbildung und Verlust" },
    location: { en: "Munich, Bavaria, Germany", de: "München, Bayern, Deutschland" },
    lat: 48.137,
    lng: 11.576,
    body: {
      en: `<p>In August 1957 at age sixteen I moved to Munich to train with the Caritas Sisters. I loved working in the baby nursery. In 1959 Mutti was diagnosed with breast cancer and passed away on August 11, 1960. I was nineteen and suddenly alone in West Germany.</p>`
    }
  },
  {
    id: 11,
    date: { en: "Summer 1962", de: "Sommer 1962" },
    title: { en: "Vacation on the Costa Brava, Spain", de: "Urlaub an der Costa Brava, Spanien" },
    location: { en: "Costa Brava, Spain", de: "Costa Brava, Spanien" },
    lat: 41.614,
    lng: 2.654,
    body: {
      en: `<p>Our highlight was a memorable two-week bus trip along the Costa Brava in Spain in 1962, visiting ancient Roman sites, beaches, and mountain villages.</p>`
    }
  },
  {
    id: 12,
    date: { en: "May 1, 1963", de: "1. Mai 1963" },
    title: { en: "Departure — SS United States from Bremerhaven", de: "Abfahrt — SS United States ab Bremerhaven" },
    location: { en: "Bremerhaven, Germany", de: "Bremerhaven, Deutschland" },
    lat: 53.54,
    lng: 8.577,
    body: {
      en: `<p>On May 1, 1963 I boarded the SS United States in Bremerhaven. The five-day crossing was magical until seasickness hit in the Gulf Stream.</p>`
    }
  },
  {
    id: 13,
    date: { en: "May 7, 1963", de: "7. Mai 1963" },
    title: { en: "Arrival in America — New York Harbor", de: "Ankunft in Amerika — New Yorker Hafen" },
    location: { en: "New York Harbor, New York, USA", de: "New Yorker Hafen, New York, USA" },
    lat: 40.689,
    lng: -74.045,
    body: {
      en: `<p>At sunrise on May 7, 1963, the Statue of Liberty appeared. I stepped onto American soil in New York Harbor. Joan and Lynn Hall welcomed me warmly in Port Washington on Long Island.</p>`
    }
  },
  {
    id: 14,
    date: { en: "1964", de: "1964" },
    title: { en: "Life in Manhattan", de: "Leben in Manhattan" },
    location: { en: "Manhattan, New York, USA", de: "Manhattan, New York, USA" },
    lat: 40.779,
    lng: -73.984,
    displayLat: 40.85,
    displayLng: -73.85,
    body: {
      en: `<p>The Halls moved to a spacious apartment on 72nd Street and Riverside Drive. I loved New York and met Peter, a Boston engineer. We explored Boston and New England together.</p>`
    }
  },
  {
    id: 15,
    date: { en: "December 1964", de: "Dezember 1964" },
    title: { en: "Pan Am Stewardess Training", de: "Pan Am Stewardess-Ausbildung" },
    location: { en: "Idlewild (JFK) Airport, New York, USA", de: "Idlewild (JFK) Flughafen, New York, USA" },
    lat: 40.641,
    lng: -73.778,
    displayLat: 40.52,
    displayLng: -73.60,
    body: {
      en: `<p>I was accepted by Pan Am. After the strict "Air Force egg diet" I passed the weight check. Training was intense. Our class photo was taken at then <span class="placename" data-old="Idlewild Airport" data-new="John F. Kennedy (JFK) International Airport">Idlewild</span> (now John F. Kennedy International Airport).</p>`
    }
  },
  {
    id: 16,
    date: { en: "1965", de: "1965" },
    title: { en: "Flying the Caribbean & South America", de: "Flüge in die Karibik & Südamerika" },
    location: { en: "San Juan, Puerto Rico & Caribbean", de: "San Juan, Puerto Rico & Karibik" },
    lat: 18.466,
    lng: -66.106,
    body: {
      en: `<p>I flew to San Juan, Antigua, Rio de Janeiro and many Caribbean islands. Layovers were paradise — sailing, snorkeling, and unforgettable adventures with friends.</p>`
    }
  },
  {
    id: 17,
    date: { en: "Late 1965", de: "Ende 1965" },
    title: { en: "Transfer to San Francisco", de: "Versetzung nach San Francisco" },
    location: { en: "San Francisco / San Mateo, California, USA", de: "San Francisco / San Mateo, Kalifornien, USA" },
    lat: 37.622,
    lng: -122.375,
    body: {
      en: `<p>In late 1965 I transferred to San Francisco. Joan and Lynn had moved to San Mateo and reserved a room for me. On one Pacific flight we received a bomb threat but landed safely. My American adventure had truly begun.</p>`
    }
  }
];

const JOURNEY_PATH = [
  [53.151, 16.738], [53.22, 16.60], [53.80, 13.10], [53.88, 13.07],
  [53.87, 13.12], [52.52, 13.405], [49.08, 7.63], [48.137, 11.576],
  [53.54, 8.577], [40.689, -74.045], [40.779, -73.984], [40.641, -73.778],
  [18.466, -66.106], [37.622, -122.375]
];

const UI_STRINGS = {
  en: {
    siteTitle: "From Prussia with Love",
    siteSubtitle: "The Journey of Beate Zülsdorf",
    timeline: "Timeline",
    aboutTitle: "About This Project",
    aboutText: "This interactive map traces the remarkable life journey of Beate Zülsdorf (later Beate Owens), from her birth in West Prussia in 1941 through WWII evacuation, life in Soviet-occupied East Germany, escape to West Germany, and immigration to America in 1963 as a Pan American World Airways stewardess. Click any marker or timeline entry to read that chapter. Hover over highlighted place names for historical → modern name mapping.",
    basemapLight: "Light Map",
    basemapSatellite: "Satellite",
    historicalOverlay: "Historical Names (1930s–40s)",
    layers: "Layers"
  },
  de: {
    siteTitle: "Aus Preußen mit Liebe",
    siteSubtitle: "Die Reise der Beate Zülsdorf",
    timeline: "Zeitstrahl",
    aboutTitle: "Über dieses Projekt",
    aboutText: "Diese interaktive Karte zeichnet die bemerkenswerte Lebensreise von Beate Zülsdorf nach — von ihrer Geburt in Westpreußen 1941 über die Evakuierung im Zweiten Weltkrieg, ihre Kindheit im sowjetisch besetzten Ostdeutschland, die Flucht nach Westdeutschland und die Einwanderung nach Amerika 1963, wo sie Stewardess bei Pan American World Airways wurde.",
    basemapLight: "Helle Karte",
    basemapSatellite: "Satellit",
    historicalOverlay: "Historische Namen (1930er–40er)",
    layers: "Ebenen"
  }
};