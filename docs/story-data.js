// =============================================
// story-data.js — From Prussia with Love
// Full cohesive autobiography with modern place names
// Includes family background, German translations,
// South America, and corrected marker positions
// =============================================

const STORY_DATA = [
  // ---- FAMILY BACKGROUND ----
  {
    id: "family-oma",
    section: "family",
    date: { en: "1836 – Feb 2, 1936", de: "1836 – 2. Februar 1936" },
    title: { en: "Oma — Maria Schmidt", de: "Oma — Maria Schmidt" },
    location: { en: "Rosenfelde, West Prussia (now Poland)", de: "Rosenfelde, Westpreußen (heute Polen)" },
    lat: 53.30,
    lng: 16.50,
    body: {
      en: `<p>My grandmother (Oma) Maria Schmidt managed the household in <span class="placename" data-old="Rosenfelde" data-new="now part of Poland">Rosenfelde</span>, West Prussia. She was a strong, capable woman who kept the family together. Severe rheumatoid arthritis eventually confined her to bed for her final seven years. She passed away on February 2, 1936, before the war upended everything.</p>`,
      de: `<p>Meine Großmutter (Oma) Maria Schmidt führte den Haushalt in <span class="placename" data-old="Rosenfelde" data-new="heute Teil Polens">Rosenfelde</span>, Westpreußen. Sie war eine starke, fähige Frau, die die Familie zusammenhielt. Schwere rheumatoide Arthritis fesselte sie in ihren letzten sieben Lebensjahren ans Bett. Sie verstarb am 2. Februar 1936, bevor der Krieg alles veränderte.</p>`
    }
  },
  {
    id: "family-opa",
    section: "family",
    date: { en: "~1860s – after 1945", de: "~1860er – nach 1945" },
    title: { en: "Opa — Paul Schmidt, Headmaster", de: "Opa — Paul Schmidt, Schulleiter" },
    location: { en: "Rosenfelde, West Prussia (now Poland)", de: "Rosenfelde, Westpreußen (heute Polen)" },
    lat: 53.30,
    lng: 16.50,
    displayLat: 53.40,
    displayLng: 16.35,
    body: {
      en: `<p>My grandfather (Opa) Paul Schmidt was the respected headmaster of the local school in <span class="placename" data-old="Rosenfelde" data-new="now part of Poland">Rosenfelde</span>. I called him Opachen. He was my protector, my hero, and the one person who could always calm me or shield me from a well-deserved scolding.</p><p>Opa had a wonderful sense of humor and a mischievous twinkle in his eye. His little mishaps—wearing house slippers to church, putting on Mutti's beret under his top hat, or accidentally throwing rotten apples at a teacher's wife—became family legends. Life with him was never dull.</p>`,
      de: `<p>Mein Großvater (Opa) Paul Schmidt war der angesehene Schulleiter der örtlichen Schule in <span class="placename" data-old="Rosenfelde" data-new="heute Teil Polens">Rosenfelde</span>. Ich nannte ihn Opachen. Er war mein Beschützer, mein Held und der einzige Mensch, der mich immer beruhigen oder vor einer wohlverdienten Standpauke bewahren konnte.</p><p>Opa hatte einen wunderbaren Humor und ein verschmitztes Funkeln in den Augen. Seine kleinen Missgeschicke — Hausschuhe in der Kirche tragen, Muttis Baskenmütze unter den Zylinder setzen oder versehentlich faule Äpfel nach der Frau des Lehrers werfen — wurden zu Familienlegenden. Mit ihm war das Leben nie langweilig.</p>`
    }
  },
  {
    id: "family-mutti",
    section: "family",
    date: { en: "Dec 22, 1897 – Aug 11, 1960", de: "22. Dez. 1897 – 11. Aug. 1960" },
    title: { en: "Mutti — Anna Rosa (Schmidt) Zülsdorf", de: "Mutti — Anna Rosa (Schmidt) Zülsdorf" },
    location: { en: "Born Rosenfelde; later Berlin, Munich", de: "Geb. Rosenfelde; später Berlin, München" },
    lat: 52.52,
    lng: 13.38,
    body: {
      en: `<p>My mother, Anna Rosa (Schmidt) Zülsdorf, was born on December 22, 1897, in <span class="placename" data-old="Rosenfelde" data-new="now part of Poland">Rosenfelde</span>, West Prussia. She was the eldest of six children. At age six she was sent to Berlin for a proper education and raised by her wealthy grandmother and aunt. She attended the prestigious Ursulinerinnen College, studied classical music, and at eleven sang a solo of Schubert's "Ave Maria" at a royal wedding in Berlin's Rosenkranz Cathedral.</p><p>After college she married Hermann Hirschfeld; my brother Georg was born on March 15, 1923. The marriage ended in divorce, and when Georg was twelve, Mutti and he returned to Rosenfelde. She later married my father, Maximilian Zülsdorf, in 1938. They were deeply in love. Mutti passed away on August 11, 1960, in Munich, of breast cancer at age sixty-three.</p>`,
      de: `<p>Meine Mutter, Anna Rosa (Schmidt) Zülsdorf, wurde am 22. Dezember 1897 in <span class="placename" data-old="Rosenfelde" data-new="heute Teil Polens">Rosenfelde</span>, Westpreußen, geboren. Sie war die Älteste von sechs Kindern. Mit sechs Jahren wurde sie zur Ausbildung nach Berlin geschickt und von ihrer wohlhabenden Großmutter und Tante aufgezogen. Sie besuchte das renommierte Ursulinerinnen-Kolleg, studierte klassische Musik und sang mit elf Jahren ein Solo von Schuberts „Ave Maria" bei einer königlichen Hochzeit in der Berliner Rosenkranz-Kathedrale.</p><p>Nach dem Studium heiratete sie Hermann Hirschfeld; mein Bruder Georg wurde am 15. März 1923 geboren. Die Ehe wurde geschieden, und als Georg zwölf war, kehrten Mutti und er nach Rosenfelde zurück. Später heiratete sie meinen Vater Maximilian Zülsdorf im Jahr 1938. Sie waren zutiefst verliebt. Mutti starb am 11. August 1960 in München an Brustkrebs, im Alter von dreiundsechzig Jahren.</p>`
    }
  },
  {
    id: "family-papa",
    section: "family",
    date: { en: "Aug 24, 1902 – MIA ~1945", de: "24. Aug. 1902 – vermisst ~1945" },
    title: { en: "Papa — Maximilian Augustin Zülsdorf", de: "Papa — Maximilian Augustin Zülsdorf" },
    location: { en: "Breitenstein, West Prussia (near Piła, Poland)", de: "Breitenstein, Westpreußen (bei Piła, Polen)" },
    lat: 53.22,
    lng: 16.60,
    displayLat: 53.10,
    displayLng: 16.45,
    body: {
      en: `<p>My father, Maximilian Augustin Zülsdorf, was born on August 24, 1902, in <span class="placename" data-old="Breitenstein" data-new="Dobino (near Piła, Poland)">Breitenstein</span>, West Prussia. He was the eldest of six and inherited the family's 80-hectare (200-acre) farm after studying agriculture and forestry. He turned a profit within two years. His parents had passed away before the war.</p><p>Mutti and Papa were introduced by friends and married in 1938. They were deeply in love. In autumn 1944, at forty-two, Papa was conscripted into Hitler's Volkssturm. He was sent to the Russian front and listed as missing in action. We never received official word of his fate. For years we hoped he might be in a Soviet prison camp, but the last prisoner transports in 1952 brought no news.</p>`,
      de: `<p>Mein Vater, Maximilian Augustin Zülsdorf, wurde am 24. August 1902 in <span class="placename" data-old="Breitenstein" data-new="Dobino (bei Piła, Polen)">Breitenstein</span>, Westpreußen, geboren. Er war der Älteste von sechs Kindern und erbte den 80 Hektar großen Familienhof nach dem Studium der Landwirtschaft und Forstwirtschaft. Innerhalb von zwei Jahren machte er den Hof profitabel. Seine Eltern waren vor dem Krieg verstorben.</p><p>Mutti und Papa wurden von Freunden einander vorgestellt und heirateten 1938. Sie waren zutiefst verliebt. Im Herbst 1944, mit zweiundvierzig Jahren, wurde Papa in Hitlers Volkssturm eingezogen. Er wurde an die russische Front geschickt und als vermisst gemeldet. Wir erhielten nie offizielle Nachricht über sein Schicksal. Jahrelang hofften wir, er könnte in einem sowjetischen Gefangenenlager sein, aber die letzten Gefangenentransporte 1952 brachten keine Nachricht.</p>`
    }
  },

  // ---- BEATE'S JOURNEY ----
  {
    id: 1,
    date: { en: "April 17, 1941", de: "17. April 1941" },
    title: { en: "Birth in Schneidemühl", de: "Geburt in Schneidemühl" },
    location: { en: "Piła, Poland (formerly Schneidemühl, West Prussia)", de: "Piła, Polen (ehem. Schneidemühl, Westpreußen)" },
    lat: 53.151,
    lng: 16.738,
    body: {
      en: `<p>On a crisp, sunlit winter morning in <span class="placename" data-old="Breitenstein" data-new="Dobino (near Piła, Poland)">Breitenstein</span> (now Dobino near Piła, Poland — the German name was used until 1945, after which the area became Polish following World War II border changes and the expulsion of the German population), Mutti stood by the window, happily feeling the baby move. Suddenly she spotted a rat in the barn and shuddered — rodents terrified her. At that exact moment, eighteen-year-old Georg crept up and stroked her shoulder, startling her. She screamed, thinking something was crawling on her. The fright brought on labor pains. The doctor was called, and Papa hitched up the carriage to rush her to the hospital in <span class="placename" data-old="Schneidemühl" data-new="Piła, Poland">Schneidemühl</span> (German name used until 1945; now Piła, Poland — the original Polish name was restored after World War II when the area was returned to Polish control under the Potsdam Agreement).</p><p>Shortly after midnight on April 17, 1941, I was born prematurely — a rosy-cheeked baby girl with pitch-black hair. They named me Beate, meaning "blessed" in Latin. Papa teased Mutti good-naturedly about my dark hair until it turned into golden curls. Despite being a month early, I thrived. I looked just like my father; Uncle Hans called me "Klein Mäxchen" (little Max). I was Papa's "little sunshine."</p>`,
      de: `<p>An einem frischen, sonnigen Wintermorgen in <span class="placename" data-old="Breitenstein" data-new="Dobino (bei Piła, Polen)">Breitenstein</span> (heute Dobino bei Piła, Polen) stand Mutti am Fenster und spürte glücklich die Bewegungen des Babys. Plötzlich entdeckte sie eine Ratte in der Scheune und erschauderte — Nagetiere machten ihr Angst. Genau in diesem Moment schlich sich der achtzehnjährige Georg heran und streichelte ihre Schulter, was sie erschreckte. Sie schrie, dachte, etwas krabbele auf ihr. Der Schreck löste Wehen aus. Der Arzt wurde gerufen, und Papa spannte die Kutsche an, um sie ins Krankenhaus nach <span class="placename" data-old="Schneidemühl" data-new="Piła, Polen">Schneidemühl</span> zu bringen.</p><p>Kurz nach Mitternacht am 17. April 1941 wurde ich zu früh geboren — ein rosiges Mädchen mit pechschwarzem Haar. Sie nannten mich Beate, was auf Lateinisch „die Gesegnete" bedeutet. Papa neckte Mutti gutmütig wegen meiner dunklen Haare, bis sie sich in goldene Locken verwandelten. Trotz der Frühgeburt gedieh ich prächtig. Ich sah aus wie mein Vater; Onkel Hans nannte mich „Klein Mäxchen." Ich war Papas „kleiner Sonnenschein."</p>`
    }
  },
  {
    id: 2,
    date: { en: "1941–1944", de: "1941–1944" },
    title: { en: "Childhood on the Farm in Breitenstein", de: "Kindheit auf dem Bauernhof in Breitenstein" },
    location: { en: "Breitenstein, West Prussia (near Piła, Poland)", de: "Breitenstein, Westpreußen (bei Piła, Polen)" },
    lat: 53.22,
    lng: 16.60,
    body: {
      en: `<p>My father, Maximilian Augustin Zülsdorf, was born on August 24, 1902, in <span class="placename" data-old="Breitenstein" data-new="Dobino (near Piła, Poland)">Breitenstein</span>, West Prussia. He inherited the family's 80-hectare (200-acre) farm. I had loving nursemaids, Sophie and Janina Purmann, and played happily with every baby animal on the farm. My favorite horse was Borina. Life on the farm was full of small adventures, but I felt safe and adored, especially by my grandfather Opa.</p>`,
      de: `<p>Mein Vater, Maximilian Augustin Zülsdorf, wurde am 24. August 1902 in <span class="placename" data-old="Breitenstein" data-new="Dobino (bei Piła, Polen)">Breitenstein</span>, Westpreußen, geboren. Er erbte den 80 Hektar großen Familienhof. Ich hatte liebevolle Kindermädchen, Sophie und Janina Purmann, und spielte fröhlich mit jedem Tierbaby auf dem Hof. Mein Lieblingspferd war Borina. Das Leben auf dem Hof war voller kleiner Abenteuer, und ich fühlte mich sicher und geliebt, besonders von meinem Großvater Opa.</p>`
    }
  },
  {
    id: 3,
    date: { en: "Autumn 1944", de: "Herbst 1944" },
    title: { en: "Father Drafted — Last Goodbye", de: "Vater eingezogen — Letzter Abschied" },
    location: { en: "Breitenstein, West Prussia (near Piła, Poland)", de: "Breitenstein, Westpreußen (bei Piła, Polen)" },
    lat: 53.22,
    lng: 16.60,
    displayLat: 53.32,
    displayLng: 16.75,
    body: {
      en: `<p>The war reached our peaceful farm in 1944. Papa was conscripted into Hitler's Volkssturm. The last time we saw him, he held me in one arm and embraced Mutti while we all cried. He was sent to the Russian front and listed as missing in action (MIA). We never received official word of his fate.</p>`,
      de: `<p>Der Krieg erreichte unseren friedlichen Hof 1944. Papa wurde in Hitlers Volkssturm eingezogen. Das letzte Mal, als wir ihn sahen, hielt er mich auf einem Arm und umarmte Mutti, während wir alle weinten. Er wurde an die russische Front geschickt und als vermisst gemeldet. Wir erhielten nie offiziell Nachricht über sein Schicksal.</p>`
    }
  },
  {
    id: 4,
    date: { en: "February 1945", de: "Februar 1945" },
    title: { en: "Evacuation — The Trek West", de: "Evakuierung — Der Treck nach Westen" },
    location: { en: "From Breitenstein to Moltzahn (approx. 200 miles west)", de: "Von Breitenstein nach Moltzahn (ca. 320 km westlich)" },
    lat: 53.80,
    lng: 13.10,
    body: {
      en: `<p>In February 1945 we joined a horse-drawn wagon train evacuating westward to <span class="placename" data-old="Mecklenburg" data-new="Mecklenburg-Vorpommern, Germany">Mecklenburg</span>. In <span class="placename" data-old="Märkisch Friedland" data-new="Mirosławiec, Poland">Märkisch Friedland</span> (now Mirosławiec, Poland — transferred to Poland after World War II) we reunited with Georg. We reached the small town of <span class="placename" data-old="Moltzahn" data-new="Moltzahn, Mecklenburg-Vorpommern, Germany">Moltzahn</span> in the <span class="placename" data-old="Demmin" data-new="Demmin, Mecklenburg-Vorpommern, Germany">Demmin</span> district in March 1945.</p>`,
      de: `<p>Im Februar 1945 schlossen wir uns einem Pferdewagen-Treck an, der westwärts nach <span class="placename" data-old="Mecklenburg" data-new="Mecklenburg-Vorpommern, Deutschland">Mecklenburg</span> evakuierte. In <span class="placename" data-old="Märkisch Friedland" data-new="Mirosławiec, Polen">Märkisch Friedland</span> (heute Mirosławiec, Polen) trafen wir Georg wieder. Wir erreichten die kleine Stadt <span class="placename" data-old="Moltzahn" data-new="Moltzahn, Mecklenburg-Vorpommern, Deutschland">Moltzahn</span> im Kreis <span class="placename" data-old="Demmin" data-new="Demmin, Mecklenburg-Vorpommern, Deutschland">Demmin</span> im März 1945.</p>`
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
      en: `<p>The war ended on May 8, 1945. The joy of peace was overshadowed by the terror of Russian occupation. Georg had to be hidden nightly while the Purmann brothers protected us. We survived, but the trauma lingered.</p>`,
      de: `<p>Der Krieg endete am 8. Mai 1945. Die Freude über den Frieden wurde vom Terror der russischen Besatzung überschattet. Georg musste nachts versteckt werden, während die Brüder Purmann uns beschützten. Wir überlebten, aber das Trauma blieb.</p>`
    }
  },
  {
    id: 6,
    date: { en: "1945–1953", de: "1945–1953" },
    title: { en: "Life in the Schoolhouse — Moltzahn", de: "Leben im Schulhaus — Moltzahn" },
    location: { en: "Moltzahn, Mecklenburg-Vorpommern, Germany", de: "Moltzahn, Mecklenburg-Vorpommern, Deutschland" },
    lat: 53.88,
    lng: 13.07,
    displayLat: 53.82,
    displayLng: 12.90,
    body: {
      en: `<p>In autumn 1945 we moved into the <span class="placename" data-old="Moltzahn" data-new="Moltzahn, Mecklenburg-Vorpommern">Moltzahn</span> schoolhouse. Christmas celebrations were magical despite the hardship. We learned to make do with little, but the warmth of friendship made those years bearable.</p>`,
      de: `<p>Im Herbst 1945 zogen wir in das <span class="placename" data-old="Moltzahn" data-new="Moltzahn, Mecklenburg-Vorpommern">Moltzahner</span> Schulhaus ein. Die Weihnachtsfeiern waren trotz der Entbehrungen zauberhaft. Wir lernten, mit wenig auszukommen, aber die Wärme der Freundschaft machte diese Jahre erträglich.</p>`
    }
  },
  {
    id: 7,
    date: { en: "1948–1952", de: "1948–1952" },
    title: { en: "Farm Life in Buschmühl", de: "Bauernhofleben in Buschmühl" },
    location: { en: "Buschmühl, near Demmin, Mecklenburg-Vorpommern, Germany", de: "Buschmühl, bei Demmin, Mecklenburg-Vorpommern, Deutschland" },
    lat: 53.87,
    lng: 13.12,
    displayLat: 53.94,
    displayLng: 13.25,
    body: {
      en: `<p>Georg married Grete and they leased a farm in <span class="placename" data-old="Buschmühl" data-new="near Demmin, Mecklenburg-Vorpommern">Buschmühl</span>. Life was filled with hard work. Between 1948 and 1952 all farmland was confiscated by the Communist government. They eventually sold Borina — their last treasure from their homeland.</p>`,
      de: `<p>Georg heiratete Grete und pachtete einen Hof in <span class="placename" data-old="Buschmühl" data-new="bei Demmin, Mecklenburg-Vorpommern">Buschmühl</span>. Das Leben war von harter Arbeit geprägt. Zwischen 1948 und 1952 wurde sämtliches Ackerland von der kommunistischen Regierung enteignet. Schließlich verkauften sie Borina — ihren letzten Schatz aus der Heimat.</p>`
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
      en: `<p>In autumn 1953 we were allowed to emigrate legally to West Germany. With sponsorship from Mr. Ried, mayor of <span class="placename" data-old="Pirmasens" data-new="Pirmasens, Rhineland-Palatinate">Pirmasens</span> in the <span class="placename" data-old="Pfalz" data-new="Rhineland-Palatinate (Rheinland-Pfalz), Germany">Pfalz</span> (now Rhineland-Palatinate), we moved to the tiny border village of <span class="placename" data-old="Schweix" data-new="Schweix, Rhineland-Palatinate">Schweix</span> near the French <span class="placename" data-old="Elsaß/Lothringen" data-new="Alsace-Lorraine (now part of Grand Est, France)">Elsaß/Lothringen</span> border (the territory was returned to France permanently in 1945).</p>`,
      de: `<p>Im Herbst 1953 durften wir legal nach Westdeutschland auswandern. Mit Bürgschaftspapieren von Herrn Ried, dem Bürgermeister von <span class="placename" data-old="Pirmasens" data-new="Pirmasens, Rheinland-Pfalz">Pirmasens</span> in der <span class="placename" data-old="Pfalz" data-new="Rheinland-Pfalz, Deutschland">Pfalz</span>, zogen wir in das winzige Grenzdorf <span class="placename" data-old="Schweix" data-new="Schweix, Rheinland-Pfalz">Schweix</span> nahe der französischen <span class="placename" data-old="Elsaß/Lothringen" data-new="Elsass-Lothringen (heute Teil von Grand Est, Frankreich)">Elsaß/Lothringen</span>-Grenze.</p>`
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
      en: `<p>We arrived in December 1953 with two suitcases. Our first Christmas in the new attic apartment was the saddest we ever spent. I entered seventh grade in January 1954 and adjusted to life in the deeply Catholic community of Schweix.</p>`,
      de: `<p>Wir kamen im Dezember 1953 mit zwei Koffern an. Unser erstes Weihnachten in der neuen Dachgeschosswohnung war das traurigste, das wir je erlebten. Im Januar 1954 trat ich in die siebte Klasse ein und gewöhnte mich an das Leben in der tief katholischen Gemeinde Schweix.</p>`
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
      en: `<p>In August 1957 at age sixteen I moved to Munich to train with the Caritas Sisters. I loved working in the baby nursery. In 1959 Mutti was diagnosed with breast cancer and passed away on August 11, 1960. I was nineteen and suddenly alone in West Germany.</p>`,
      de: `<p>Im August 1957, mit sechzehn Jahren, zog ich nach München, um bei den Caritas-Schwestern eine Ausbildung zu beginnen. Ich liebte die Arbeit in der Säuglingsstation. 1959 wurde bei Mutti Brustkrebs diagnostiziert, und sie verstarb am 11. August 1960. Ich war neunzehn und plötzlich allein in Westdeutschland.</p>`
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
      en: `<p>Our highlight was a memorable two-week bus trip along the Costa Brava in Spain in 1962, visiting ancient Roman sites, beaches, and mountain villages.</p>`,
      de: `<p>Unser Höhepunkt war eine unvergessliche zweiwöchige Busreise entlang der Costa Brava in Spanien 1962, bei der wir antike römische Stätten, Strände und Bergdörfer besuchten.</p>`
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
      en: `<p>On May 1, 1963 I boarded the SS United States in Bremerhaven. The five-day crossing was magical until seasickness hit in the Gulf Stream.</p>`,
      de: `<p>Am 1. Mai 1963 bestieg ich die SS United States in Bremerhaven. Die fünftägige Überfahrt war zauberhaft, bis mich im Golfstrom die Seekrankheit ereilte.</p>`
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
      en: `<p>At sunrise on May 7, 1963, the Statue of Liberty appeared. I stepped onto American soil in New York Harbor. Joan and Lynn Hall welcomed me warmly in Port Washington on Long Island.</p>`,
      de: `<p>Bei Sonnenaufgang am 7. Mai 1963 erschien die Freiheitsstatue. Ich betrat amerikanischen Boden im New Yorker Hafen. Joan und Lynn Hall empfingen mich herzlich in Port Washington auf Long Island.</p>`
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
      en: `<p>The Halls moved to a spacious apartment on 72nd Street and Riverside Drive. I loved New York and met Peter, a Boston engineer. We explored Boston and New England together.</p>`,
      de: `<p>Die Halls zogen in eine geräumige Wohnung an der 72nd Street und Riverside Drive. Ich liebte New York und lernte Peter kennen, einen Ingenieur aus Boston. Gemeinsam erkundeten wir Boston und Neuengland.</p>`
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
      en: `<p>I was accepted by Pan Am. After the strict "Air Force egg diet" I passed the weight check. Training was intense. Our class photo was taken at then <span class="placename" data-old="Idlewild Airport" data-new="John F. Kennedy (JFK) International Airport">Idlewild</span> (now John F. Kennedy International Airport).</p>`,
      de: `<p>Ich wurde bei Pan Am angenommen. Nach der strengen „Air Force Eier-Diät" bestand ich die Gewichtskontrolle. Die Ausbildung war intensiv. Unser Klassenfoto wurde am damaligen <span class="placename" data-old="Idlewild Airport" data-new="John F. Kennedy (JFK) International Airport">Idlewild</span>-Flughafen (heute John F. Kennedy International Airport) aufgenommen.</p>`
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
      en: `<p>I flew to San Juan, Antigua, Rio de Janeiro and many Caribbean islands. Layovers were paradise — sailing, snorkeling, and unforgettable adventures with friends.</p>`,
      de: `<p>Ich flog nach San Juan, Antigua, Rio de Janeiro und viele karibische Inseln. Die Aufenthalte waren paradiesisch — Segeln, Schnorcheln und unvergessliche Abenteuer mit Freunden.</p>`
    }
  },
  {
    id: 17,
    date: { en: "1965", de: "1965" },
    title: { en: "Rio de Janeiro — Favorite City", de: "Rio de Janeiro — Lieblingsstadt" },
    location: { en: "Rio de Janeiro, Brazil", de: "Rio de Janeiro, Brasilien" },
    lat: -22.951,
    lng: -43.173,
    body: {
      en: `<p>Rio de Janeiro was my favorite city. The contrasts of wealth and poverty, the Christ the Redeemer statue, and Copacabana Beach left lasting impressions. I flew there on Pan Am's South American routes, marveling at the dramatic mountains rising from the sea and the vibrant culture of Brazil.</p>`,
      de: `<p>Rio de Janeiro war meine Lieblingsstadt. Die Kontraste von Reichtum und Armut, die Christus-Erlöser-Statue und der Copacabana-Strand hinterließen bleibende Eindrücke. Ich flog dorthin auf Pan Ams südamerikanischen Routen und staunte über die dramatischen Berge, die aus dem Meer aufragten, und die lebendige Kultur Brasiliens.</p>`
    }
  },
  {
    id: 18,
    date: { en: "Late 1965", de: "Ende 1965" },
    title: { en: "Transfer to San Francisco", de: "Versetzung nach San Francisco" },
    location: { en: "San Francisco / San Mateo, California, USA", de: "San Francisco / San Mateo, Kalifornien, USA" },
    lat: 37.622,
    lng: -122.375,
    body: {
      en: `<p>In late 1965 I transferred to San Francisco. Joan and Lynn had moved to San Mateo and reserved a room for me. On one Pacific flight we received a bomb threat but landed safely. My American adventure had truly begun.</p>`,
      de: `<p>Ende 1965 wurde ich nach San Francisco versetzt. Joan und Lynn waren nach San Mateo gezogen und hatten ein Zimmer für mich reserviert. Auf einem Pazifikflug erhielten wir eine Bombendrohung, landeten aber sicher. Mein amerikanisches Abenteuer hatte wirklich begonnen.</p>`
    }
  }
];

