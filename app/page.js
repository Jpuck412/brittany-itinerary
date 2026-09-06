'use client';

import { useMemo, useState } from 'react';

const stops = [
  {day:1,date:"Sep 12",city:"Rennes",region:"Gateway",km:"—",stay:"Rennes",items:["Parlement de Bretagne","Place des Lices","Les Halles Centrales"],note:"Easy arrival day; keep the evening flexible."},
  {day:2,date:"Sep 13",city:"Mont-Saint-Michel",region:"Bay",km:"78 km",stay:"Saint-Malo",items:["Abbey","Grande Rue","Bay viewpoint"],note:"Target an early arrival to beat the midday crowds."},
  {day:3,date:"Sep 14",city:"Saint-Malo",region:"Emerald Coast",km:"55 km",stay:"Saint-Malo",items:["Ramparts","Plage du Sillon","Fort National"],note:"Build the day around tide conditions."},
  {day:4,date:"Sep 15",city:"Dinan → Cap Fréhel",region:"North Coast",km:"125 km",stay:"Paimpol",items:["Dinan old town","Fort La Latte","Cap Fréhel"],note:"Scenic driving day. Leave buffer for viewpoints."},
  {day:5,date:"Sep 16",city:"Pink Granite Coast",region:"Côte de Granit Rose",km:"105 km",stay:"Morlaix",items:["Ploumanac'h","Trégastel","Morlaix"],note:"High-value scenery day; sunset on the coast."},
  {day:6,date:"Sep 17",city:"Brest → Crozon",region:"Finistère",km:"125 km",stay:"Crozon",items:["Brest waterfront","Pointe de Pen-Hir","Crozon Peninsula"],note:"Wild Atlantic landscapes."},
  {day:7,date:"Sep 18",city:"Pointe du Raz → Quimper",region:"West Brittany",km:"115 km",stay:"Quimper",items:["Pointe du Raz","Baie des Trépassés","Quimper old town"],note:"Keep the afternoon for Quimper."},
  {day:8,date:"Sep 19",city:"Concarneau → Carnac",region:"South Coast",km:"135 km",stay:"Quiberon",items:["Ville Close","Carnac alignments","Quiberon coast"],note:"History + ocean in one day."},
  {day:9,date:"Sep 20",city:"Belle-Île / Gulf of Morbihan",region:"Morbihan",km:"Ferry + local",stay:"Vannes",items:["Belle-Île","Port of Vannes","Old town"],note:"Weather-sensitive island day; preserve a backup."},
  {day:10,date:"Sep 21",city:"Vannes",region:"Finish",km:"—",stay:"—",items:["Remparts","Harbor","Departure"],note:"No hard scheduling after noon."}
];
const icons=["✦","◈","⌁","◇","◎","△","✧","◌","⬡","◆"];

