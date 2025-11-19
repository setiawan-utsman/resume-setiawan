// ========================================
// RESUME DATA CONFIGURATION (ENGLISH)
// ========================================

export const DTRESUMEEN = {
  // ========================================
  // PERSONAL INFORMATION
  // ========================================
  name: "Yayuk Setiawan",
  title: "Frontend Developer",

  contact: {
    address: "JL. Kesehatan 04/011, Kel. Gedong, Kec. Pasar Rebo, East Jakarta",
    email: "setiawanjob41@gmail.com",
    phone: "081316192203",
    github: "https://github.com/setiawan-utsman?tab=repositories",
    linkedin: "https://linkedin.com/in/yayuk-setiawan-95841124a",
    gitlab: "https://gitlab.com/setiawan_41",
  },

  // Resume Links
  resume: {
    id: "https://github.com/setiawan-utsman/resume-setiawan/releases/download/resume-id/Resume_Id.pdf",
    en: "https://github.com/setiawan-utsman/resume-setiawan/releases/download/resume-en/Resume_EN.pdf",
  },

  // ========================================
  // PROFILE SUMMARY
  // ========================================
  profile:
    "Frontend Developer with experience in building applications using React, Next.js, React Native, and Angular. Skilled in creating responsive user interfaces, managing application state, and integrating RESTful APIs. Proficient in Tailwind CSS and Bootstrap, with experience in implementing Server-Side Rendering (SSR) and SEO optimization in Next.js to enhance performance and user experience.",

  // ========================================
  // EDUCATION
  // ========================================
  education: {
    university: "Universitas Indraprasta PGRI",
    degree: "Bachelor of Informatics Engineering",
    location: "Jakarta",
    year: "2014 – 2018",
    gpa: "3.3 / 4.0",
  },

  // ========================================
  // WORK EXPERIENCE
  // ========================================
  experience: {
    position: "Frontend Engineer",
    company: "PT. Ebdesk Teknologi",
    work: "Big Data Company",
    period: "2018 – 2025",
    responsibilities: [
      "Building new projects from scratch",
      "UI/UX design implementation",
      "RESTful API integration and services",
      "Cross-functional team collaboration",
      "SEO (Search Engine Optimization) implementation",
      "API proxy configuration",
      "Data parsing and mapping",
      "Development, maintenance, and bug fixing",
      "Data visualization and analytics",
      "State management (Redux, React Query, Zustand)",
    ],
  },

  // ========================================
  // PROJECTS
  // ========================================
  projects: [
    // Data Analysis Portal
    {
      name: "Data Analysis Portal",
      desc: "Interactive dashboard for visualizing environmental and urban infrastructure data with dynamic maps and user-based reporting features.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Motion Primitives",
        "Shadcn",
        "Axios",
        "React Hook",
      ],
      details: [
        "Tree Analysis: Distribution and health monitoring with barcode system",
        "Landfill (TPA) Analysis: Waste volume tracking and public reporting system",
        "Recharge Well Analysis: Water absorption well monitoring with interactive maps",
      ],
      type: "image",
      img: ["/static/img/portal-analisis.png"],
      textBtn: "View Project",
      typeUrl: "website",
    },

    // Brandlabs
    {
      name: "Brandlabs",
      tech: ["React", "ECharts", "Mapbox", "Bootstrap", "Axios", "SCSS"],
      details: [
        "Built analytical dashboard with interactive data visualization (ECharts and Mapbox)",
        "Integrated REST API with efficient and secure data flow",
        "Implemented dark/light mode to enhance UX",
        "Integrated Brandlabs AI Assistance for automatic insights",
        "Form validation using React Hook Form",
        "Implemented skeleton loaders for smooth loading experience",
        "Collaborated with design, backend, and data teams",
        "Regular maintenance, debugging, and bug fixing",
        "Deployment using CI/CD pipeline",
        "Organized modular and scalable React component structure",
        "Webpack configuration for build optimization",
      ],
      type: "carousel",
      img: [
        "/static/img/brandlabs.png",
        "/static/img/b1.jpg",
        "/static/img/b2.jpg",
      ],
      textBtn: "View Website",
      typeUrl: "website",
    },

    // Politica
    {
      name: "Politica",
      tech: ["Angular", "Highcharts", "Bootstrap", "HttpClient", "SCSS"],
      details: [
        "RESTful API integration for frontend-backend communication",
        "Form validation with Reactive Forms and FormGroup",
        "Interactive data visualization using Highcharts (bar, pie, and map charts)",
        "Bearer Token Authentication implementation",
        "Responsive design with Bootstrap",
        "Integrated ng-bootstrap Datepicker for date range filtering",
        "Implemented Dark/Light Theme switching",
      ],
      type: "carousel",
      img: [
        "/static/img/p1.jpg",
        "/static/img/p2.jpg",
        "/static/img/p3.jpg",
        "/static/img/p4.jpg",
        "/static/img/p5.jpg",
        "/static/img/p6.jpg",
      ],
      textBtn: "View Website",
      typeUrl: "website",
    },

    // PWPL (Puspitaloka.com)
    {
      name: "PWPL (Puspitaloka.com) – Freelance",
      tech: ["Angular", "Bootstrap", "HttpClient", "SCSS"],
      details: [
        "Built responsive header menu for various devices",
        "Implemented typing animation for interactive UI",
        "Developed admin panel for promotional content management",
        "Built property CMS for real estate listing management",
        "Implemented user account management with multi-role access",
      ],
      type: "video",
      img: "/static/img/pwpl.mp4",
      url: "https://puspitaloka.com/",
      textBtn: "View Website",
      typeUrl: "website",
    },

    // M-Resume
    {
      name: "M-Resume",
      desc: "Personal mobile portfolio application built with React Native featuring responsive design and API integration for dynamic data.",
      tech: ["React Native", "NativeWind", "Axios"],
      details: [
        "Built mobile portfolio application from scratch",
        "Converted Figma designs to responsive UI using NativeWind",
        "Integrated REST API for real-time data management",
        "Applied clean code principles and reusable components",
        "Scalable and maintainable application structure",
      ],
      type: "video",
      img: "/static/img/mobile.mp4",
      textBtn: "Download APK",
      url: "https://resume-setiawan.vercel.app/static/apk/app-release.apk",
      typeUrl: "apk",
    },

    // User Authentication API
    {
      name: "User Authentication API",
      desc: "Backend API project using FastAPI focused on implementing authentication, authorization, and user management systems with JWT token security.",
      tech: ["Python", "FastAPI", "JWT", "Pydantic"],
      details: [
        "Built authentication endpoints (login and registration)",
        "Implemented JWT token validation",
        "User ID verification system for data security",
        "Error handling with HTTPException",
        "Implemented activity logging for tracking",
        "Dependency management using FastAPI Depends",
      ],
      type: "code",
      img: "/static/img/backend-api.png",
      textBtn: "View Repository",
      url: "https://github.com/setiawan-utsman/user-auth-api",
      typeUrl: "github",
    },

    // Jobseeker App
    {
      name: "Jobseeker App",
      desc: "Web application that helps users find job vacancies based on categories and skills using Supabase as database and authentication service.",
      tech: ["Next.js", "Tailwind CSS", "Supabase", "React Hook Form", "Axios"],
      details: [
        "User authentication system using Supabase",
        "Full CRUD implementation for job vacancy data",
        "Filter system based on position, location, and job type",
        "Form validation with React Hook Form",
        "Responsive UI design using Tailwind CSS",
        "API integration for dynamic data",
      ],
      type: "carousel",
      img: [
        "/static/img/jobseeker1.jpg",
        "/static/img/jobseeker2.jpg",
        "/static/img/jobseeker3.jpg",
      ],
      url: "https://supabase-jobsekeer.vercel.app/",
      typeUrl: "website",
      textBtn: "Visit Website",
    },
  ],

  // ========================================
  // TECHNICAL SKILLS
  // ========================================
  technologies: {
    languages: ["JavaScript", "TypeScript", "HTML", "SCSS", "Python"],
    frameworks: [
      "React",
      "Angular",
      "Next.js",
      "React Native",
      "Redux",
      "React Hooks",
      "Tailwind CSS",
      "Bootstrap",
      "Motion Primitives",
      "Shadcn",
      "Zustand",
      "TanStack Query",
    ],
    dataVisualization: ["ECharts", "Highcharts", "Mapbox"],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "VSCode",
      "Postman",
      "Android Studio",
      "Axios",
      "Figma",
    ],
    other: [
      "Responsive Design",
      "Dark/Light Mode",
      "REST API Integration",
      "WebSocket",
      "SSE",
    ],
  },

  // ========================================
  // LANGUAGES
  // ========================================
  languages: [
    {
      language: "Indonesian",
      level: "Native",
    },
    {
      language: "English",
      level: "Basic",
    },
  ],
};

