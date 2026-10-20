/* ============================================================
   VST DATA — edit this file to update itineraries & departures.
   Each change pushed to GitHub `main` goes live automatically.
   ============================================================ */

const VST_ITINERARIES = {
  sardinia: {
    label: "Sardinia · IT",
    name: "Sardinia Route",
    stats: { miles: "~85", crags: 6, climbingDays: 6, anchorages: 7 },
    days: [
      { title: "Arrive at the port", tag: "Arrival", loc: "Marina di Olbia",
        text: "The meeting point is Marina di Olbia, with check-in available from 18:00. We organize accommodation and prepare the boat for the week ahead.",
        evening: "Welcome dinner on board with Sardinian cured meats & Cannonau wine." },
      { title: "Cala Fuili", tag: "sail + climb", loc: "Cala Gonone",
        text: "Morning sail south to Cala Gonone — real sailing miles, fishing lines out. We anchor in front of Cala Fuili and climb in the canyon behind the beach: over 200 bolted sport routes for all levels.",
        evening: "Lunch at anchor facing the untamed coast." },
      { title: "Cala Sisine", tag: "trek + climb", loc: "Cala Sisine",
        text: "Wake up in paradise: the walk to the crag crosses endless valleys, creeks and forests — like living in Jurassic Park. The canyon offers a full day of climbing, switching between sun and shade.",
        evening: "Traditional Sardinian dinner at an old sheepfold in the forest behind the beach." },
      { title: "Pedra Longa", tag: "sail + climb", loc: "Pedra Longa",
        text: "Pitches right above the sea: you climb while your belayer hangs over blue water, cheered on by the crew. Around you, some of the highest cliffs in the whole Mediterranean.",
        evening: "Dinner on board at anchor." },
      { title: "Cala Luna", tag: "climb + swim", loc: "Cala Luna",
        text: "One of Sardinia's most beautiful beaches, with the postcard cave climbs to match. A day split between rock climbing, snorkeling, cave exploring and beach time.",
        evening: "Night at anchor off Cala Gonone village, seafood dinner at a local fish taverna." },
      { title: "Cala Gonone", tag: "climb", loc: "Cala Gonone",
        text: "A day to climb at our fullest potential on the splendid crags above the village — the Millennium Cave is an absolute must. Italian gelato in town between climbs.",
        evening: "Dinner on board in the bay." },
      { title: "Tavolara & Ferrata degli Angeli", tag: "via ferrata", loc: "Tavolara Island",
        text: "Sunrise sail to the untamed Tavolara Island. The renowned Ferrata degli Angeli traverses the island's highest ridge up to Punta Cannone, 560 meters above our boat.",
        evening: "Final swim at Spalmatore di Terra, then back to Marina di Olbia by 18:00." },
      { title: "Olbia", tag: "Departure", loc: "Marina di Olbia",
        text: "Disembark in the morning before 9am — sore forearms, full memory cards.",
        evening: "Farewell breakfast on board. See you on the next wall." }
    ]
  },

  kalymnos: {
    label: "Kalymnos · GR",
    name: "Kalymnos Route",
    stats: { miles: "~45", crags: 6, climbingDays: 6, anchorages: 7 },
    days: [
      { title: "Arrive at the port", tag: "Arrival", loc: "Kos Marina",
        text: "The meeting point is Kos Marina, with check-in available from 18:00. We organize accommodation and prepare the boat for the week ahead.",
        evening: "Welcome dinner on board with Greek meze & local wine." },
      { title: "Vathy", tag: "sail + climb", loc: "Vathy Inlet",
        text: "Morning sail towards Kalymnos with stunning views of the Dodecanese. We anchor in Vathy's secluded inlet — emerald water, a charming beach, and a newly bolted crag just 100 meters from the boat.",
        evening: "Likely the only boat in the inlet — waking up here proves it wasn't a dream." },
      { title: "Telendos", tag: "sail + climb", loc: "Telendos Island",
        text: "We sail around Kalymnos to little Telendos — crags accessible only by sea, a privilege few climbers get. A couple of sectors, distinct styles and grades, climbing until the sun sets.",
        evening: "Sunset glowing warm orange over Kalymnos, right in front of us." },
      { title: "Arginonta", tag: "climb", loc: "Arginonta Bay",
        text: "We drop anchor in Arginonta's beautiful roadstead. The bay alone offers more than 1,000 sport climbing routes, from grade 4 up to 9th grade — get crazy.",
        evening: "Dinner on board at anchor under the cliffs." },
      { title: "Grande Grotta, Arhi & more", tag: "climb", loc: "Arginonta → Palionisos",
        text: "One day is hardly enough for Arginonta: a morning of free ascents at Grande Grotta, Arhi, Sea Breeze, Little Verdon, Pocket Wall and many more. In the evening we sail through Dolphin's Bay to Palionisos.",
        evening: "Palionisos: serene village, stunning beach and an exceptional seafood taverna." },
      { title: "Sikati Cave", tag: "sail + climb", loc: "Sikati",
        text: "A truly unique wonder of the world. The secluded white beach at the cave's base is our natural harbor, and 'The Beach' crag is a short swim from the boat — climbing until sunset.",
        evening: "Night at anchor below the cave." },
      { title: "Palionisos", tag: "climb", loc: "Palionisos Bay",
        text: "Crags within easy reach of the boat and climbing until lunchtime, then one last taste of homemade island cuisine at our friend's taverna — Greek hospitality at its warmest.",
        evening: "A last swim in the azure water, then sails up: Kos Marina by 18:00." },
      { title: "Kos", tag: "Departure", loc: "Kos Marina",
        text: "Disembark in the morning before 9am — sore forearms, full memory cards.",
        evening: "Farewell breakfast on board. See you on the next wall." }
    ]
  },

  mallorca: {
    label: "Mallorca · ES",
    name: "Mallorca Route",
    stats: { miles: "~90", crags: 7, climbingDays: 6, anchorages: 7 },
    days: [
      { title: "Arrive at the port", tag: "Arrival", loc: "Palma de Mallorca",
        text: "The meeting point is at the harbor in Palma de Mallorca, with check-in available from 18:00. We organize accommodation and prepare the boat for the week ahead.",
        evening: "Welcome dinner on board with Spanish tapas & local wine." },
      { title: "Ferrera Bay", tag: "sail + DWS", loc: "Ferrera Bay",
        text: "Early wake-up and a morning sail along Mallorca's shores, reaching Ferrera Bay by noon. The Santanyi sector is perfect for a first taste of deep water soloing: easy routes for novices and experts alike, on crimps, holes, slopers and overhangs.",
        evening: "We anchor in the bay for the night." },
      { title: "Varques Bay", tag: "DWS", loc: "Cala Varques",
        text: "The legendary 'Camp 4' of the island, a favored camping spot for climbers. We anchor right in front of the beach: routes from short and easy (10-15 meters) to higher, more challenging lines.",
        evening: "Night at anchor in front of the beach." },
      { title: "Porto Cristo", tag: "DWS", loc: "Porto Cristo",
        text: "Moored in Porto Cristo's natural harbor, with easy access to two of the island's classics: Cova del Diablo and Torre del Falcons.",
        evening: "Night in the natural harbor." },
      { title: "Porto Colom", tag: "DWS", loc: "Porto Colom",
        text: "The spot near the lighthouse is perfect for entry-level deep water soloing — while the adventurous will find hard, challenging routes, all with easy foot exits at the top.",
        evening: "Night in the harbor or a nearby bay, weather deciding." },
      { title: "Sa Nau Bay", tag: "sail + DWS", loc: "Sa Nau Bay",
        text: "A longer sail to Sa Nau Bay, renowned for some of the best climbing on the island — primarily on holes of every dimension.",
        evening: "Dinner on board at anchor." },
      { title: "Es Pontas & Porto Pi", tag: "sail + DWS", loc: "Es Pontas",
        text: "We can't miss the famous line on the Es Pontas arch, climbed by Chris Sharma — with lines for every level around it. On the way back, a stop at Porto Pi, where climbing on the island began in the early 80s.",
        evening: "Palma by 18:00 — farewell dinner at a restaurant downtown." },
      { title: "Palma", tag: "Departure", loc: "Palma de Mallorca",
        text: "Disembark in the morning before 9am — sore fingers, salty skin, full memory cards.",
        evening: "Farewell breakfast on board. See you on the next wall." }
    ]
  },

  amalfi: {
    label: "Amalfi Coast · IT",
    name: "Amalfi Coast Route",
    stats: { miles: "~70", crags: 6, climbingDays: 6, anchorages: 7 },
    days: [
      { title: "Arrive at the port", tag: "Arrival", loc: "Marina di Stabbia",
        text: "The meeting point is Marina di Stabbia, with check-in available from 18:00. We organize accommodation and prepare the boat for the week ahead.",
        evening: "Welcome dinner on board with Campanian specialties & local wine." },
      { title: "Punta Campanella", tag: "sail + climb", loc: "Punta Campanella",
        text: "Early-morning sail to the northernmost cape of the coast, the silhouette of Vesuvius behind us. A sea-level crag for every skill level — perfect for warming up — with snorkeling in crystal-clear water beneath the cliffs.",
        evening: "Mesmerizing sunset behind Capri Island." },
      { title: "Monte Pertuso", tag: "climb", loc: "Positano",
        text: "Coffee and Amalfi Coast sweets in Positano, then up to Montepertuso: we climb beneath the colossal mountain cavity — our first taste of the area's exceptional rock, 400 meters above our boat.",
        evening: "Authentic lunch at the taverna in the village square." },
      { title: "Trail of the Gods", tag: "trek + climb", loc: "Nocelle → Agerola",
        text: "We disembark in Nocelle to walk the famous Sentiero degli Dei: 7 panoramic kilometers to Agerola, with stunning climbing crags along the way. The boat greets us in Agerola in the evening.",
        evening: "The boat is waiting for us in Agerola." },
      { title: "Positano", tag: "climb + DWS", loc: "Positano Bay",
        text: "Positano's celebrated crags: immaculate limestone adorned with caves, columns and overhanging stalactites. In the afternoon, deep water solo on the cliffs of the bay.",
        evening: "Evening sail to Amalfi's harbor — seafood dinner at a nearby fish tavern." },
      { title: "Amalfi", tag: "climb", loc: "Torre dello Ziro",
        text: "Approach hike from Amalfi's harbor, pausing for breakfast at Pansa, one of Italy's oldest patisseries (1830). We climb at the base of the Torre dello Ziro fortress, Amalfi's square spread below.",
        evening: "Evening sail to Capri — night beside its renowned sea stacks." },
      { title: "Capri Island", tag: "sail + DWS", loc: "Capri",
        text: "Sunrise between Capri's iconic sea stacks, then a circumnavigation of the island, exploring coastal caves and adding a few more deep water solo climbs.",
        evening: "Course set home: Marina di Stabbia by 18:00." },
      { title: "Marina di Stabbia", tag: "Departure", loc: "Marina di Stabbia",
        text: "Disembark in the morning before 9am — sore forearms, full memory cards.",
        evening: "Farewell breakfast on board. See you on the next wall." }
    ]
  }
};

