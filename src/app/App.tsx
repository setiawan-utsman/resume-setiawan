import React, { use, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppRouting from "./AppRouting";
const AppRouting = React.lazy(() => import("./AppRouting"));
const ResumePage = React.lazy(() => import("./pages/Portofolio/ResumePage"));

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });    
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="404" element={<h1>404</h1>} />
        <Route path="*" element={<AppRouting />} />
      </Routes>
    </Router>
  );
}

export default App;
