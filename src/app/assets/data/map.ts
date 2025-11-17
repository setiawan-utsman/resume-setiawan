import { t } from "i18next";

export const CONFIGMAP = [
  {
    id: "jakarta-district",
    sourceType: "geojson",
    type: "polygon",
    isVisible: true,
    label: "Jakarta Central District",
    color: "#3B82F6",
    zoom: { min: 10, max: 22 }, // Visible at zoom 10-22
    center: [106.83, -6.2], // Center coordinates for zoom
    targetZoom: 10, // Zoom level when clicked
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [106.68, -6.1],
          [106.88, -5.95],
          [106.95, -6.15],
          [106.9, -6.35],
          [106.7, -6.4],
          [106.6, -6.2],
          [106.68, -6.1],
        ],
      ],
    },
  },
  {
    id: "jakarta-business",
    sourceType: "geojson",
    type: "polygon",
    isVisible: false,
    label: "Business District",
    color: "#8B5CF6",
    zoom: { min: 11, max: 22 }, // Visible at zoom 11-22
    center: [106.86, -6.23], // Center coordinates for zoom
    targetZoom: 14, // Zoom level when clicked
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [106.85, -6.22],
          [106.87, -6.22],
          [106.87, -6.24],
          [106.85, -6.24],
          [106.85, -6.22],
        ],
      ],
    },
  },
  {
    id: "bali-area",
    sourceType: "geojson",
    type: "polygon",
    isVisible: false,
    label: "Bali Tourist Area",
    color: "#10B981",
    zoom: { min: 8, max: 22 }, // Visible at zoom 8-22
    center: [115.21, -8.66], // Center coordinates for zoom
    targetZoom: 12, // Zoom level when clicked
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [115.2, -8.65],
          [115.22, -8.65],
          [115.22, -8.67],
          [115.2, -8.67],
          [115.2, -8.65],
        ],
      ],
    },
  },
  {
    id: "jakarta-roads",
    sourceType: "geojson",
    type: "line",
    isVisible: false,
    label: "Main Roads Jakarta",
    color: "#EF4444",
    zoom: { min: 10, max: 22 },
    center: [106.83, -6.2],
    targetZoom: 10,
    geometry: {
      type: "LineString",
      coordinates: [
        [106.88, -6.34],
        [108.57, -6.74],
        [110.42, -7.0],
        [110.85, -7.56],
        [110.37, -7.79],
      ],
    },
  },
  {
    id: "surabaya-roads",
    sourceType: "geojson",
    type: "line",
    isVisible: false,
    label: "Surabaya Highway",
    color: "#F59E0B",
    zoom: { min: 10, max: 22 },
    center: [112.7, -7.25],
    targetZoom: 10,
    geometry: {
      type: "LineString",
      coordinates: [
        [112.7, -7.25],
        [112.72, -7.26],
        [112.74, -7.255],
        [112.76, -7.265],
      ],
    },
  },
  {
    id: "poi-jakarta",
    sourceType: "geojson",
    type: "point",
    isVisible: false,
    label: "Jakarta Points of Interest",
    color: "#EC4899",
    center: [106.83, -6.2],
    targetZoom: 10,
    geometry: {
      type: "MultiPoint",
      coordinates: [
        [106.8456, -6.2088], // Monas
        [106.827, -6.1751], // Kota Tua
        [106.865, -6.2297], // Istana
        [106.7997, -6.2293], // GBK
      ],
    },
  },
  {
    id: "cluster-locations",
    sourceType: "geojson",
    type: "cluster",
    isVisible: false,
    label: "Location Clusters",
    color: "#06B6D4",
    geometry: {
      type: "FeatureCollection",
      features: Array.from({ length: 50 }, (_, i) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
            106.78 + Math.random() * 0.15,
            -6.25 + Math.random() * 0.15,
          ],
        },
        properties: { id: i, name: `Location ${i + 1}` },
      })),
    },
  },
];