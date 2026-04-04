// =============================================
// Story Data — From Prussia with Love
// All locations use modern coordinates.
// Historical place names mapped to current names.
// =============================================

const STORY_DATA = [
  {
    id: 1,
    date: { en: "April 17, 1941", de: "17. April 1941" },
    title: {
      en: "Birth in Schneidemühl, West Prussia",
      de: "Geburt in Schneidemühl, Westpreußen"
    },
    location: {
      en: "Piła, Poland (formerly Schneidemühl, West Prussia)",
      de: "Piła, Polen (ehem. Schneidemühl, Westpreußen)"
    },
    lat: 53.151,
    lng: 16.738,
    body: {
      en: `<p>On April 17, 1941, shortly after midnight, a rosy-cheeked healthy baby girl with pitch-black hair was born to a blond-haired couple overjoyed with happiness. They named their bundle of joy 'Beate', which means 'blessed' in Latin. They truly felt blessed.</p>
<p>Beate Zülsdorf entered this world prematurely, born one month too early at the hospital in Schneidemühl. Her father teased her mother good-naturedly about Beate's black hair. After a few months, her golden curls were praised throughout her childhood. She flourished into a healthy and happy little girl, the image of her father.</p>`,
      de: `<p>Am 17. April 1941, kurz nach Mitternacht, wurde einem überglücklichen blonden Ehepaar ein rosiges, gesundes Mädchen mit pechschwarzem Haar geboren. Sie nannten ihr Bündel Freude 'Beate', was auf Lateinisch 'die Gesegnete' bedeutet. Sie fühlten sich wahrhaft gesegnet.</p>
<p>Beate Zülsdorf kam einen Monat zu früh im Krankenhaus in Schneidemühl zur Welt. Ihr Vater neckte ihre Mutter gutmütig wegen Beates schwarzem Haar. Nach einigen Monaten wurden ihre goldenen Locken in der ganzen Kindheit bewundert. Sie entwickelte sich zu einem gesunden und fröhlichen kleinen Mädchen, das Ebenbild ihres Vaters.</p>`
    }
  },
  {
    id: 2,
    date: { en: "1941–1944", de: "1941–1944" },
    title: {
      en: "Childhood on the Farm in Breitenstein",
      de: "Kindheit auf dem Bauernhof in Breitenstein"
    },
    location: {
      en: "Breitenstein, West Prussia (near Piła, Poland)",
      de: "Breitenstein, Westpreußen (bei Piła, Polen)"
    },
    lat: 53.22,
    lng: 16.60,
    body: {
      en: `<p>Beate's father, Maximilian Augustin Zülsdorf, managed an 80-hectare (200-acre) farming estate in Breitenstein, West Prussia. The farmyard was encircled by the farmhouse, horse and cow stables, barns for hay, straw, and grain, and barns for small animals. Beate played happily with all the baby animals: kids, lambs, piglets, calves, colts, and all her feathered friends.</p>
<p>She loved horseback riding above all — they had three beautiful purebred mares: Borina, Olga, and Lotte; a big black stallion, Harras, and a young stallion, Junker. Borina, a chestnut brown mare with a diamond on her forehead, was her favorite. Mollie, a black and white Border Collie, was her steady companion.</p>
<p>The Polish family Purmann — Mr. and Mrs. Purmann and their four children — were assigned to the farm as laborers. They were decent, hard-working people who became helping hands as well as friends, and would save the Zülsdorf family's lives more than once during the coming evacuation.</p>`,
      de: `<p>Beates Vater, Maximilian Augustin Zülsdorf, bewirtschaftete ein 80 Hektar großes Gut in Breitenstein, Westpreußen. Der Hof war umgeben vom Bauernhaus, Pferde- und Kuhställen, Scheunen für Heu, Stroh und Getreide, und Ställen für Kleintiere. Beate spielte fröhlich mit allen Tierbabys: Zicklein, Lämmern, Ferkeln, Kälbern, Fohlen und all ihren gefiederten Freunden.</p>
<p>Am meisten liebte sie das Reiten — sie hatten drei wunderschöne reinrassige Stuten: Borina, Olga und Lotte; einen großen schwarzen Hengst, Harras, und einen jungen Hengst, Junker. Borina, eine kastanienbraune Stute mit einem Diamanten auf der Stirn, war ihr Liebling. Mollie, ein schwarz-weißer Border Collie, war ihr ständiger Begleiter.</p>
<p>Die polnische Familie Purmann — Herr und Frau Purmann mit ihren vier Kindern — wurden dem Hof als Arbeitskräfte zugeteilt. Sie waren anständige, fleißige Menschen, die zu helfenden Händen und Freunden wurden und der Familie Zülsdorf während der kommenden Evakuierung mehr als einmal das Leben retten sollten.</p>`
    }
  },
  {
    id: 3,
    date: { en: "Autumn 1944", de: "Herbst 1944" },
    title: {
      en: "Father Drafted — Last Goodbye",
      de: "Vater eingezogen — Letzter Abschied"
    },
    location: {
      en: "Breitenstein, West Prussia",
      de: "Breitenstein, Westpreußen"
    },
    lat: 53.22,
    lng: 16.60,
    body: {
      en: `<p>In November 1944, Beate's father, then 42 years old, was drafted along with all able men from 16 to 65 years of age. He was forced to join the Volkssturm (People's Storm), Hitler's last attempt to block the Russian advance. He came home to visit a couple of times during training before being sent to the Russian front. They were ill-equipped with clothing and weapons.</p>
<p>"I still recall our last goodbye. He was holding me on one arm and with the other embraced Mutti, huddling together tightly. They were crying, knowing that they might never see each other again. It frightened and upset me, not being able to understand what was going on."</p>
<p>It was the last time they saw him. Maximilian Zülsdorf was declared Missing in Action and was never found, despite years of searching through the Red Cross.</p>`,
      de: `<p>Im November 1944 wurde Beates Vater mit 42 Jahren zusammen mit allen wehrfähigen Männern zwischen 16 und 65 eingezogen. Er musste sich dem Volkssturm anschließen, Hitlers letztem Versuch, den russischen Vormarsch zu stoppen. Er kam während der Ausbildung ein paar Mal nach Hause, bevor er an die Ostfront geschickt wurde. Sie waren schlecht ausgerüstet mit Kleidung und Waffen.</p>
<p>„Ich erinnere mich noch an unseren letzten Abschied. Er hielt mich auf einem Arm und umarmte mit dem anderen Mutti, eng aneinander gekuschelt. Sie weinten, wissend, dass sie sich vielleicht nie wiedersehen würden. Es erschreckte und beunruhigte mich, da ich nicht verstehen konnte, was vor sich ging."</p>
<p>Es war das letzte Mal, dass sie ihn sahen. Maximilian Zülsdorf wurde als vermisst gemeldet und trotz jahrelanger Suche über das Rote Kreuz nie gefunden.</p>`
    }
  },
  {
    id: 4,
    date: { en: "February 1945", de: "Februar 1945" },
    title: {
      en: "Evacuation — The Trek West",
      de: "Evakuierung — Der Treck nach Westen"
    },
    location: {
      en: "From Breitenstein to Moltzahn (approx. 200 miles west)",
      de: "Von Breitenstein nach Moltzahn (ca. 320 km westlich)"
    },
    lat: 53.80,
    lng: 13.10,
    body: {
      en: `<p>In February 1945, with the Russians advancing throughout Prussia, the family was evacuated by horse-drawn covered wagon train from West Prussia to Mecklenburg. It was an approximately 200-mile westward journey under treacherous conditions through ice and snow in the depth of winter.</p>
<p>Their wagons were like large pioneer wagons, covered with heavy canvas and lined inside with deep piles of straw and hay for insulation. Beate, her mother Anna, her grandfather Opa Paul, and Sophie Purmann huddled wrapped in down comforters in one wagon with Florian at the reins. The other carried the Purmann family guided by Leo.</p>
<p>They lost one mare, Lotte, due to a broken leg on the ice. Along the way, they found Beate's brother Georg convalescing in a military hospital in Märkisch Friedland with a severe leg injury. He escaped the hospital and was hidden in the rear of their wagon, as German military patrols searched for deserters.</p>
<p>They reached Moltzahn, in the district of Demmin, Mecklenburg, in March 1945.</p>`,
      de: `<p>Im Februar 1945, als die Russen durch ganz Preußen vorrückten, wurde die Familie mit Pferdewagen aus Westpreußen nach Mecklenburg evakuiert. Es war eine etwa 320 Kilometer lange Reise nach Westen unter gefährlichen Bedingungen durch Eis und Schnee im tiefsten Winter.</p>
<p>Ihre Wagen waren wie große Planwagen, bedeckt mit schwerer Leinwand und innen mit tiefen Schichten Stroh und Heu zur Isolierung ausgekleidet. Beate, ihre Mutter Anna, ihr Großvater Opa Paul und Sophie Purmann kauerten in Daunendecken gehüllt in einem Wagen mit Florian am Steuer. Der andere trug die Familie Purmann, geführt von Leo.</p>
<p>Sie verloren eine Stute, Lotte, wegen eines Beinbruchs auf dem Eis. Unterwegs fanden sie Beates Bruder Georg, der in einem Militärkrankenhaus in Märkisch Friedland mit einer schweren Beinverletzung lag. Er floh aus dem Krankenhaus und wurde hinten im Wagen versteckt, da deutsche Militärpatrouillen nach Deserteuren suchten.</p>
<p>Im März 1945 erreichten sie Moltzahn im Kreis Demmin, Mecklenburg.</p>`
    }
  },
  {
    id: 5,
    date: { en: "March–May 1945", de: "März–Mai 1945" },
    title: {
      en: "Russian Occupation — Terror in Moltzahn",
      de: "Russische Besatzung — Terror in Moltzahn"
    },
    location: {
      en: "Moltzahn, Mecklenburg, Germany",
      de: "Moltzahn, Mecklenburg, Deutschland"
    },
    lat: 53.88,
    lng: 13.07,
    body: {
      en: `<p>By the end of March, the Russians advanced deep into their Baltic region in Mecklenburg. From then on, Florian and Leo had the dangerous task of hiding Georg every night in a different place — attics, cellars, haylofts, feeding troughs, and haystacks in the open fields.</p>
<p>Russian troops invaded the towns and countryside, and rumors of their torture, rape, and slaughter spread like wildfire. The women and children were hidden nightly in dugouts of hay and straw stacks in the open fields. One evening, Beate's mother spotted a Russian on horseback at their window. She grabbed Beate from a sound sleep and leaped out of the window, spraining her ankle severely, and ran to their hiding place in a haystack in the field.</p>
<p>One day, Russian soldiers forced all women and children at gunpoint into the cow stable and up against the wall, and Opa and another old gentleman into the grain barn. After Beate's mother pleaded hysterically, they were flung out of the barn. Opa, 81 years old, was thrown out the barn door and landed on his back, lying there lifeless — but survived.</p>
<p>May 8, 1945 brought the end of WWII and the biggest joy was seeing Georg again safely.</p>`,
      de: `<p>Ende März rückten die Russen tief in ihre baltische Region in Mecklenburg vor. Von da an hatten Florian und Leo die gefährliche Aufgabe, Georg jede Nacht an einem anderen Ort zu verstecken — in Dachböden, Kellern, Heuböden, Futtertrögen und Heuhaufen auf offenen Feldern.</p>
<p>Russische Truppen fielen in die Städte und das Land ein, und Gerüchte über Folter, Vergewaltigung und Mord verbreiteten sich wie ein Lauffeuer. Die Frauen und Kinder wurden nachts in Aushöhlungen von Heu- und Strohstapeln auf den Feldern versteckt. Eines Abends entdeckte Beates Mutter einen Russen zu Pferd am Fenster. Sie schnappte Beate aus dem Schlaf und sprang aus dem Fenster, wobei sie sich schwer den Knöchel verstauchte, und rannte zu ihrem Versteck im Heuhaufen.</p>
<p>Eines Tages zwangen russische Soldaten alle Frauen und Kinder mit vorgehaltener Waffe in den Kuhstall und gegen die Wand, und Opa und einen anderen alten Herrn in die Kornscheune. Nachdem Beates Mutter hysterisch gefleht hatte, wurden sie aus der Scheune geworfen. Opa, 81 Jahre alt, wurde aus der Scheunentür geworfen und landete auf dem Rücken — überlebte aber.</p>
<p>Der 8. Mai 1945 brachte das Ende des Zweiten Weltkriegs und die größte Freude war es, Georg wieder sicher zu sehen.</p>`
    }
  },
  {
    id: 6,
    date: { en: "1945–1948", de: "1945–1948" },
    title: {
      en: "Life in the Schoolhouse — Moltzahn",
      de: "Leben im Schulhaus — Moltzahn"
    },
    location: {
      en: "Moltzahn, Mecklenburg, East Germany",
      de: "Moltzahn, Mecklenburg, Ostdeutschland"
    },
    lat: 53.88,
    lng: 13.07,
    body: {
      en: `<p>In autumn 1945, the family was moved into the schoolhouse of Moltzahn. Beate's mother, grandfather Opa Paul, brother Georg, and Beate shared one room downstairs. The kitchen and toilets were shared among three families and a schoolteacher.</p>
<p>Beate befriended Karin (age five) and Burkhardt (age three), children of another family. They shared many happy — and mischievous — childhood memories. The happiest were Christmas celebrations. Pine branches were wrought into an Advent wreath decorated with red ribbons and four candles, hung from the chandelier. On Christmas Eve, the Weihnachtsmann (Father Christmas) and his helper Knecht Ruprecht visited the children.</p>
<p>One Christmas Eve, Beate and Karin disobeyed their mothers and went skating on a half-frozen pond. The ice broke and swallowed them. Neither could swim. A friend fetched her father, who pulled them to safety with a tree branch. They arrived home as shivering, teeth-chattering little ice nymphs with frozen garments and icicle hair.</p>
<p>In August 1948, Beate's beloved Opa Paul passed away at age 84. She was inconsolable.</p>`,
      de: `<p>Im Herbst 1945 wurde die Familie in das Schulhaus von Moltzahn umgesiedelt. Beates Mutter, Großvater Opa Paul, Bruder Georg und Beate teilten sich ein Zimmer im Erdgeschoss. Die Küche und Toiletten wurden von drei Familien und einer Lehrerin geteilt.</p>
<p>Beate freundete sich mit Karin (fünf Jahre) und Burkhardt (drei Jahre) an, Kindern einer anderen Familie. Sie teilten viele glückliche — und schelmische — Kindheitserinnerungen. Die glücklichsten waren die Weihnachtsfeiern. Tannenzweige wurden zu einem Adventskranz mit roten Schleifen und vier Kerzen gewunden. Am Heiligabend besuchten der Weihnachtsmann und sein Helfer Knecht Ruprecht die Kinder.</p>
<p>An einem Heiligabend missachteten Beate und Karin ihre Mütter und gingen auf einem halbgefrorenen Teich Schlittschuh laufen. Das Eis brach und verschluckte sie. Keine von beiden konnte schwimmen. Eine Freundin holte ihren Vater, der sie mit einem Ast in Sicherheit zog. Sie kamen als zitternde, klappernde kleine Eisnymphen mit gefrorener Kleidung und Eiszapfenhaaren nach Hause.</p>
<p>Im August 1948 verstarb Beates geliebter Opa Paul im Alter von 84 Jahren. Sie war untröstlich.</p>`
    }
  },
  {
    id: 7,
    date: { en: "1948–1952", de: "1948–1952" },
    title: {
      en: "Farm Life in Buschmühl",
      de: "Bauernhofleben in Buschmühl"
    },
    location: {
      en: "Buschmühl, near Demmin, East Germany",
      de: "Buschmühl, bei Demmin, Ostdeutschland"
    },
    lat: 53.87,
    lng: 13.12,
    body: {
      en: `<p>Georg married Grete, and they leased a farm in Buschmühl, 7 km from Demmin. Beate and her mother moved with them. Life was filled with hard work: feeding animals, milking cows and the goat, cleaning stalls, plowing with Borina, sowing grain, and harvesting. By age ten, Beate could identify all the different grain sprouts.</p>
<p>She continued her love of horseback riding with Borina, went berry and mushroom picking, and preserved fruits, vegetables, and meats for winter. She learned the harsh realities of farm life — slaughtering pigs, catching blood for sausage, plucking feathers from poultry.</p>
<p>Between 1948 and 1952, all farmland was confiscated by the Communist government and only leased to farmers. Each farmer had an impossible quota of produce to meet. Georg held on as long as he could, but after four years, could no longer meet the required quota. The farm was auctioned off. They sold Borina — their last treasure from their homeland. "The memory of that evening still brings tears to my eyes."</p>`,
      de: `<p>Georg heiratete Grete, und sie pachteten einen Bauernhof in Buschmühl, 7 km von Demmin. Beate und ihre Mutter zogen mit. Das Leben war voller harter Arbeit: Tiere füttern, Kühe und die Ziege melken, Ställe ausmisten, mit Borina pflügen, Getreide säen und ernten. Mit zehn Jahren konnte Beate alle verschiedenen Getreidekeimlinge unterscheiden.</p>
<p>Sie setzte ihre Liebe zum Reiten mit Borina fort, ging Beeren und Pilze sammeln und konservierte Obst, Gemüse und Fleisch für den Winter. Sie lernte die harten Realitäten des Bauernlebens — Schweine schlachten, Blut für Wurst auffangen, Geflügel rupfen.</p>
<p>Zwischen 1948 und 1952 wurde alles Ackerland von der kommunistischen Regierung konfisziert und nur noch an Bauern verpachtet. Jeder Bauer hatte eine unmögliche Abgabenquote zu erfüllen. Georg hielt so lange durch wie er konnte, aber nach vier Jahren konnte er die Quote nicht mehr erfüllen. Der Hof wurde versteigert. Sie verkauften Borina — ihren letzten Schatz aus der Heimat. „Die Erinnerung an diesen Abend bringt mir immer noch Tränen in die Augen."</p>`
    }
  },
  {
    id: 8,
    date: { en: "Summer 1953", de: "Sommer 1953" },
    title: {
      en: "First Escape Attempt to West Germany",
      de: "Erster Fluchtversuch nach Westdeutschland"
    },
    location: {
      en: "Berlin → Pirmasens → Schweix, Germany",
      de: "Berlin → Pirmasens → Schweix, Deutschland"
    },
    lat: 52.52,
    lng: 13.405,
    body: {
      en: `<p>Beate's mother decided to give her daughter a better future and escape their situation. They traveled to East Berlin to stay with friends Thekla Mayer and Rosie Stiegele. From there, they crossed into West Berlin by train and were brought to an Immigration Refugee Camp — an enormous hall with triple-decker bunk beds.</p>
<p>After three days they received passports and traveled to Pirmasens in the Pfalz, where the mayor, Mr. Ried — a former military officer who had been stationed on their farm — was their sponsor. But he was on vacation. They were housed in a sweltering attic room and served meals in the servants' area.</p>
<p>Driven to the village of Schweix near the French border, they found their apartment was not yet ready. Unable to afford to wait, they made the difficult decision to return to East Germany. At the border, 12-year-old Beate had East German money sewn under her Young Pioneer uniform emblem. When the patrol asked if she was a Young Pioneer leader, her quivering "Yes" got them through.</p>`,
      de: `<p>Beates Mutter beschloss, ihrer Tochter eine bessere Zukunft zu ermöglichen. Sie reisten nach Ost-Berlin zu Freundinnen Thekla Mayer und Rosie Stiegele. Von dort überquerten sie mit dem Zug nach West-Berlin und wurden in ein Flüchtlingslager gebracht — eine riesige Halle mit dreistöckigen Etagenbetten.</p>
<p>Nach drei Tagen erhielten sie Pässe und reisten nach Pirmasens in der Pfalz, wo der Bürgermeister, Herr Ried — ein ehemaliger Offizier, der auf ihrem Hof stationiert gewesen war — ihr Sponsor war. Aber er war im Urlaub. Sie wurden in einem stickig heißen Dachzimmer untergebracht und im Dienstbotenbereich verpflegt.</p>
<p>In das Dorf Schweix an der französischen Grenze gefahren, fanden sie ihre Wohnung noch nicht fertig. Da sie es sich nicht leisten konnten zu warten, trafen sie die schwere Entscheidung, nach Ostdeutschland zurückzukehren. An der Grenze hatte die 12-jährige Beate ostdeutsches Geld unter dem Abzeichen ihrer Jungen-Pionier-Uniform eingenäht. Als die Patrouille fragte, ob sie eine Junge-Pionier-Führerin sei, brachte ihr zitterndes „Ja" sie durch.</p>`
    }
  },
  {
    id: 9,
    date: { en: "December 10, 1953", de: "10. Dezember 1953" },
    title: {
      en: "Final Escape to West Germany",
      de: "Endgültige Flucht nach Westdeutschland"
    },
    location: {
      en: "Schweix, Rhineland-Palatinate, West Germany",
      de: "Schweix, Rheinland-Pfalz, Westdeutschland"
    },
    lat: 49.08,
    lng: 7.63,
    body: {
      en: `<p>A new Communist law permitted widows and orphans to leave East Germany legally. Beate's mother obtained proper documents. On December 10, 1953, they said tearful final goodbyes to Georg and little Konni, traveled through Berlin, and crossed the border for the last time.</p>
<p>This time Mr. Ried greeted them personally. They dined in the lavish dining room and were given the proper guest room. Their apartment in Schweix — two rooms, kitchen, and foyer — was ready. They moved in on December 18 with just two suitcases and a trunk.</p>
<p>The mayor had furnished their place with a small table and two chairs. Neighbors brought a bed, stove, and essentials. A neighbor gave them a tiny Christmas tree which they decorated with cotton balls. It was the saddest Christmas they ever spent — standing with plates on the stove and windowsill, with no table (the mayor had borrowed it back for his party), crying and unable to eat.</p>
<p>But slowly, Beate adjusted. She entered school, made friends, and eventually found joy in the village festivals, dances, and the beautiful mountainous landscape near the French border.</p>`,
      de: `<p>Ein neues kommunistisches Gesetz erlaubte Witwen und Waisen, Ostdeutschland legal zu verlassen. Beates Mutter besorgte die nötigen Dokumente. Am 10. Dezember 1953 nahmen sie tränenreich Abschied von Georg und dem kleinen Konni, reisten durch Berlin und überquerten zum letzten Mal die Grenze.</p>
<p>Diesmal begrüßte Herr Ried sie persönlich. Sie speisten im prachtvollen Esszimmer und bekamen das richtige Gästezimmer. Ihre Wohnung in Schweix — zwei Zimmer, Küche und Flur — war fertig. Am 18. Dezember zogen sie mit nur zwei Koffern und einem Überseekoffer ein.</p>
<p>Der Bürgermeister hatte ihre Wohnung mit einem kleinen Tisch und zwei Stühlen eingerichtet. Nachbarn brachten ein Bett, einen Ofen und das Nötigste. Ein Nachbar schenkte ihnen einen winzigen Weihnachtsbaum, den sie mit Wattebällchen schmückten. Es war das traurigste Weihnachten, das sie je erlebten — stehend mit Tellern auf dem Ofen und der Fensterbank, ohne Tisch, weinend und unfähig zu essen.</p>
<p>Aber langsam gewöhnte sich Beate ein. Sie ging in die Schule, fand Freunde und schließlich Freude an den Dorffesten, Tänzen und der schönen Berglandschaft nahe der französischen Grenze.</p>`
    }
  },
  {
    id: 10,
    date: { en: "August 1957", de: "August 1957" },
    title: {
      en: "Move to Munich — Nursing Career",
      de: "Umzug nach München — Krankenpflege"
    },
    location: {
      en: "Munich, Bavaria, West Germany",
      de: "München, Bayern, Westdeutschland"
    },
    lat: 48.137,
    lng: 11.576,
    body: {
      en: `<p>At age 16, Beate packed her bags and took a train to Munich, Bavaria, to pursue her dream of becoming a pediatric nurse. She stayed with her Aunt Thekla in a sweltering attic before finding a position with the Caritas Sisters on September 1, 1957.</p>
<p>She worked in the hospital nursery caring for seven tiny infants, loved the work, and attended high school simultaneously. In the operating room, however, she fainted twice — once during a tonsillectomy and once during an abdominal puncture. Surgery was definitively not her forte.</p>
<p>She had a memorable friendship with Dr. Garmisch, a handsome young intern who pursued her relentlessly with charming mischief. She graduated from high school and finished pre-nursing school.</p>
<p>Tragically, in August 1959, her mother was diagnosed with incurable breast cancer. Beate quit the Caritas to be with her. Anna Rosa Zülsdorf passed away on August 11, 1960, at age 63. Beate was just 19 and completely alone in West Germany without any relatives.</p>`,
      de: `<p>Mit 16 Jahren packte Beate ihre Koffer und fuhr mit dem Zug nach München, um ihren Traum zu verwirklichen, Kinderkrankenschwester zu werden. Sie wohnte bei ihrer Tante Thekla in einem stickigen Dachboden, bevor sie am 1. September 1957 eine Stelle bei den Caritas-Schwestern fand.</p>
<p>Sie arbeitete in der Krankenhaussäuglingsstation, betreute sieben winzige Säuglinge, liebte die Arbeit und besuchte gleichzeitig die Oberschule. Im Operationssaal wurde sie allerdings zweimal ohnmächtig — einmal bei einer Mandeloperation und einmal bei einer Bauchpunktion. Die Chirurgie war definitiv nicht ihre Stärke.</p>
<p>Sie hatte eine denkwürdige Freundschaft mit Dr. Garmisch, einem gutaussehenden jungen Assistenzarzt, der sie unermüdlich mit charmanten Scherzen umwarb. Sie machte ihren Schulabschluss und beendete die Krankenpflegevorschule.</p>
<p>Tragischerweise wurde im August 1959 bei ihrer Mutter unheilbarer Brustkrebs diagnostiziert. Beate verließ die Caritas, um bei ihr zu sein. Anna Rosa Zülsdorf verstarb am 11. August 1960 im Alter von 63 Jahren. Beate war erst 19 und völlig allein in Westdeutschland ohne Verwandte.</p>`
    }
  },
  {
    id: 11,
    date: { en: "Summer 1962", de: "Sommer 1962" },
    title: {
      en: "Vacation on the Costa Brava, Spain",
      de: "Urlaub an der Costa Brava, Spanien"
    },
    location: {
      en: "Calella de la Costa, Spain",
      de: "Calella de la Costa, Spanien"
    },
    lat: 41.614,
    lng: 2.654,
    body: {
      en: `<p>With her fiancé Walter, a German medical student, Beate took a two-week vacation on the Costa Brava in Spain. They traveled by bus from Munich through Strasbourg, Besançon, Lyon, Avignon, Nîmes, and Perpignan, crossing the Pyrenees to reach Calella de la Costa.</p>
<p>They explored ancient Roman architecture — the Pont du Gard aqueduct, the bridges of Lyon, the ancient citadel at Tossa de Mar. In Calella, they enjoyed cobblestone streets alongside whitewashed homes, glorious sunshine on the beaches, and private coves.</p>
<p>Toward the end of that year, however, they drifted apart. Walter didn't believe Beate would actually emigrate to America — until she started packing.</p>`,
      de: `<p>Mit ihrem Verlobten Walter, einem deutschen Medizinstudenten, machte Beate einen zweiwöchigen Urlaub an der Costa Brava in Spanien. Sie reisten per Bus von München über Straßburg, Besançon, Lyon, Avignon, Nîmes und Perpignan, überquerten die Pyrenäen nach Calella de la Costa.</p>
<p>Sie erkundeten antike römische Architektur — den Pont du Gard, die Brücken von Lyon, die alte Zitadelle in Tossa de Mar. In Calella genossen sie Kopfsteinpflasterstraßen entlang weißgetünchter Häuser, herrlichen Sonnenschein an den Stränden und einsame Buchten.</p>
<p>Gegen Ende des Jahres drifteten sie jedoch auseinander. Walter glaubte nicht, dass Beate wirklich nach Amerika auswandern würde — bis sie anfing zu packen.</p>`
    }
  },
  {
    id: 12,
    date: { en: "May 1, 1963", de: "1. Mai 1963" },
    title: {
      en: "Departure — SS United States from Bremerhaven",
      de: "Abfahrt — SS United States ab Bremerhaven"
    },
    location: {
      en: "Bremerhaven, Germany",
      de: "Bremerhaven, Deutschland"
    },
    lat: 53.54,
    lng: 8.577,
    body: {
      en: `<p>On May 1, 1963, Beate boarded the SS United States at Bremerhaven. She stood at the railing and waved her last goodbye to her Fatherland, fighting back tears — with no one to wave to or who waved back.</p>
<p>A photographer from Stars and Stripes magazine, nicknamed "Red," noticed her and documented her immigration experience throughout the voyage. She was assigned a shared cabin with two elderly women — one who snored like she was "sawing down the Sequoias" and one who talked incessantly. The purser reassigned her to a private outside cabin.</p>
<p>The crossing through the Gulf Stream brought violent seasickness. But after that ordeal, brilliant sunshine and calm blue seas rewarded them for the rest of the passage. Beate enjoyed strolls on deck, lounging in the sun, and a formal Gala Dinner on the last evening.</p>`,
      de: `<p>Am 1. Mai 1963 ging Beate in Bremerhaven an Bord der SS United States. Sie stand an der Reling und winkte ihrem Vaterland zum letzten Mal, die Tränen unterdrückend — niemand war da, dem sie zuwinken konnte oder der zurückwinkte.</p>
<p>Ein Fotograf vom Stars and Stripes Magazin, Spitzname „Red", bemerkte sie und dokumentierte ihre Einwanderungsgeschichte während der gesamten Überfahrt. Sie wurde in eine Gemeinschaftskabine mit zwei älteren Damen eingeteilt — eine, die schnarchte, als würde sie „die Mammutbäume absägen", und eine, die ununterbrochen redete. Der Zahlmeister gab ihr eine private Außenkabine.</p>
<p>Die Überquerung des Golfstroms brachte heftige Seekrankheit. Aber nach dieser Tortur belohnten sie strahlender Sonnenschein und ruhige blaue See für den Rest der Überfahrt. Beate genoss Spaziergänge an Deck, Sonnenbaden und ein formelles Galadinner am letzten Abend.</p>`
    }
  },
  {
    id: 13,
    date: { en: "May 7, 1963", de: "7. Mai 1963" },
    title: {
      en: "Arrival in America — New York Harbor",
      de: "Ankunft in Amerika — New Yorker Hafen"
    },
    location: {
      en: "New York Harbor, New York, USA",
      de: "New Yorker Hafen, New York, USA"
    },
    lat: 40.689,
    lng: -74.045,
    body: {
      en: `<p>"Before sunrise, I took a shower, got dressed and went on deck to see the sun rise casting its rays over my destination, America. Slowly out of the shadows along the horizon emerged a stately figure holding a torch in her hand, the Statue of Liberty, welcoming me to America."</p>
<p>Joan and Lynn Hall, her sponsors, were awaiting her arrival. She was hired as a nursemaid for their seven-month-old son Greg. She was never treated as hired help — she felt totally embraced in their family. Since Greg was "the best baby ever," she offered to take care of the household as well, impressing them with German cuisine.</p>
<p>They moved to a big apartment on Manhattan's West Side, 72nd and Riverside Park, 11th floor, with views of the Hudson River, the George Washington Bridge, and New York Harbor.</p>`,
      de: `<p>„Vor Sonnenaufgang duschte ich, zog mich an und ging an Deck, um den Sonnenaufgang über meinem Ziel, Amerika, zu sehen. Langsam aus den Schatten am Horizont tauchte eine stattliche Figur auf, die eine Fackel in der Hand hielt — die Freiheitsstatue, die mich in Amerika willkommen hieß."</p>
<p>Joan und Lynn Hall, ihre Sponsoren, erwarteten ihre Ankunft. Sie wurde als Kinderfrau für ihren sieben Monate alten Sohn Greg eingestellt. Sie wurde nie als Angestellte behandelt — sie fühlte sich völlig in die Familie aufgenommen. Da Greg „das beste Baby aller Zeiten" war, bot sie an, auch den Haushalt zu führen, und beeindruckte sie mit deutscher Küche.</p>
<p>Sie zogen in eine große Wohnung auf Manhattans Westseite, 72. Straße und Riverside Park, 11. Stock, mit Blick auf den Hudson River, die George Washington Bridge und den New Yorker Hafen.</p>`
    }
  },
  {
    id: 14,
    date: { en: "December 1964", de: "Dezember 1964" },
    title: {
      en: "Pan American Airways — Stewardess Training",
      de: "Pan American Airways — Stewardess-Ausbildung"
    },
    location: {
      en: "New York (Idlewild/JFK Airport), USA",
      de: "New York (Idlewild/JFK Flughafen), USA"
    },
    lat: 40.641,
    lng: -73.778,
    body: {
      en: `<p>Beate was accepted by both Pan Am and Eastern Airlines, but chose Pan Am — the Number One Carrier in the world. To be a Pan Am Stewardess carried a lot of prestige, but the rules were strict: she had to lose 6 pounds to meet her maximum allowed weight of 120 lbs for her 5'5" height.</p>
<p>She went on the infamous "Air Force egg diet" — 6 hard-boiled eggs per day. When she stepped on the scale: exactly 120 lbs, not an ounce over or under. She got the job and "floated on Cloud 9 out of that office!"</p>
<p>Training was six weeks of intensive instruction on grooming, service, emergency procedures, Boeing 707 and Douglas DC-8 jets. Her first indoctrination flight to Frankfurt was eventful — she dumped an entire tray of cocktails into a young man's lap during turbulence. But she passed, and graduated proudly at Idlewild (now JFK) Airport.</p>`,
      de: `<p>Beate wurde sowohl von Pan Am als auch von Eastern Airlines angenommen, wählte aber Pan Am — die Nummer Eins der Welt. Eine Pan-Am-Stewardess zu sein, brachte viel Prestige, aber die Regeln waren streng: Sie musste 3 Kilo abnehmen, um ihr maximal erlaubtes Gewicht von 54 kg bei 1,65 m Größe zu erreichen.</p>
<p>Sie machte die berüchtigte „Luftwaffen-Eier-Diät" — 6 hartgekochte Eier pro Tag. Als sie auf die Waage stieg: exakt 54 kg, kein Gramm mehr oder weniger. Sie bekam den Job und „schwebte auf Wolke 7 aus dem Büro!"</p>
<p>Die Ausbildung dauerte sechs intensive Wochen: Körperpflege, Service, Notfallverfahren, Boeing 707 und Douglas DC-8 Jets. Ihr erster Einweisungsflug nach Frankfurt war ereignisreich — sie kippte während Turbulenzen ein ganzes Tablett Cocktails in den Schoß eines jungen Mannes. Aber sie bestand und absolvierte stolz am Idlewild (heute JFK) Flughafen.</p>`
    }
  },
  {
    id: 15,
    date: { en: "1965", de: "1965" },
    title: {
      en: "Flying the Caribbean & South America",
      de: "Flüge in die Karibik & Südamerika"
    },
    location: {
      en: "San Juan, Puerto Rico",
      de: "San Juan, Puerto Rico"
    },
    lat: 18.466,
    lng: -66.106,
    body: {
      en: `<p>Based in New York, Beate flew to the Caribbean Islands, West Indies, and South America — San Juan, Nassau, Jamaica, Haiti, Dominican Republic, Antigua, Guadeloupe, Martinique, Trinidad and Tobago, Caracas, Curaçao, Aruba, and Rio de Janeiro.</p>
<p>San Juan became like a second home. With her friend Renate and German VW workers, they went sailing on the Caribbean, anchored at small atolls, snorkeled in crystal-clear azure waters, and visited the famous Rain Forest. Adventures included encounters with sharks, sudden storms while rafting, and a memorable swing over a mountain gorge in the Rain Forest.</p>
<p>She served elaborate eight-course meals in First Class — hors d'oeuvres, soup, salad, entrées, cheese and fruit, flaming Cherries Jubilee, and after-dinner liqueurs. Pan Am's service was the gold standard of the era.</p>
<p>Tragically, she lost dear colleagues in two separate Pan Am crashes — one in the mountains of Martinique, another shortly after takeoff from San Juan.</p>`,
      de: `<p>Stationiert in New York, flog Beate zu den Karibischen Inseln, Westindien und Südamerika — San Juan, Nassau, Jamaika, Haiti, Dominikanische Republik, Antigua, Guadeloupe, Martinique, Trinidad und Tobago, Caracas, Curaçao, Aruba und Rio de Janeiro.</p>
<p>San Juan wurde wie ein zweites Zuhause. Mit ihrer Freundin Renate und deutschen VW-Arbeitern gingen sie segeln in der Karibik, ankerten an kleinen Atollen, schnorchelten in kristallklarem azurblauem Wasser und besuchten den berühmten Regenwald. Abenteuer umfassten Begegnungen mit Haien, plötzliche Stürme beim Rafting und eine unvergessliche Schaukel über eine Bergschlucht im Regenwald.</p>
<p>Sie servierte aufwendige Acht-Gänge-Menüs in der Ersten Klasse — Hors d'oeuvres, Suppe, Salat, Hauptgerichte, Käse und Obst, flambierten Kirsch-Jubilee und Digestifs. Pan Ams Service war der Goldstandard der Ära.</p>
<p>Tragischerweise verlor sie liebe Kolleginnen bei zwei separaten Pan-Am-Abstürzen — einem in den Bergen von Martinique, einem anderen kurz nach dem Start in San Juan.</p>`
    }
  },
  {
    id: 16,
    date: { en: "1965", de: "1965" },
    title: {
      en: "Rio de Janeiro — Copa Cabana",
      de: "Rio de Janeiro — Copa Cabana"
    },
    location: {
      en: "Rio de Janeiro, Brazil",
      de: "Rio de Janeiro, Brasilien"
    },
    lat: -22.971,
    lng: -43.183,
    body: {
      en: `<p>"Rio de Janeiro, what a magnificent city! The statue of Christ towering on the mountain top overlooking the whole region was truly awe-inspiring!" Beate marveled at the contrast between the modern Copa Cabana Beach with its broad palm-lined avenues and the ramshackle huts of impoverished neighborhoods.</p>
<p>On a grueling 12-hour flight from San Juan, she worked the front galley serving three full eight-course meals to 22 First Class passengers. She also had her yearly check-flight while her friend Renate had her first check-ride as purser. Both passed with praise.</p>
<p>Too exhausted to sleep after landing, they ended up blurry-eyed and shaking in the middle of the night having another nightcap, unable to dose off until an ungodly hour.</p>`,
      de: `<p>„Rio de Janeiro, was für eine großartige Stadt! Die Christusstatue, die auf dem Berggipfel thront und die ganze Region überblickt, war wahrhaft beeindruckend!" Beate staunte über den Kontrast zwischen dem modernen Copa-Cabana-Strand mit seinen breiten palmengesäumten Alleen und den baufälligen Hütten der verarmten Viertel.</p>
<p>Auf einem anstrengenden 12-Stunden-Flug von San Juan arbeitete sie in der vorderen Bordküche und servierte drei vollständige Acht-Gänge-Menüs an 22 Erste-Klasse-Passagiere. Gleichzeitig hatte sie ihren jährlichen Überprüfungsflug, während ihre Freundin Renate ihre erste Prüfung als Purserin hatte. Beide bestanden mit Lob.</p>
<p>Zu erschöpft zum Schlafen nach der Landung, saßen sie schließlich schlaftrunken und zitternd mitten in der Nacht bei einem weiteren Schlummertrunk, unfähig einzuschlafen bis zu einer unchristlichen Stunde.</p>`
    }
  },
  {
    id: 17,
    date: { en: "Late 1965", de: "Ende 1965" },
    title: {
      en: "Transfer to San Francisco",
      de: "Versetzung nach San Francisco"
    },
    location: {
      en: "San Francisco / San Mateo, California, USA",
      de: "San Francisco / San Mateo, Kalifornien, USA"
    },
    lat: 37.622,
    lng: -122.375,
    body: {
      en: `<p>In December 1965, Beate transferred to the San Francisco Pan Am base. She lived again with Joan and Lynn Hall, who had moved to San Mateo on the Peninsula south of San Francisco. From San Francisco, Pan Am flew the entire Pacific region and to Asia.</p>
<p>On one flight to Honolulu, they received a bomb warning mid-ocean — someone had called that it would detonate during landing. The crew searched frantically. They did not inform the passengers for fear of causing panic. Approaching Hawaii, they all prayed for a safe landing. The plane touched down safely.</p>
<p>This marked the beginning of a new chapter — flying the Pacific routes that would eventually take Beate across the ocean she had once crossed by ship, but now as a proud Pan American World Airways stewardess.</p>`,
      de: `<p>Im Dezember 1965 wechselte Beate zur Pan-Am-Basis in San Francisco. Sie wohnte wieder bei Joan und Lynn Hall, die nach San Mateo auf der Halbinsel südlich von San Francisco gezogen waren. Von San Francisco aus flog Pan Am die gesamte Pazifikregion und nach Asien.</p>
<p>Auf einem Flug nach Honolulu erhielten sie mitten über dem Ozean eine Bombendrohung — jemand hatte angerufen, dass sie bei der Landung detonieren würde. Die Besatzung suchte hektisch. Sie informierten die Passagiere nicht aus Angst vor Panik. Beim Anflug auf Hawaii beteten alle für eine sichere Landung. Das Flugzeug setzte sicher auf.</p>
<p>Dies markierte den Beginn eines neuen Kapitels — Pazifikrouten zu fliegen, die Beate schließlich über den Ozean führen würden, den sie einst per Schiff überquert hatte, aber jetzt als stolze Stewardess von Pan American World Airways.</p>`
    }
  }
];

