import { Navigate, Route, Routes } from "react-router-dom";
import ExplorerPage from "./ExplorerPage";
import Maplibre from "../../components/Map/Maplibre";
import ExplorerPlayground from "./ExplorerPlayground";

const ExplorerRouting = () => {
  return (
    <Routes>
      <Route path="" element={<ExplorerPage />} />
      <Route path="/playground" element={<ExplorerPlayground />} />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};

export default ExplorerRouting;
