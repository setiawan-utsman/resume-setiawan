import React from 'react'
import { PORTAL } from '../assets/data/resume';
import { useNavigate } from 'react-router-dom';
import SVGMap from 'svg-map-drawer';

export default function PortalPage() {
const navigate = useNavigate();
const regions = [
  { id: "ID11", name: "Aceh", color: "#10b981", value: 11500 },
  { id: "ID12", name: "North Sumatra", color: "#f59e0b", value: 15000 },
  { id: "ID13", name: "West Sumatra", color: "#3b82f6", value: 8000 },
  { id: "ID14", name: "Riau", color: "#ef4444", value: 7500 },
  { id: "ID15", name: "Jambi", color: "#8b5cf6", value: 5500 },
  { id: "ID16", name: "South Sumatra", color: "#10b981", value: 11000 },
];
  return (
    <div className="relative min-h-screen py-5 flex justify-center items-center">
      <div className="container mx-auto w-full xl:max-w-[1280px] lg:max-w-[976px] md:max-w-[768px] sm:max-w-[480px] xs:max-w-[421px]">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-3 max-w-[72rem] justify-center items-center mx-auto">
            <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight">
              {PORTAL?.portal_page?.title}
            </p>
            <p className="text-[#49709c] text-sm font-normal leading-normal text-center">
              {PORTAL?.portal_page?.description}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3">
              <div className="grid grid-cols-3 gap-3">
                <div className="md:col-span-1 xs:col-span-3">
                  <div className="relative w-full h-[250px] rounded-lg ">
                    <img
                      className="rounded-lg w-full h-full object-cover"
                      src="/static/img/explorer/portfolio.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:col-span-2 xs:col-span-3">
                  {/* <div className="card h-full bg-gray-100"></div> */}
                  <div className="flex flex-col w-full grow items-stretch justify-center gap-1 h-full">
                    <p className="text-[#0d141c] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                      Analisis Portofolio
                    </p>
                    {/* <div className="flex items-end gap-3 justify-between"> */}
                    <div className="flex-1 h-full">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#49709c] text-base font-normal leading-normal">
                          Kumpulan proyek yang telah saya kembangkan sebagai
                          bagian dari perjalanan saya di dunia pengembangan web
                          dan mobile. Setiap proyek mencerminkan kemampuan saya
                          dalam membangun antarmuka yang fungsional, efisien,
                          dan estetis.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="rounded-lg bg-cyan-500 w-auto h-10 flex justify-center items-center px-4 text-white font-semibold hover:bg-cyan-600 transition duration-300 ease-in-out"
                        onClick={() => navigate("/resume")}
                      >
                        Buka Dashboard
                      </button>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            {PORTAL?.portal_cards.map((item, index) => (
              <div className="md:col-span-1 xs:col-span-3" key={index}>
                <div className="flex flex-col w-full grow items-stretch justify-center gap-1">
                  <div className="relative w-full h-[250px] rounded-lg">
                    <img
                      className="rounded-lg w-full h-full object-cover"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <p className="text-[#0d141c] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                    {item.title}
                  </p>
                  <div className="flex-1 h-full">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#49709c] text-base font-normal leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => navigate(item.path)}
                      className="relative group h-10 w-40 perspective-[1000px] focus:outline-none rounded-lg"
                    >
                      <span className="absolute inset-0 bg-[#323237] text-[#adadaf] flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] group-hover:translate-y-1/2 group-hover:[transform:rotateX(180deg)] rounded-lg">
                        Lihat
                      </span>
                      <span className="absolute inset-0 bg-cyan-500 text-white rounded-lg flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] opacity-0 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-x-0">
                        Selengkapnya
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="md:col-span-1 xs:col-span-3">
              <div className="card h-32 bg-gray-100"></div>
            </div>
            <div className="md:col-span-1 xs:col-span-3">
              <div className="card h-32 bg-gray-100"></div>
            </div> */}
          </div>

          {/* <div className="w-100 h-100">
            <SVGMap
              svgUrl="https://cdn.jsdelivr.net/npm/svg-map-drawer/dist/indonesia.svg"
              regions={regions}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