/* Departures — status: "open" | "few" | "sold" · badge shown next to dates */
const VST_DEPARTURES = [
  { dates: "Jul 18 — 25", year: 2026, dest: "Mallorca", country: "Spain", boat: "Monohull 48-56 ft", status: "sold", note: "Sold out" },
  { dates: "Sep 5 — 12", year: 2026, dest: "Sardinia", country: "Italy", boat: "Monohull 48-56 ft", status: "open", note: "Open booking" },
  { dates: "Sep 12 — 19", year: 2026, dest: "Sardinia", country: "Italy", boat: "Monohull 48-56 ft", status: "few", note: "3 spots left" },
  { dates: "Sep 19 — 26", year: 2026, dest: "Sardinia", country: "Italy", boat: "Monohull 48-56 ft", status: "open", note: "Open booking" },
  { dates: "Oct 3 — 10", year: 2026, dest: "Kalymnos", country: "Greece", boat: "Monohull 48-56 ft", status: "open", note: "Open booking" },
  { dates: "Oct 10 — 17", year: 2026, dest: "Kalymnos", country: "Greece", boat: "Monohull 48-56 ft", status: "few", note: "5 spots left" },
  { dates: "Oct 10 — 17", year: 2026, dest: "Amalfi Coast", country: "Italy", boat: "Monohull 48-56 ft", status: "open", note: "Open booking" }
];
