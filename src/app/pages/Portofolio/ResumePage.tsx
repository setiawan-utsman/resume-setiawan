import React, { useEffect, useState } from "react";
import LogoIcon from "../../assets/icons/LogoIcon";
import { DTRESUMEEN, DTRESUMEID } from "../../assets/data/resume";
import GitHubIcon from "../../assets/icons/SocialMedia/GitHubIcon";
import LinkedIcon from "../../assets/icons/SocialMedia/LinkedIcon";
import GitLabIcon from "../../assets/icons/SocialMedia/GitLabIcon";
import ModalDetail from "../../components/Modal/ModalDetail";
import ResumeSekeleton from "../../components/Animation/ResumeSekeleton";
import SettingIcon from "../../assets/icons/SettingIcon";
import SunIcon from "../../assets/icons/SunIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import LaguangeIcon from "../../assets/icons/LaguangeIcon";
import { useTranslation } from "react-i18next";
import ImgVideo from "../../components/ImgVideo";

export interface IDatas {
  name: string;
  title: string;
  contact: Contact;
  profile: string;
  education: Education;
  experience: Experience[];
  projects: Project[];
  technologies: Technologies;
  languages: Language[];
}

export interface Contact {
  address: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  gitlab?: string;
}

export interface Education {
  university: string;
  degree: string;
  location: string;
  year: string;
  gpa: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  tech: string[];
  details: string[];
  type: string;
  img?: any;
  video?: string;
}

