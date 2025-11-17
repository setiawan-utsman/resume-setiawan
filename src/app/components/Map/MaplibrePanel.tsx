import React from 'react'
import { Card } from '../Card/card';
import { CONFIGMAP } from '../../assets/data/map';
import { Eye, EyeIcon, EyeOff, OctagonIcon } from 'lucide-react';


export default function MaplibrePanel({ layers, onToggleLayer, onZoomToLayer}: {layers: any, onToggleLayer: any, onZoomToLayer ?: any}) {
  const handlePanelLayer = (item: any) => {
   onToggleLayer(item.id);
   onZoomToLayer(item);
  };

  return (
    <Card className=" bg-white/90 shadow-lg">
      {CONFIGMAP.map((item) => {
        const isVisible = layers[item.id];
        return (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer gap-2"
          >
            <div className="flex items-center gap-3" >
              <div style={{ color: item.color }}><OctagonIcon /></div>
              <div className="text-sm font-medium text-gray-700">
                {item.label}
              </div>
            </div>
            <div className="text-gray-400" onClick={() => handlePanelLayer(item)}>
              {isVisible ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </div>
          </div>
        );
      })}
    </Card>
  );
}

// onClick={() => {
//               // onToggleLayer(item.id);
//               // if (isVisible) {
//                 // onZoomToLayer(item);
//               // }
//             }}
