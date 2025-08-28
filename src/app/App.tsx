import React from "react";
// import ResumePage from "./pages/Portofolio/ResumePage";
const ResumePage = React.lazy(() => import("./pages/Portofolio/ResumePage"));
// import ExplorerPage from "./pages/Explorer/ExplorerPage";

function App() {
  return (
    // <div className="relative min-h-screen py-5 flex justify-center items-start">
    //   <div className="container mx-auto w-full lg:max-w-[976px] md:max-w-[768px] sm:max-w-[480px] xs:max-w-[350px]">
    //     <div className="flex flex-col gap-8">
    //       <div className="flex flex-col gap-1">
    //         <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight">
    //           Pilihan Analitik
    //         </p>
    //         <p className="text-[#49709c] text-sm font-normal leading-normal">
    //           Pilih jenis analisis yang ingin Anda lakukan
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-3 gap-6">
    //         <div className="col-span-3">
    //           <div className="card h-32 bg-gray-100"></div>
    //         </div>
    //         <div className="md:col-span-1 xs:col-span-3">
    //           <div className="card h-32 bg-gray-100"></div>
    //         </div>
    //         <div className="md:col-span-1 xs:col-span-3">
    //           <div className="card h-32 bg-gray-100"></div>
    //         </div>
    //         <div className="md:col-span-1 xs:col-span-3">
    //           <div className="card h-32 bg-gray-100"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
<ResumePage />
  );
}

export default App;
// <ResumePage />
// <ExplorerPage />