export interface Technologies {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

export interface Language {
  language: string;
  level: string;
}

export default function ResumePage() {
  const { t, i18n } = useTranslation();
  const [datas, setDatas] = useState<IDatas>(DTRESUMEID);
  const [openModal, setOpenModal] = useState<any>({ isOpen: false });
  const [loading, setLoading] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("id");
  const [thema, setThema] = useState<string>("light");
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("About");
  const MENU = [
    "About",
    "Contact",
    "Skills",
    "Experience",
    "Projects",
    "Education",
  ];

  // const handleOpenModal = ({ data, display }: any) => {
  //   setOpenModal({ isOpen: true, layout: display, data: data });
  // };

  const handleCloseModal = () => {
    setOpenModal({ isOpen: false });
  };

  const handleScroll = (id: any) => {
    const element = document.getElementById(id);
    const headerOffset = 60; // Atur sesuai tinggi header kamu (misal: 80px)
    if (element) {
      setActiveMenu(id);
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleThema = () => {
    setIsSetting(false);
    if (thema === "light") setThema("dark");
    else setThema("light");
  };

  const handleLang = () => {
    setIsSetting(false);
    if (lang === "en") setLang("id");
    else setLang("en");
  };

  const themaDOM = () => {
    const html = document.documentElement;
    html.setAttribute("data-mode", thema);
  };

  const openNewTab = (url: any) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    themaDOM();
  }, [thema]);

  useEffect(() => {
    if (lang === "en") setDatas(DTRESUMEEN);
    else setDatas(DTRESUMEID);
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

    useEffect(() => {
      const handleScroll = () => {
        const top = window.scrollY < 50;
        setIsScrolled(!top);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden size-full md:size-auto bg-white dark:bg-slate-800 dark:text-white">
        <header
          className={`w-full fixed z-10 top-0 left-0 right-0 border-b border-solid border-b-[#eaedf1] bg-white dark:bg-slate-900 dark:border-b-[#2b2b2c]
          ${
            isScrolled
              ? "bg-slate-50 dark:bg-slate-900 opacity-95 shadow-sm ease-linear duration-300"
              : ""
          }`}
        >
          <div className="max-w-[960px] w-full  2xl:container container md:container sm:container mx-auto flex items-center justify-between whitespace-nowrap md:px-0 xs:px-5 py-3 relative">
            <div className="flex items-center gap-2 hover:cursor-pointer hover:text-cyan-600">
              <div className=" rounded-lg p-0.5 border-1 border-cyan-400 bg-cyan-50 text-cyan-600 skew-y-3 dark:bg-cyan-400 dark:text-cyan-900">
                <LogoIcon />
              </div>
              <div className="text-xl font-semibold font-serif">Portofolio</div>
            </div>
            <div className="flex flex-1 justify-end gap-9">
              <div className="flex items-center gap-9 md:flex xs:hidden">
                {MENU.map((item) => (
                  <div
                    key={item}
                    className={`hover:cursor-pointer hover:text-cyan-600 capitalize active:text-cyan-600
                      ${
                        activeMenu === item
                          ? "text-cyan-600 font-semibold duration-150 ease-linear"
                          : ""
                      }`}
                    // className={`hover:cursor-pointer hover:text-cyan-600 capitalize active:text-cyan-600 ${activeMenu === item ? "text-cyan-600" : ""}`}
                    onClick={() => handleScroll(item)}
                  >
                    {t(item)}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-2 bg-[#eaedf1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Resume</span>
                </button>
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setIsSetting(!isSetting)}
                >
                  <button className=" hover:cursor-pointer text-cyan-600 hover:text-cyan-700 text-sm font-bold leading-normal tracking-[0.015em] transition-transform duration-500 hover:rotate-180">
                    <SettingIcon />
                  </button>
                  <div className="flex items-center font-medium text-sm gap-1">
                    <div className="uppercase">{lang}</div>
                    {thema === "light" ? (
                      <div className="text-yellow-500">
                        <SunIcon className="size-5" />
                      </div>
                    ) : (
                      <MoonIcon className="size-5" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute animate-appear z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-5 md:mr-0 xs:mr-5"
              style={{ display: isSetting ? "block" : "none" }}
            >
              <div
                className="py-1 px-2 flex items-center cursor-pointer hover:bg-slate-50 dark:bg-slate-600/30 uppercase dark:hover:bg-slate-600 dark:text-white"
                onClick={handleLang}
              >
                <LaguangeIcon />
                <div className="ms-2">{lang === "id" ? "EN" : "ID"}</div>
              </div>
              <div
                className="py-1 px-2 flex items-center cursor-pointer hover:bg-slate-50 dark:bg-slate-600/30 capitalize dark:hover:bg-slate-600 dark:text-white"
                onClick={handleThema}
              >
                {thema === "light" ? (
                  <MoonIcon />
                ) : (
                  <div className="text-yellow-500">
                    <SunIcon />
                  </div>
                )}
                <div className="ms-2">
                  {thema === "light" ? "Dark" : "Light"}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* ---- Content ---- */}
        {loading ? (
          <ResumeSekeleton />
        ) : (
          <div className="container mx-auto w-full lg:max-w-[1024px] md:max-w-[720px] xs:max-w-[385px] mb-5">
            <div className="flex flex-col">
              <section
                id="About"
                className="flex xs:flex-col md:flex-row md:pt-[8rem] md:gap-6 xs:gap-6 xs:pt-[5rem] items-center"
              >
                <div className="bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-600 rounded-lg shadow-lg w-full md:w-5/5 h-72 transform duration-500 hover:md:translate-x-1 hover:md:-translate-y-5 hover:xs:translate-x-6 hover:xs:-translate-y-12 pointer-events-none">
                  <img
                    className="rounded-lg shadow-lg transform duration-500 hover:-translate-x-10 hover:translate-y-10 pointer-events-auto w-full h-full object-cover"
                    src="\static\img\profile.jpg"
                  />
                </div>

                <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center text-[#101518] dark:text-white">
                  <div className="flex flex-col gap-2 text-left">
                    <div className="relative md:text-4xl xs:text-2xl font-bold animate-typing overflow-hidden whitespace-nowrap border-r-white">
                      {t("hello")} {datas.name}
                    </div>
                    <h2 className="text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal animate-appear">
                      {datas.profile}
                    </h2>
                  </div>
                  <button
                    className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#dce8f3] dark:bg-slate-700 dark:text-white text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] w-[max-content]
                   dark:hover:bg-slate-600 hover:bg-slate-300 transition duration-300 ease-in-out"
                    onClick={() => handleScroll("Projects")}
                  >
                    <span className="truncate">{t("View Projects")}</span>
                  </button>
                </div>
              </section>
              <section
                id="Contact"
                className="flex flex-col gap-2 animate-appear text-[#101518] dark:text-white"
              >
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                  {t("Contact Information")}
                </h2>
                <p className="text-base font-normal leading-normal">
                  {datas.contact.address}
                </p>
                <p className="text-base font-normal leading-normal">
                  {datas.contact.email}
                </p>
                <p className="text-base font-normal leading-normal">
                  {datas.contact.phone}
                </p>
                <div className="flex flex-wrap justify-start mt-2 gap-2">
                  <div
                    className="flex flex-col items-center w-20 gap-2 cursor-pointer hover:text-2xl hover:text-red-600"
                    onClick={() => openNewTab(datas.contact.github)}
                  >
                    <div className="transition-transform rounded-full bg-[#eaedf1] p-2.5 hover:skew-y-6 hover:bg-red-50 hover:ease-linear dark:bg-slate-700">
                      <GitHubIcon />
                    </div>
                    <div className="text-sm font-normal leading-normal">
                      GitHub
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center w-20 gap-2 cursor-pointer hover:text-2xl hover:text-red-600"
                    onClick={() => openNewTab(datas.contact.linkedin)}
                  >
                    <div className="transition-transform rounded-full bg-[#eaedf1] p-2.5 hover:skew-y-6 hover:bg-red-50 hover:ease-linear dark:bg-slate-700">
                      <LinkedIcon />
                    </div>
                    <div className="text-sm font-normal leading-normal">
                      LinkedIn
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center w-20 gap-2 cursor-pointer hover:text-2xl hover:text-red-600"
                    onClick={() => openNewTab(datas.contact.gitlab)}
                  >
                    <div className="transition-transform rounded-full bg-[#eaedf1] p-2.5 hover:skew-y-6 hover:bg-red-50 hover:ease-linear dark:bg-slate-700">
                      <GitLabIcon />
                    </div>
                    <div className="text-sm font-normal leading-normal">
                      GitLab
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="Skills"
                className="flex flex-col gap-4 animate-appear dark:text-white text-[#101518]"
              >
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5">
                  {t("Skills")}
                </h2>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] mb-1">
                    {t("Languages")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-9 gap-2">
                    {datas?.technologies?.languages?.map(
                      (item: any, index: number) => (
                        <div
                          key={index}
                          className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#eaedf1] pl-4 pr-4 dark:bg-slate-700"
                        >
                          <p className="text-sm font-medium leading-normal">
                            {item}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-3 dark:text-white text-[#101518]">
                  <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] mb-1">
                    {t("Framework")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-8 gap-2">
                    {datas?.technologies?.frameworks?.map(
                      (item: any, index: number) => (
                        <div
                          key={index}
                          className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#eaedf1] pl-4 pr-4 dark:bg-slate-700"
                        >
                          <p className="text-sm font-medium leading-3">
                            {item}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-3 dark:text-white text-[#0d151c]">
                  <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] mb-1">
                    {t("Tools")}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-9 gap-2">
                    {datas?.technologies?.tools?.map(
                      (item: any, index: number) => (
                        <div
                          key={index}
                          className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#eaedf1] pl-4 pr-4 dark:bg-slate-700"
                        >
                          <p className="text-sm font-medium leading-3">
                            {item}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </section>
              <section
                id="Experience"
                className="flex flex-col gap-4 animate-appear dark:text-white text-[#101518]"
              >
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5">
                  {t("Experience")}
                </h2>
                <div className="flex gap-4 bg-slate-50 px-4 py-3 hover:shadow-xl dark:bg-slate-700 rounded-md">
                  <div className="flex flex-1 flex-col justify-center gap-3">
                    <div className="flex flex-1 flex-col justify-center">
                      <p className="text-base font-medium leading-normal">
                        Frontend Engineer {t("at")} PT. Indonesia Indicator
                      </p>
                      <p className="text-[#49749c] text-sm font-normal leading-normal dark:text-[#83baed]">
                        Jan 2018 – Present
                      </p>
                    </div>

                    <ul className="list-disc ml-5">
                      {datas?.experience?.map((item: any, index: number) => (
                        <React.Fragment key={index}>
                          {item?.responsibilities?.map(
                            (item: any, index: number) => (
                              <li
                                className="text-[#49749c] text-sm font-normal leading-normal dark:text-[#83baed]"
                                key={index}
                              >
                                {item}
                              </li>
                            )
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
              <section
                id="Projects"
                className="flex flex-col gap-4 animate-appear dark:text-white text-[#0d151c]"
              >
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5">
                  {t("Projects")}
                </h2>
                <div className="grid md:grid-cols-3 gap-4 xs:grid-cols-1">
                  {datas?.projects?.map((item: any, index: number) => (
                    <React.Fragment key={index}>
                      <div className="md:col-span-2 xs:col-span-1 px-5 py-0">
                        <div className="flex flex-[2_2_0px] flex-col gap-4">
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                              <p className="text-[#0d151c] text-base font-bold leading-tight dark:text-white">
                                {item?.name}
                              </p>
                              <p className="text-[#49749c] text-sm font-normal leading-normal dark:text-[#83baed]">
                                {t("Tech Stack")}:
                                {item?.tech?.map(
                                  (item: any, idx: number, arr: any) => (
                                    <span key={idx}>
                                      {item}
                                      {idx < arr.length - 1 && ","}
                                    </span>
                                  )
                                )}
                              </p>
                            </div>
                            <ul className="list-disc ml-5">
                              {item?.details?.map(
                                (item: any, index: number) => (
                                  <li
                                    className="text-[#49749c] text-sm font-normal leading-normal dark:text-[#83baed]"
                                    key={index}
                                  >
                                    {item}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7edf4] text-[#0d151c] text-sm font-medium leading-normal w-fit dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600
                          hover:bg-[#83baed] hover:text-white animate hover:ease-in-out hover:duration-300 hover:shadow-md"
                            onClick={() => openNewTab(item?.url)}
                          >
                            <span className="truncate">
                              {t("View Website")}
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="w-full aspect-video bg-cover rounded-xl flex-1 h-full relative">
                        <ImgVideo type={item?.type} image={item?.img} />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>
              <section
                id="Education"
                className="flex flex-col gap-4 animate-appear dark:text-white text-[#0d151c]"
              >
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5">
                  {t("Education")}
                </h2>
                <div className="flex gap-4 bg-slate-50 px-4 py-3 dark:bg-slate-700 rounded-md">
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-base font-medium leading-normal">
                      {datas?.education?.university}, {datas?.education?.degree}
                      {/* University Indraprasta PGRI, Bachelor’s Degree in Computer
                      Engineering */}
                    </p>
                    <p className="text-[#49749c] text-sm font-normal leading-normal dark:text-[#83baed]">
                      GPA: {datas?.education?.gpa}
                    </p>
                    <p className="text-[#49749c] text-sm font-normal leading-normal dark:text-[#83baed]">
                      {datas?.education?.year}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
        {/* <div className="px-40 flex flex-1 justify-center py-5"> */}

        <footer className="flex justify-center">
          <div className=" max-w-[960px] mx-auto px-5 py-10">
            <p className="text-[#49749c] text-base font-normal leading-normal">
              © 2025 Yayuk Setiawan. All rights reserved.
            </p>
          </div>
        </footer>
        {/* </div> */}
        {/* ---- End Content ---- */}
      </div>

      {/* ---- Modal Details */}
      {/* <ModalDetail
        isOpen={openModal?.isOpen}
        onClose={handleCloseModal}
        data={openModal?.data}
        layout={openModal?.layout}
      /> */}
      {/* --- End Modal Details */}
    </>
  );
}
