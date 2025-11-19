import React from 'react'
import { PROJECT } from '../../assets/data/resume';
import { Card } from '../../components/Card/card';
import ButtonBackTop from '../../components/ButtonBackTop';
import ButtonBack from '../../components/ButtonBack';

export default function ProjectPage() {
  return (
    <>
      <div className="container mx-auto w-full xl:max-w-[1280px] lg:max-w-[976px] md:max-w-[768px] sm:max-w-[480px] xs:max-w-[350px] flex flex-col flex-1 space-y-8 my-3">
        <section className="mt-10 max-w-[960px] mx-auto">
          {/* <div className="max-w-[960px] mx-auto"> */}
          <div className="flex flex-col gap-6 px-4 text-center items-center">
            <h1 className="text-[#111718] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
              Yayuk Setiawan -{" "}
              <span className="text-cyan-500">Frontend Developer</span>
            </h1>
            <h2 className="text-[#618389] dark:text-gray-400 text-base font-normal leading-normal md:text-lg max-w-2xl">
              {PROJECT?.description}
            </h2>
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <div
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gray-200 dark:bg-gray-800 text-[#111718] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                onClick={() => window.open(PROJECT?.contact, "_blank")}
              >
                <span className="truncate">Kontak Saya</span>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
        <section className="space-y-5" id="projects">
          <h2 className="text-[#111718] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] md:text-3xl">
            {PROJECT?.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECT?.items?.map((item, index) => (
              <Card key={index} className="w-full space-y-4 p-0">
                <div className="w-full h-[200px]">
                  <img
                    className="w-full h-full object-cover rounded-t-lg"
                    src="/static/img/project/simaspro.png"
                    alt=""
                  />
                </div>
                <div className="space-y-2 px-4 pb-4">
                  <div className="font-bold text-base capitalize">
                    {item.title}
                  </div>
                  <div className="text-sm leading-5 text-gray-600">
                    {item.description}
                  </div>
                  <hr className="w-full border-gray-200/50 border-b-2 rounded-md" />
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <div className="text-sm font-bold">Kategori</div>
                      <div className="text-sm text-gray-600">
                        Web Application
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-bold">Fiture</div>
                      <div className="text-sm text-gray-600">
                        {item.features?.join(", ")}
                        {/* {item.fiture?.join(", ")} */}
                      </div>
                    </div>
                  </div>
                  <hr className="w-full border-gray-200/50 border-b-2 rounded-md" />
                  <div className="flex flex-wrap gap-2">
                    {item.technologies?.map((tag, index) => (
                      <Card
                        className="bg-cyan-600/10 capitalize text-sm px-2 py-1 font-semibold rounded-2xl"
                        key={index}
                      >
                        {tag}
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <ButtonBack />
    </>
  );
}