// Journey path now includes Costa Brava (id 11) and Rio de Janeiro (id 17)
const JOURNEY_PATH = [
  [53.30, 16.50],   // Rosenfelde (family)
  [53.151, 16.738], // Birth - Schneidemühl
  [53.22, 16.60],   // Breitenstein
  [53.80, 13.10],   // Evacuation arrival
  [53.88, 13.07],   // Moltzahn
  [53.87, 13.12],   // Buschmühl
  [52.52, 13.405],  // Berlin
  [49.08, 7.63],    // Schweix
  [48.137, 11.576], // Munich
  [41.614, 2.654],  // Costa Brava
  [48.137, 11.576], // Return to Munich
  [53.54, 8.577],   // Bremerhaven
  [40.689, -74.045],// New York Harbor
  [40.779, -73.984],// Manhattan
  [40.641, -73.778],// JFK
  [18.466, -66.106],// San Juan
  [-22.951, -43.173],// Rio de Janeiro
  [37.622, -122.375] // San Francisco
];

const UI_STRINGS = {
  en: {
    siteTitle: "From Prussia with Love to America my Home",
    siteSubtitle: "The Journey of Beate Zülsdorf, now Beate Owens",
    timeline: "Timeline",
    timelineFamilySection: "Family Background",
    timelineJourneySection: "Beate's Journey",
    aboutTitle: "About This Project",
    aboutText: "This interactive map traces the remarkable life journey of Beate Zülsdorf (later Beate Owens), from her birth in West Prussia in 1941 through WWII evacuation, life in Soviet-occupied East Germany, escape to West Germany, and immigration to America in 1963 as a Pan American World Airways stewardess. Click any marker or timeline entry to read that chapter. Hover over highlighted place names for historical → modern name mapping.",
    basemapLight: "Light Map",
    basemapSatellite: "Satellite",
    historicalOverlay: "Historical Names (1930s–40s)",
    layers: "Layers"
  },
  de: {
    siteTitle: "Aus Preußen mit Liebe nach Amerika, meine Heimat",
    siteSubtitle: "Die Reise der Beate Zülsdorf, jetzt Beate Owens",
    timeline: "Zeitstrahl",
    timelineFamilySection: "Familienhintergrund",
    timelineJourneySection: "Beates Reise",
    aboutTitle: "Über dieses Projekt",
    aboutText: "Diese interaktive Karte zeichnet die bemerkenswerte Lebensreise von Beate Zülsdorf (später Beate Owens) nach — von ihrer Geburt in Westpreußen 1941 über die Evakuierung im Zweiten Weltkrieg, ihre Kindheit im sowjetisch besetzten Ostdeutschland, die Flucht nach Westdeutschland und die Einwanderung nach Amerika 1963, wo sie Stewardess bei Pan American World Airways wurde.",
    basemapLight: "Helle Karte",
    basemapSatellite: "Satellit",
    historicalOverlay: "Historische Namen (1930er–40er)",
    layers: "Ebenen"
  }
};
