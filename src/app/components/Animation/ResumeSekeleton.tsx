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
          <section className="flex flex-col gap-2 animate-pulse">
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5 bg-slate-300 h-5 w-1/5 rounded-md"></h2>
            <p className="text-[#101518] text-base font-normal leading-normal h-5 w-1/3 bg-slate-300 rounded-md"></p>
            <p className="text-[#101518] text-base font-normal leading-normal h-5 w-2/3 bg-slate-300 rounded-md"></p>
            <p className="text-[#101518] text-base font-normal leading-normal h-5 w-1/3 bg-slate-300 rounded-md"></p>
            <div className="flex flex-wrap justify-start mt-2 gap-2">
              <div className="flex flex-col items-center w-20 gap-2 cursor-pointer hover:text-2xl hover:text-red-600">
                <div className="rounded-full bg-slate-300 h-9 w-9">
                  {/* <GitHubIcon /> */}
                </div>
                <div className="text-sm font-normal leading-normal">GitHub</div>
              </div>
              <div className="flex flex-col items-center w-20 gap-2 cursor-pointer hover:text-2xl hover:text-red-600">
                <div className="rounded-full bg-slate-300 h-9 w-9">
                  {/* <LinkedIcon />/ */}
                </div>
                <div className="text-sm font-normal leading-normal">
                  LinkedIn
                </div>
              </div>
              <div className="flex flex-col items-center w-20 gap-2 cursor-pointer hover:text-2xl hover:text-red-600">
                <div className="rounded-full bg-slate-300 h-9 w-9">
                  {/* <GitLabIcon /> */}
                </div>
                <div className="text-sm font-normal leading-normal">GitLab</div>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4 animate-pulse">
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5">
              {t('Skills')}
            </h2>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] mb-1">
                {t('Languages')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-9 gap-2">
                {[1, 2, 3, 4]?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-slate-300 w-full"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] mb-1">
                {t('Framework')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-8 gap-2">
                {[1, 2, 3, 4, 5, 6]?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-slate-300 w-full"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] mb-1">
                {t('Tools')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-9 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map(
                  (item: any, index: number) => (
                    <div
                      key={index}
                      className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-slate-300 w-full"
                    ></div>
                  )
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