// ========================================
// RESUME DATA CONFIGURATION
// ========================================

export const DTRESUMEID = {
  // ========================================
  // PERSONAL INFORMATION
  // ========================================
  name: "Yayuk Setiawan",
  title: "Frontend Developer",
  resume: {
    id: "https://github.com/setiawan-utsman/resume-setiawan/releases/download/resume-id/Resume_Id.pdf",
    en: "https://github.com/setiawan-utsman/resume-setiawan/releases/download/resume-en/Resume_EN.pdf",
  },
  contact: {
    address:
      "JL. Kesehatan 04/011, Kel. Gedong, Kec. Pasar Rebo, Jakarta Timur",
    email: "setiawanjob41@gmail.com",
    phone: "081316192203",
    github: "https://github.com/setiawan-utsman?tab=repositories",
    linkedin: "https://www.linkedin.com/in/yayuk-setiawan-95841124a",
    gitlab: "https://gitlab.com/setiawan_41",
  },

  // ========================================
  // PROFILE SUMMARY
  // ========================================
  profile:
    "Frontend Developer dengan pengalaman membangun aplikasi menggunakan React, Next.js, React Native, dan Angular. Terbiasa membuat UI responsif, mengelola state aplikasi, serta mengintegrasikan RESTful API. Menguasai Tailwind CSS dan Bootstrap, serta familiar dengan SSR dan optimasi SEO di Next.js untuk meningkatkan performa dan pengalaman pengguna.",

  // ========================================
  // EDUCATION
  // ========================================
  education: {
    university: "Universitas Indraprasta PGRI",
    degree: "Sarjana Teknik Informatika",
    location: "Jakarta",
    year: "2014 – 2018",
    gpa: "3.3 / 4.0",
  },

  // ========================================
  // WORK EXPERIENCE
  // ========================================
  experience: {
    position: "Frontend Engineer",
    company: "PT. Ebdesk Teknologi",
    work: "Big Data Companies",
    period: "2018 – 2025",
    responsibilities: [
      "Membangun proyek baru dari awal",
      "Implementasi UI/UX design",
      "Mengintegrasikan layanan RESTful API",
      "Berkolaborasi dengan tim lintas fungsi",
      "Mengoptimalkan SEO (Search Engine Optimization)",
      "Konfigurasi API proxy",
      "Penguraian dan pemetaan data",
      "Pengembangan, pemeliharaan, dan perbaikan bug",
      "Visualisasi dan analisis data",
      "State management (Redux, React Query, Zustand)",
    ],
  },

  // ========================================
  // PROJECTS
  // ========================================
  projects: [
    // Portal Analisis Data
    {
      name: "Portal Analisis Data",
      desc: "Dashboard interaktif untuk memvisualisasikan data lingkungan dan infrastruktur kota dengan peta dinamis dan fitur pelaporan berbasis pengguna.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Motion Primitives",
        "Shadcn",
        "Axios",
        "React Hook",
      ],
      details: [
        "Analisis Pohon: Monitoring sebaran dan kesehatan pohon dengan sistem barcode",
        "Analisis TPA: Tracking volume sampah dan sistem pelaporan publik",
        "Analisis Sumur Resapan: Monitoring kondisi sumur resapan dengan peta interaktif",
      ],
      type: "image",
      img: ["/static/img/portal-analisis.png"],
      textBtn: "View Project",
      typeUrl: "website",
    },

    // Brandlabs
    {
      name: "Brandlabs",
      tech: ["React", "ECharts", "Mapbox", "Bootstrap", "Axios", "SCSS"],
      details: [
        "Membangun dashboard analitik dengan visualisasi data interaktif (ECharts dan Mapbox)",
        "Mengintegrasikan REST API dengan alur data yang efisien dan aman",
        "Implementasi dark mode dan light mode untuk meningkatkan UX",
        "Integrasi AI Assistance Brandlabs untuk insight otomatis",
        "Validasi form menggunakan React Hook Form",
        "Implementasi skeleton loader untuk pengalaman loading yang smooth",
        "Kolaborasi dengan tim desain, backend, dan data",
        "Maintenance, debugging, dan bug fixing",
        "Deployment menggunakan CI/CD pipeline",
        "Menyusun struktur komponen React yang modular dan scalable",
        "Konfigurasi Webpack untuk optimasi build",
      ],
      type: "carousel",
      img: [
        "/static/img/brandlabs.png",
        "/static/img/b1.jpg",
        "/static/img/b2.jpg",
      ],
      textBtn: "View Website",
      typeUrl: "website",
    },

    // Politica
    {
      name: "Politica",
      tech: ["Angular", "Highcharts", "Bootstrap", "HttpClient", "SCSS"],
      details: [
        "Integrasi RESTful API untuk komunikasi frontend-backend",
        "Validasi form dengan Reactive Forms dan FormGroup",
        "Visualisasi data interaktif menggunakan Highcharts (bar, pie, map)",
        "Implementasi Bearer Token Authentication",
        "Desain responsif dengan Bootstrap",
        "Integrasi ng-bootstrap Datepicker untuk filter rentang waktu",
        "Implementasi Dark/Light Theme",
      ],
      type: "carousel",
      img: [
        "/static/img/p1.jpg",
        "/static/img/p2.jpg",
        "/static/img/p3.jpg",
        "/static/img/p4.jpg",
        "/static/img/p5.jpg",
        "/static/img/p6.jpg",
      ],
      textBtn: "View Website",
      typeUrl: "website",
    },

    // PWPL (Puspitaloka.com)
    {
      name: "PWPL (Puspitaloka.com) – Freelance",
      tech: ["Angular", "Bootstrap", "HttpClient", "SCSS"],
      details: [
        "Membangun header menu responsif untuk berbagai perangkat",
        "Implementasi typing animation untuk UI yang interaktif",
        "Mengembangkan panel admin untuk pengelolaan konten promosi",
        "Membangun CMS properti untuk manajemen listing perumahan",
        "Implementasi user account management dengan multi-role access",
      ],
      type: "video",
      img: "/static/img/pwpl.mp4",
      url: "https://puspitaloka.com/",
      textBtn: "View Website",
      typeUrl: "website",
    },

    // M-Resume
    {
      name: "M-Resume",
      desc: "Aplikasi mobile portofolio pribadi yang dikembangkan menggunakan React Native dengan desain responsif dan integrasi API untuk data dinamis.",
      tech: ["React Native", "NativeWind", "Axios"],
      details: [
        "Membangun aplikasi portofolio mobile dari awal",
        "Konversi desain Figma ke UI responsif menggunakan NativeWind",
        "Integrasi REST API untuk pengelolaan data real-time",
        "Penerapan clean code dan komponen reusable",
        "Struktur aplikasi yang scalable dan maintainable",
      ],
      type: "video",
      img: "/static/img/mobile.mp4",
      textBtn: "Unduh APK",
      url: "https://resume-setiawan.vercel.app/static/apk/app-release.apk",
      typeUrl: "apk",
    },

    // User Authentication API
    {
      name: "User Authentication API",
      desc: "Proyek backend menggunakan FastAPI yang berfokus pada implementasi sistem autentikasi, otorisasi, dan manajemen pengguna dengan keamanan token JWT.",
      tech: ["Python", "FastAPI", "JWT", "Pydantic"],
      details: [
        "Membangun endpoint autentikasi (login dan registrasi)",
        "Implementasi validasi token JWT",
        "Sistem verifikasi ID pengguna untuk keamanan data",
        "Penanganan error dengan HTTPException",
        "Implementasi logging untuk tracking aktivitas",
        "Manajemen dependensi dengan FastAPI Depends",
      ],
      type: "code",
      img: "/static/img/backend-api.png",
      textBtn: "View Repository",
      url: "https://github.com/setiawan-utsman/user-auth-api",
      typeUrl: "github",
    },

    // Jobseeker App
    {
      name: "Jobseeker App",
      desc: "Aplikasi web yang membantu pengguna menemukan lowongan pekerjaan berdasarkan kategori dan keahlian menggunakan Supabase sebagai database dan layanan autentikasi.",
      tech: ["Next.js", "Tailwind CSS", "Supabase", "React Hook Form", "Axios"],
      details: [
        "Sistem autentikasi pengguna menggunakan Supabase",
        "Implementasi full CRUD untuk data lowongan kerja",
        "Sistem filter berdasarkan posisi, lokasi, dan tipe kerja",
        "Validasi form dengan React Hook Form",
        "Desain UI responsif menggunakan Tailwind CSS",
        "Integrasi API untuk data dinamis",
      ],
      type: "carousel",
      img: [
        "/static/img/jobseeker1.jpg",
        "/static/img/jobseeker2.jpg",
        "/static/img/jobseeker3.jpg",
      ],
      url: "https://supabase-jobsekeer.vercel.app/",
      typeUrl: "website",
      textBtn: "Visit Website",
    },
  ],

  // ========================================
  // TECHNICAL SKILLS
  // ========================================
  technologies: {
    languages: ["JavaScript", "TypeScript", "HTML", "SCSS", "Python"],
    frameworks: [
      "React",
      "Angular",
      "Next.js",
      "React Native",
      "Redux",
      "React Hooks",
      "Tailwind CSS",
      "Bootstrap",
      "Motion Primitives",
      "Shadcn",
      "Zustand",
      "TanStack Query",
    ],
    dataVisualization: ["ECharts", "Highcharts", "Mapbox"],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "VSCode",
      "Postman",
      "Android Studio",
      "Axios",
      "Figma",
    ],
    other: [
      "Responsive Design",
      "Dark/Light Mode",
      "REST API Integration",
      "WebSocket",
      "SSE",
    ],
  },

  // ========================================
  // LANGUAGES
  // ========================================
  languages: [
    {
      language: "Bahasa Indonesia",
      level: "Bahasa Asli",
    },
    {
      language: "Bahasa Inggris",
      level: "Basic",
    },
  ],
};

