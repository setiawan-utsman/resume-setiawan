import React, { use, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import MaplibrePanel from "./MaplibrePanel";
export default function Maplibre() {
  const map = useRef<maplibregl.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mapContainer.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [118.015776, -2.6000285],
      zoom: 4.5,
    });
    const marker = new maplibregl.Marker({ color: "red" })
      .setLngLat([106.85915379658037, - 6.303964817998744]) // bisa diubah sesuai lokasi
      .addTo(map.current);
    return () => {
      marker.remove();
      map.current?.remove();
    };
  }, []);

  return (
    <div className="h-screen w-full relative">
      <div className="h-full w-full" ref={mapContainer}></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <MaplibrePanel />
      </div>
    </div>
  );
}
