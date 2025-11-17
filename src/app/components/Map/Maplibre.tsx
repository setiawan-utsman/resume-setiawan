import React, { useCallback, useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import MaplibrePanel from "./MaplibrePanel";
import { CONFIGMAP } from "../../assets/data/map";
export default function Maplibre() {
  const map = useRef<maplibregl.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const [statusMapOnLoad, setStatusMapOnload] = useState<any>();

  const [layers, setLayers] = useState(() => {
    const initial: any = {};
    CONFIGMAP.forEach((item) => {
      initial[item.id] = item.isVisible;
    });
    return initial;
  });
  useEffect(() => {
    if (!mapContainer.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [118.015776, -2.6000285],
      zoom: 4.5,
    });

    map.current.on("load", () => {
      CONFIGMAP.forEach((item) => {
        layerConfigurations(item);
        if (!item.isVisible) {
          const layerIds = getLayerIds(item);
          layerIds.forEach((id) => {
            if (map.current?.getLayer(id)) {
              map.current?.setLayoutProperty(id, "visibility", "none");
            }
          });
        }
      });
      setupLayerInteractions();
    });
    return () => {
      // marker.remove();
      map.current?.remove();
    };
  }, []);

  const layerConfigurations = (configMap: any) => {
    const minZoom = configMap.zoom?.min ?? 0;
    const maxZoom = configMap.zoom?.max ?? 22;

    switch (configMap?.type) {
      case "polygon":
        map.current?.addSource(configMap.id, {
          type: "geojson",
          data: configMap.geometry,
        });

        map.current?.addLayer({
          id: `${configMap.id}-fill`,
          type: "fill",
          source: configMap.id,
          // minzoom: minZoom,
          // maxzoom: maxZoom,
          paint: {
            "fill-color": configMap.color,
            "fill-opacity": 0.5,
          },
        });

        map.current?.addLayer({
          id: `${configMap.id}-outline`,
          type: "line",
          source: configMap.id,
          // minzoom: minZoom, // Layer mulai visible
          // maxzoom: maxZoom, // Layer hilang setelah zoom ini
          paint: {
            "line-color": configMap.color,
            "line-width": 2,
          },
        });
        break;
      case 'line':
        map.current?.addSource(configMap.id, {
          type: "geojson",
          data: configMap.geometry,
        });

        map.current?.addLayer({
          id: configMap.id,
          type: "line",
          source: configMap.id,
          minzoom: minZoom, // Layer mulai visible
          maxzoom: maxZoom, // Layer hilang setelah zoom ini
          paint: {
            "line-color": configMap.color,
            "line-width": 2,
          },
        })
      break;
      case 'point':
        map.current?.addSource(configMap.id, {
          type: "geojson",
          data: configMap.geometry,
        });

        map.current?.addLayer({
          id: configMap.id,
          type: "circle",
          source: configMap.id,
          // minzoom: minZoom, // Layer mulai visible
          // maxzoom: maxZoom, // Layer hilang setelah zoom ini
          paint: {
            "circle-radius": 8,
            "circle-color": configMap.color,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#fff",
          },
        });
      break;
      case 'cluster':
        map.current?.addSource(configMap.id, {
          type: "geojson",
          data: configMap.geometry,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
        });

        map.current?.addLayer({
          id: `${configMap.id}-clusters`,
          type: "circle",
          source: configMap.id,
          filter: ["has", "point_count"],
          paint: {
            "circle-color": configMap.color,
            "circle-radius": [
              "step",
              ["get", "point_count"],
              20,
              10,
              30,
              30,
              40,
            ],
          },
        });

         map.current?.addLayer({
           id: `${configMap.id}-count`,
           type: "symbol",
           source: configMap.id,
           filter: ["has", "point_count"],
           layout: {
             "text-field": "{point_count_abbreviated}",
             "text-size": 12,
           },
           paint: {
             "text-color": "#fff",
           },
         });

          map.current?.addLayer({
            id: `${configMap.id}-unclustered`,
            type: "circle",
            source: configMap.id,
            filter: ["!", ["has", "point_count"]],
            paint: {
              "circle-color": configMap.color,
              "circle-radius": 6,
              "circle-stroke-width": 2,
              "circle-stroke-color": "#fff",
            },
          });
      break;
      default:
        break;
    }
  };

  // Zoom to layer

  const getLayerIds = (configMap: any) => {
    switch (configMap.type) {
      case "polygon":
        return [`${configMap.id}-fill`, `${configMap.id}-outline`];
      case "cluster":
        return [
          `${configMap.id}-clusters`,
          `${configMap.id}-count`,
          `${configMap.id}-unclustered`,
        ];
      default:
        return [configMap.id];
    }
  };

  const handleToggleLayer = (layerId: string) => {
    setLayers((prev: any) => {
      const newLayers = { ...prev, [layerId]: !prev[layerId] };
      if (map.current) {
        const item: any = CONFIGMAP.find((c) => c.id === layerId);
        const visibility = newLayers[layerId] ? "visible" : "none";

        if (item.type === "cluster") {
          map.current.setLayoutProperty(
            `${layerId}-clusters`,
            "visibility",
            visibility
          );
          map.current.setLayoutProperty(
            `${layerId}-count`,
            "visibility",
            visibility
          );
          map.current.setLayoutProperty(
            `${layerId}-unclustered`,
            "visibility",
            visibility
          );
        } else if (item.type === "polygon") {
          map.current.setLayoutProperty(
            `${layerId}-fill`,
            "visibility",
            visibility
          );
          map.current.setLayoutProperty(
            `${layerId}-outline`,
            "visibility",
            visibility
          );
        } else {
          map.current.setLayoutProperty(layerId, "visibility", visibility);
        }

         const allHidden = Object.values(newLayers).every((visible) => !visible);

        if (allHidden) {
         map.current.flyTo({
           center: [118.015776, -2.6000285],
           zoom: 4.5,
           duration: 1500,
           essential: true,
         });
        }
      }
      return newLayers;
    });
  };

  const handleZoomToLayer = useCallback(
    (configItem: any) => {
      if (!map.current || !configItem.center || !configItem.targetZoom) return;
     
      // // Show layer if hidden
      // if (!layers[configItem.id]) {
      //   handleToggleLayer(configItem.id);
      // }

      // Zoom to layer with smooth animation
      map.current.flyTo({
        center: configItem.center,
        zoom: configItem.targetZoom,
        duration: 1500, // 1.5 seconds animation
        essential: true,
      });
    },
    [layers, handleToggleLayer]
  );
  
  const setupLayerInteractions = () => {
    if(!map.current) return;
    CONFIGMAP.forEach(configMap => {
        const layerIds = getLayerIds(configMap);
        layerIds.forEach(layerId => {
          if (layerId.includes("-count") || layerId.includes("-outline")) return;
          map.current?.on("mouseenter", layerId, (e:any) => {
            // console.log('mossss pointer');
            
            if(map.current) map.current.getCanvas().style.cursor = 'pointer'
             const feature = e.features[0];
             const coordinates = e.lngLat;

            //  console.log(feature, coordinates);
             
           
          });
           map.current?.on("mouseleave", layerId, () => {
             if(map.current) map.current.getCanvas().style.cursor = "";
           });

           map.current?.on("click", layerId, (e:any) => {
             const feature = e.features[0];
              const clusterId = feature.properties.cluster_id;
            //  const coordinates = e.lngLat;
            const source:any = map.current?.getSource(configMap.id);
             console.log("sdasdasd ===>>>",source.getClusterExpansionZoom(clusterId));
             if (source && source.getClusterExpansionZoom) {
              console.log('sdnasdnsandasjndjj');
              
             }
           })
        })
    })
    console.log('sdasdsad');
    
    // // if (layerId.includes("-count") || layerId.includes("-outline")) return;
    // map.current.on("mouseenter", layerId, () => {
    //   if(map.current) map.current.getCanvas().style.cursor = 'pointer'
    //   // map.current?.getCanvas().style.cursor= 'pointer'
    //   // map.current.getCanvas().style.cursor = "pointer";
    // });

    // map.current.on("mouseleave", layerId, () => {
    //   if (map.current) {
    //     map.current.getCanvas().style.cursor = "";
    //   }
    // });
  }

  return (
    <>
      <div className="h-full w-full" ref={mapContainer}></div>
      <div className="absolute top-3 left-3 min-w-60">
        <MaplibrePanel
          layers={layers}
          onToggleLayer={handleToggleLayer}
          onZoomToLayer={handleZoomToLayer}
        />
      </div>
    </>
  );
}