export const PORTAL = {
  portal_page: {
    title: "Selamat Datang di Dashboard Digital Saya",
    description:
      "Jelajahi berbagai karya, proyek, dan analisis yang saya kembangkan. Dashboard ini menjadi pusat untuk mengenal perjalanan saya sebagai developer — mulai dari portofolio, aplikasi yang saya bangun, hingga analisis data menggunakan Mapbox dan Chart.",
  },
  portal_cards: [
    {
      key: "explore_map",
      title: "Interactive Map Experience",
      path: "/map",
      image: "/static/img/explorer/map.png",
      description:
        "Eksplorasi data berbasis peta dengan integrasi Mapbox—menunjukkan bagaimana saya menyajikan informasi lokasi secara interaktif dan mudah dijelajahi.",
    },
    {
      key: "explore_chart",
      title: "Data Visualization Insights",
      path: "/chart",
      image: "/static/img/analytic/analytic1.jpg",
      description:
        "Menampilkan kemampuan saya dalam mengubah data kompleks menjadi visualisasi yang sederhana dan informatif menggunakan berbagai chart interaktif.",
    },
    {
      key: "web_projects",
      title: "Web Applications Showcase",
      path: "/project",
      image: "/static/img/explorer/project.jpg",
      description:
        "Kumpulan website dan aplikasi yang pernah saya buat, lengkap dengan fitur utama dan nilai yang dihasilkan untuk pengguna maupun perusahaan.",
    },
  ],
};

