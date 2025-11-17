import React from 'react'

export default function ProjectPage() {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 mx-auto">
      <section className="py-10 md:py-20">
        <div className="flex flex-col gap-6 px-4 text-center items-center">
          <h1 className="text-[#111718] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
            Yayuk Setiawan - <span className='text-cyan-500'>Frontend Developer</span>
          </h1>
          <h2 className="text-[#618389] dark:text-gray-400 text-base font-normal leading-normal md:text-lg max-w-2xl">
            A creative product designer specializing in building beautiful and
            intuitive user experiences for web and mobile applications.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <a
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#111718] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-colors"
              href="#projects"
            >
              <span className="truncate">View My Work</span>
            </a>
            <a
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gray-200 dark:bg-gray-800 text-[#111718] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              href="#contact"
            >
              <span className="truncate">Kontak Saya</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