// Journey line coordinates for the path on the map
const JOURNEY_PATH = [
  [53.151, 16.738],   // Piła (Schneidemühl)
  [53.22, 16.60],     // Breitenstein
  [53.80, 13.10],     // Evacuation route
  [53.88, 13.07],     // Moltzahn
  [53.87, 13.12],     // Buschmühl
  [52.52, 13.405],    // Berlin
  [49.08, 7.63],      // Schweix
  [48.137, 11.576],   // Munich
  [53.54, 8.577],     // Bremerhaven
  [40.689, -74.045],  // New York
  [40.641, -73.778],  // JFK
  [18.466, -66.106],  // San Juan
  [-22.971, -43.183], // Rio
  [37.622, -122.375]  // San Francisco
];

// German translations for UI elements
const UI_STRINGS = {
  en: {
    siteTitle: "From Prussia with Love",
    siteSubtitle: "The Journey of Beate Zülsdorf",
    timeline: "Timeline",
    aboutTitle: "About This Project",
    aboutText: "This interactive map traces the remarkable life journey of Beate Zülsdorf (later Beate Owens), from her birth in West Prussia in 1941, through the harrowing evacuation during World War II, her childhood in Soviet-occupied East Germany, escape to West Germany, and eventual immigration to America in 1963 where she became a Pan American World Airways stewardess. Click on any location marker or timeline entry to read that chapter of her story."
  },
  de: {
    siteTitle: "Aus Preußen mit Liebe",
    siteSubtitle: "Die Reise der Beate Zülsdorf",
    timeline: "Zeitstrahl",
    aboutTitle: "Über dieses Projekt",
    aboutText: "Diese interaktive Karte zeichnet die bemerkenswerte Lebensreise von Beate Zülsdorf (später Beate Owens) nach — von ihrer Geburt in Westpreußen 1941 über die erschütternde Evakuierung während des Zweiten Weltkriegs, ihre Kindheit im sowjetisch besetzten Ostdeutschland, die Flucht nach Westdeutschland und schließlich die Einwanderung nach Amerika 1963, wo sie Stewardess bei Pan American World Airways wurde. Klicken Sie auf einen Kartenmarker oder Zeitstrahl-Eintrag, um das jeweilige Kapitel ihrer Geschichte zu lesen."
  }
};
