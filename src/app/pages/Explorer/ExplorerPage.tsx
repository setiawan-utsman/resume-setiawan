import React from 'react'
import Maplibre from '../../components/Map/Maplibre'
import { Card, CardTitle } from '../../components/Card/card';
import { ButtonSetiawan, CardSetiawan } from "npmjs-test-setiawan41";
import { EXPLORER } from '../../assets/data/resume';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../../assets/icons/LogoIcon';
import ButtonBack from '../../components/ButtonBack';
import FooterCopyright from '../../components/FooterCopyright';

export default function ExplorerPage() {
 const navigate = useNavigate();
  return (
    <>
      <div className="explore-map space-y-10 pb-5">
        <section className="relative h-[60vh] min-h-[480px]">
          <div className="flex items-center justify-center text-center text-white h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("/static/img/explorer/map.png")`,
              }}
            />

            <div className="relative z-10 p-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {EXPLORER?.about?.title}
              </h1>
              <p className="text-base md:text-lg mb-8">
                {EXPLORER?.about?.desc}
              </p>
              <button
                className="bg-red-600/50 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-primary/90 transition-colors"
                onClick={() => window.open("playground", "_blank", "noopener,noreferrer")}
              >
                Explore Features
              </button>
            </div>
          </div>
        </section>
        <section className="container mx-auto w-full xl:max-w-[1280px] lg:max-w-[976px] md:max-w-[768px] sm:max-w-[480px] xs:max-w-[350px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {EXPLORER?.analisis_map?.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {EXPLORER?.analisis_map?.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
              {EXPLORER?.analisis_map?.data?.map((item, index) => (
                <Card className="p-0 gap-0" key={index}>
                  <div
                    className="w-full h-48 bg-cover bg-center border-t-2"
                    style={{
                      backgroundImage: `url(${item?.image})`,
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {item?.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item?.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
        </section>
      </div>
      <FooterCopyright />
      <ButtonBack />
    </>
  );
}