export default function Home(){
  const [selected,setSelected]=useState(3);
  const [view,setView]=useState("command");
  const [saved,setSaved]=useState(false);
  const trip=stops[selected-1];
  const progress=useMemo(()=>Math.round((selected/stops.length)*100),[selected]);
  function exportTrip(){
    const blob=new Blob([JSON.stringify({trip:"Brittany",stops},null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob); const a=document.createElement("a");
    a.href=url;a.download="brittany-itinerary.json";a.click();URL.revokeObjectURL(url);
  }
  return <main>
    <header className="topbar">
      <div className="brand"><div className="brandMark">B</div><div><b>BRITTANY</b><span>TRIP COMMAND CENTER</span></div></div>
      <nav>{["command","timeline","map"].map(v=><button key={v} className={view===v?"nav active":"nav"} onClick={()=>setView(v)}>{v}</button>)}</nav>
      <div className="actions"><button onClick={()=>setSaved(!saved)} className="ghost">{saved?"★ Saved":"☆ Save trip"}</button><button onClick={exportTrip} className="primary">Export</button></div>
    </header>
    <section className="hero"><div className="heroCopy"><div className="eyebrow">FRANCE · 10 DAYS · ROAD TRIP</div><h1>Brittany,<br/><em>beautifully planned.</em></h1><p>A living itinerary for the Atlantic coast — routes, stays, timing, weather-sensitive decisions and the moments worth slowing down for.</p><div className="heroMeta"><span>● 10 days</span><span>⌁ ~900 km</span><span>◒ 9 overnight bases</span></div></div><div className="heroOrb"><div className="orbLabel">ATLANTIC<br/><strong>01—10</strong></div><div className="orbRoute"><i/><i/><i/><i/><i/></div></div></section>
    <div className="shell"><div className="sectionHead"><div><div className="eyebrow">LIVE TRIP BOARD</div><h2>{view==="map"?"Route intelligence":view==="timeline"?"Day-by-day timeline":"Your trip at a glance"}</h2></div><div className="progress"><span>DAY {selected} / {stops.length}</span><div><i style={{width:progress+"%"}}/></div><b>{progress}%</b></div></div>
      {view==="command"&&<div className="dashboard"><aside className="dayRail">{stops.map((s,i)=><button key={s.day} onClick={()=>setSelected(s.day)} className={selected===s.day?"day active":"day"}><span>{String(s.day).padStart(2,"0")}</span><div><b>{s.city}</b><small>{s.date} · {s.stay}</small></div><strong>{icons[i]}</strong></button>)}</aside><section className="mainPanel"><div className="mapCard"><div className="mapNoise"/><div className="mapTitle"><span>ROUTE / LIVE</span><b>{trip.region}</b></div><svg viewBox="0 0 760 330" className="routeSvg" aria-label="Stylized Brittany route map"><path d="M80 240 C140 185 150 90 235 115 S350 260 410 170 S520 80 650 135" className="coast"/><path d="M80 240 C155 190 165 105 245 122 S350 245 410 170 S520 95 650 135" className="route"/>{[["Rennes",80,240],["Mont",155,165],["St-Malo",205,112],["Dinan",270,135],["Pink",350,220],["Crozon",410,170],["Raz",505,112],["Quimper",535,150],["Carnac",585,205],["Vannes",650,135]].map(([n,x,y],i)=><g key={n}><circle cx={x} cy={y} r={i===selected-1?9:5} className={i===selected-1?"dot selected":"dot"}/><text x={x+10} y={y-10}>{n}</text></g>)}</svg><div className="mapFooter"><span>↗ Coastal route optimized</span><span>◉ Tide-aware planning</span><span>⌁ Scenic priority</span></div></div><div className="cards"><article className="card large"><div className="cardTop"><span>DAY {trip.day}</span><span>{trip.date}</span></div><h3>{trip.city}</h3><p>{trip.note}</p><div className="stops">{trip.items.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</div>)}</div></article><article className="card"><span className="eyebrow">LOGISTICS</span><h3>{trip.km}</h3><p>Estimated route distance</p><hr/><b>Overnight</b><strong>{trip.stay}</strong><button className="cardButton">Open stay plan →</button></article><article className="card"><span className="eyebrow">TRIP HEALTH</span><div className="health"><strong>92</strong><span>/100</span></div><p>Strong pacing. One weather-sensitive day.</p><div className="healthbar"><i/></div><button className="cardButton">Run itinerary audit →</button></article></div></section></div>}
      {view==="timeline"&&<div className="timeline">{stops.map(s=><button key={s.day} onClick={()=>setSelected(s.day)} className={selected===s.day?"timelineRow selected":"timelineRow"}><div className="time">{s.date}<b>DAY {s.day}</b></div><div className="line"><i/></div><div className="tlBody"><h3>{s.city}</h3><span>{s.region} · {s.km}</span><p>{s.items.join("  ·  ")}</p></div></button>)}</div>}
      {view==="map"&&<div className="fullMap mapCard"><div className="mapTitle"><span>INTERACTIVE ROUTE MODEL</span><b>Brittany master route</b></div><svg viewBox="0 0 1000 560" className="routeSvg big"><path d="M100 430 C190 330 190 150 310 185 S455 390 540 285 S700 120 900 220" className="coast"/><path d="M100 430 C190 330 190 150 310 185 S455 390 540 285 S700 120 900 220" className="route"/>{stops.map((s,i)=>{const x=100+i*89,y=430-(i%4)*75+(i>5?35:0);return <g key={s.day}><circle cx={x} cy={y} r={selected===s.day?12:7} className={selected===s.day?"dot selected":"dot"}/><text x={x+15} y={y-13}>{s.city}</text></g>})}</svg><div className="mapLegend"><span>● Planned stop</span><span>— Scenic route</span><span>◉ Selected day</span></div></div>}
    </div><footer><span>BRITTANY / TRIP SYSTEM v1.0</span><span>Built for deliberate travel.</span><span>© 2026</span></footer>
  </main>
}
