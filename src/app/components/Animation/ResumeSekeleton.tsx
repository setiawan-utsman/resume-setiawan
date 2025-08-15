import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ResumeSekeleton() {
  const {t} = useTranslation();
  return (
    <>
      <div className="container mx-auto w-full lg:max-w-[1024px] md:max-w-[720px] xs:max-w-[385px] mb-5">
        <div className="flex flex-col gap-6">
          <section className="md:flex sm:flex-col md:flex-row md:pt-[8rem] gap-6 xs:pt-[5rem] items-center w-full">
            <div className="bg-slate-300 md:w-3/5 h-72 rounded-md"></div>
            {/* <img
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                  src="\static\img\user.jpeg"
                /> */}
            <div className="flex flex-col gap-3 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center animate-pulse w-full">
              <div className="flex flex-col gap-2 text-left">
                <div className="md:text-4xl xs:text-2xl font-bold bg-slate-300 h-8 w-96 rounded-md"></div>
                <div className="flex flex-col gap-2  mt-2">
                  <div className="bg-slate-300 h-5 w-100 rounded-md"></div>
                  <div className="bg-slate-300 h-5 w-4/5 rounded-md"></div>
                  <div className="bg-slate-300 h-5 w-3/5 rounded-md"></div>
                  <div className="bg-slate-300 h-5 w-2/5 rounded-md"></div>
                </div>
                <h2 className="text-[#101518] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"></h2>
              </div>
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#dce8f3] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate"></span>
              </button>
            </div>
          </section>
          <section
            id="Experience"
            className="flex flex-col gap-4 dark:text-white text-[#101518] animate-pulse"
          >
            <div className="bg-slate-300 h-5 w-2/4 rounded-md"></div>
            <div className="flex gap-4 bg-slate-50 px-4 py-3 hover:shadow-xl dark:bg-slate-700 rounded-md h-96 w-100">
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
