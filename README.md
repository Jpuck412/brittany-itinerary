# Brittany Itinerary

Premium Brittany, France travel command center for Brittany.

## Current build
- 10-day Brittany road-trip route covering Rennes, Mont-Saint-Michel, Saint-Malo, Dinan / Cap Fréhel, Côte de Granit Rose, Brest / Crozon, Pointe du Raz / Quimper, Concarneau / Carnac, Belle-Île / Gulf of Morbihan and Vannes.
- Command dashboard with day navigation and route visualization.
- Timeline view and clickable route view.
- Day planner with activity checklists and persistent trip notes.
- Local-first persistence with browser localStorage.
- Budget model with editable lodging, food, fuel, activities, ferry and buffer envelopes.
- Packing checklist with custom items.
- Trip-health indicator.
- JSON trip export.
- Print / PDF browser output.
- Responsive mobile and desktop interface.
- Premium editorial / glass / terrain visual language.
- Official Brittany tourism and SHOM tide source links.
- CI workflow for production builds.

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production integrations
The UI is deliberately API-ready for the next connected layer: live map tiles and routing, lodging/restaurants/attractions, weather, official tide predictions, ferry schedules, reservations, authentication/database, AI itinerary optimization, calendar sync, offline/PWA and shareable trip links.

Tide data should be connected through an appropriate SHOM service/key rather than fabricated values. Weather should likewise come from a live forecast provider before being treated as operational travel information.