export const EXPLORER = {
  about: {
    title: "Analisis Data Geospasial dengan Mapbox",
    desc: "Saya memiliki pengalaman dalam mengintegrasikan dan menampilkan data spasial menggunakan Mapbox, terutama untuk analisis lokasi, wilayah, dan distribusi data. Melalui peta interaktif ini, saya dapat memvisualisasikan berbagai informasi seperti persebaran topik, aktivitas pengguna, hingga tren regional yang diambil dari sumber data dinamis seperti media sosial atau API eksternal.",
  },
  analisis_map: {
    title: "Analisis Data Geospasial",
    description:
      "Menggunakan Mapbox untuk menampilkan data spasial seperti persebaran topik, aktivitas pengguna, dan tren regional.",
    data: [
      {
        title: "Map Point",
        image: "/static/img/explorer/map-point.png",
        description:
          "Menampilkan titik lokasi pada peta untuk memvisualisasikan data seperti sumber berita atau aktivitas pengguna. Membantu memahami sebaran dan pola data secara geografis.",
      },
      {
        title: "Map Polygon",
        image: "/static/img/explorer/map-polygon.png",
        description:
          "Menandai area atau wilayah dengan polygon berdasarkan data tertentu. Memberikan gambaran visual perbandingan antarwilayah secara jelas.",
      },
      {
        title: "Map Cluster",
        image: "/static/img/explorer/map-cluster.png",
        description:
          "Mengelompokkan banyak titik data menjadi cluster agar peta lebih rapi dan interaktif. Memudahkan analisis area dengan kepadatan data tinggi.",
      },
    ],
  },
};

