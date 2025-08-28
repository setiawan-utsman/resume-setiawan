interface LayerConfig {
  id: string;
  sourceType: "geojson" | "mvt";
  type: "point" | "polygone";
  isVisible: boolean;
  label: string;
}

export const LAYER_CONFIG: LayerConfig[] = [
  {
    id: "dailyAlert",
    sourceType: "geojson",
    type: "point",
    isVisible: true,
    label: "Event Ideologi",
  },
  {
    id: "kepadatanPenduduk",
    sourceType: "mvt",
    type: "polygone",
    isVisible: false,
    label: "Kepadatan Penduduk",
  },
];
