import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import App from './App'
import ExplorerPage from './pages/Explorer/ExplorerPage';
// import ExplorerRouting from './pages/Explorer/ExplorerRouting';
// import PageNotFound from './components/PageNotFound';
// import ProjectPage from './pages/Project/ProjectPage';
// import ResumePage from './pages/Portofolio/ResumePage';
// import PortalPage from './pages/PortalPage'
const PortalPage = React.lazy(() => import("./pages/PortalPage"));
const ResumePage = React.lazy(() => import("./pages/Portofolio/ResumePage"));
const ExplorerRouting = React.lazy(() => import("./pages/Explorer/ExplorerRouting"));
const PageNotFound = React.lazy(() => import("./components/PageNotFound"));
const ProjectPage = React.lazy(() => import("./pages/Project/ProjectPage"));

export default function AppRouting() {
  return (
    <Routes>
      <Route path="portal" element={<PortalPage />} />
      <Route path="resume" element={<ResumePage />} />
      <Route path="map/*" element={<ExplorerRouting />} />
      <Route path='project' element={<ProjectPage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route index element={<Navigate to="/portal" />} />
    </Routes>
  );
}