export const PROJECT = {
  title: "Portfolio Proyek",
  description:
    "Kumpulan proyek yang telah saya kerjakan, mencakup aplikasi web, mobile, dan backend API dengan berbagai teknologi modern",
  contact:
    "https://wa.me/6281316192203?text=Halo%20Setiawan,%20Saya%20ingin%20menghubungi%20Anda",
  totalProjects: 7,
  items: [
    {
      id: 1,
      title: "Portal Analisis Data",
      description:
        "Dashboard interaktif untuk memvisualisasikan data lingkungan dan infrastruktur kota dengan peta dinamis dan fitur pelaporan berbasis pengguna",
      category: "Web Application",
      type: "Personal Project",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Motion Primitives",
        "Shadcn",
        "Axios",
        "React Hook",
      ],
      features: [
        "Analisis Pohon dengan sistem barcode",
        "Analisis TPA untuk tracking volume sampah",
        "Analisis Sumur Resapan dengan peta interaktif",
      ],
    },
    {
      id: 2,
      title: "Brandlabs",
      description:
        "Dashboard analitik dengan visualisasi data interaktif menggunakan peta dan grafik untuk analisis big data",
      category: "Web Application",
      type: "Company Project",
      technologies: [
        "React",
        "ECharts",
        "Mapbox",
        "Bootstrap",
        "Axios",
        "SCSS",
      ],
      features: [
        "Visualisasi peta dengan Mapbox (point, cluster, polygon)",
        "Grafik interaktif dengan ECharts",
        "Dark/Light mode",
        "AI Assistance integration",
        "CI/CD deployment",
      ],
    },
    {
      id: 3,
      title: "Politica",
      description:
        "Aplikasi web untuk analisis data politik dengan visualisasi grafik dan peta interaktif",
      category: "Web Application",
      type: "Company Project",
      technologies: [
        "Angular",
        "Highcharts",
        "Bootstrap",
        "HttpClient",
        "SCSS",
      ],
      features: [
        "Visualisasi data dengan Highcharts",
        "Bearer Token Authentication",
        "Responsive design",
        "Date range filtering",
        "Dark/Light theme",
      ],
    },
    {
      id: 4,
      title: "PWPL (Puspitaloka.com)",
      description:
        "Website real estate dengan CMS untuk manajemen properti dan konten marketing",
      category: "Web Application",
      type: "Freelance",
      technologies: ["Angular", "Bootstrap", "HttpClient", "SCSS"],
      features: [
        "Responsive header menu",
        "Typing animation",
        "Admin panel untuk konten",
        "Property CMS",
        "Multi-role user management",
      ],
      url: "https://puspitaloka.com",
    },
    {
      id: 5,
      title: "M-Resume",
      description:
        "Aplikasi mobile portofolio pribadi dengan desain responsif dan integrasi API untuk data dinamis",
      category: "Mobile Application",
      type: "Personal Project",
      technologies: ["React Native", "NativeWind", "Axios"],
      features: [
        "Konversi desain Figma ke UI",
        "REST API integration",
        "Clean code architecture",
        "Reusable components",
      ],
      url: "https://resume-setiawan.vercel.app",
    },
    {
      id: 6,
      title: "User Authentication API",
      description:
        "Backend API untuk sistem autentikasi dan otorisasi pengguna dengan keamanan JWT token",
      category: "Backend API",
      type: "Learning Project",
      technologies: ["Python", "FastAPI", "JWT", "Pydantic"],
      features: [
        "Login & registration endpoints",
        "JWT token validation",
        "User ID verification",
        "Error handling dengan HTTPException",
        "Activity logging",
      ],
    },
    {
      id: 7,
      title: "Jobseeker App",
      description:
        "Platform pencarian lowongan kerja dengan fitur filtering dan sistem autentikasi menggunakan Supabase",
      category: "Web Application",
      type: "Personal Project",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "React Hook Form",
        "Axios",
      ],
      features: [
        "User authentication dengan Supabase",
        "CRUD lowongan kerja",
        "Filter posisi, lokasi, dan tipe kerja",
        "Form validation",
        "Responsive design",
      ],
      url: "https://supabase-jobsekeer.vercel.app",
    },
  ],
  statistics: {
    webApplications: 5,
    mobileApplications: 1,
    backendAPIs: 1,
    totalTechnologies: 20,
    mostUsedTech: ["React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"],
  },
};
