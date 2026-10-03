export const personalInfo = {
  name: "Mohamed AbdEl Hady",
  shortName: "Mohamed A.",
  role: "Front-End Developer",
  heroHeadline: "Crafting fast, responsive, and user-centered web applications with modern frontend engineering.",
  heroSubtext: "Frontend Developer specializing in React and modern JavaScript. I bridge the gap between design and robust code to build clean, accessible, and high-performance web experiences that feel effortless to use.",
  availability: "Available for Frontend Developer Roles & Select Projects",
  primaryCta: "View Projects",
  secondaryCta: "Download CV",
  cvUrl: "/Mohamed_Abdel_Hady_CV.pdf",
  location: "Alexandria, Egypt • Open to Remote",
  email: "mhady8736@gmail.com",
  phone: "+20 114 536 7954",
  whatsapp: "https://wa.me/201145367954",
  formspreeEndpoint: "https://formspree.io/f/xppznbdb",
  github: "https://github.com/mhady8736",
  linkedin: "https://www.linkedin.com/in/mohamed-abdel-hady-8164a12a2",
  copyrightYear: new Date().getFullYear(),
};

export const aboutData = {
  headline: "Crafting modern web interfaces with clean code, responsive design, and intuitive user experiences.",
  paragraphs: [
    "I am a Front-End Developer with hands-on experience building responsive, user-friendly web applications using HTML, CSS, JavaScript, and React. With a deep foundation in Software Engineering from Borg Al Arab Technological University (maintaining a 3.80 / 4.00 GPA), I focus on the structural, visual, and architectural quality of web software.",
    "Trained through the competitive Digital Egypt Pioneers Initiative (DEPI) and rigorous university practical projects, I have developed e-commerce sites, interactive web applications, and component-driven interfaces. I actively apply modern frontend practices, consume REST APIs, and implement solid version control hygiene with Git and GitHub.",
    "Driven by continuous learning and software craftsmanship, I focus on building accessible, high-performance interfaces, writing clean modular code, and translating UI/UX designs into fluid digital products."
  ],
  metadataBlocks: [
    { label: "Education", value: "B.Sc. Software Engineering (GPA: 3.80 / 4.00)" },
    { label: "University", value: "Borg Al Arab Technological University, Egypt" },
    { label: "Current Role", value: "DEPI Front-End Developer Intern" },
    { label: "Core Focus", value: "React • JavaScript • REST APIs • UI/UX Design" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Front-End Development",
      badge: "Core Stack",
      description: "Core technologies used to build responsive, accessible, and fast web applications.",
      skills: [
        {
          name: "React.js",
          subtitle: "Component-Based UI",
          details: "Functional components, custom hooks, reactive state management, props drilling mitigation, and modular frontend architectures."
        },
        {
          name: "JavaScript",
          subtitle: "ES6+ Logic & DOM Manipulation",
          details: "Modern syntax, Arrow functions, Async/Await, Promises, array transformations, Event Listeners, and direct DOM manipulation."
        },
        {
          name: "HTML5 & CSS3",
          subtitle: "Semantic Structure & Modern Styling",
          details: "Semantic HTML landmarks, CSS Grid, Flexbox, media queries, Custom Properties (variables), and cross-browser styling."
        },
        {
          name: "REST APIs",
          subtitle: "Asynchronous Data Integration",
          details: "Fetching remote data streams, handling loading & error boundaries, JSON payloads, and dynamic interface rendering."
        },
        {
          name: "UI/UX & Responsive Design",
          subtitle: "User-Centered Interfaces",
          details: "Translating wireframes into responsive interfaces with intuitive navigation, fluid viewports, and clean visual hierarchy."
        },
        {
          name: "Web Accessibility & Compatibility",
          subtitle: "Cross-Browser & a11y Standards",
          details: "Building accessible web experiences adhering to WCAG standards, ARIA attributes, and seamless cross-browser testing."
        }
      ]
    },
    {
      id: "programming",
      title: "Programming & Foundations",
      badge: "Engineering Core",
      description: "Computer science fundamentals, object-oriented concepts, and algorithmic problem solving.",
      skills: [
        {
          name: "C & C++",
          subtitle: "Structured & Low-Level Foundations",
          details: "Memory awareness, pointers, structural control flows, data structures, and algorithmic complexity."
        },
        {
          name: "Java",
          subtitle: "Object-Oriented Programming (OOP)",
          details: "Encapsulation, inheritance, polymorphism, abstraction, interface design, and clean OOP principles."
        },
        {
          name: "Python",
          subtitle: "Scripting & Logical Problem Solving",
          details: "Rapid scripting, data structures, control logic, automation, and algorithmic challenges."
        },
        {
          name: "Problem Solving",
          subtitle: "Algorithmic Thinking",
          details: "Systematic decomposition of complex problems, edge-case analysis, and scalable solution implementation."
        }
      ]
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      badge: "Workflow & Data",
      description: "Development environment, version control workflows, and database tooling.",
      skills: [
        {
          name: "Git",
          subtitle: "Distributed Version Control",
          details: "Branching strategies, atomic commits, merge conflict resolution, detached HEAD management, and stash workflows."
        },
        {
          name: "GitHub",
          subtitle: "Collaborative Engineering",
          details: "Pull request reviews, remote repository hosting, issue management, project boards, and Git collaboration."
        },
        {
          name: "MySQL",
          subtitle: "Relational Database Management",
          details: "Database schema design, relational modeling, SQL queries (SELECT, JOIN, UPDATE, DELETE), and data integrity."
        },
        {
          name: "Visual Studio Code",
          subtitle: "Primary Developer Environment",
          details: "Modern extension ecosystem, terminal integration, debugging, formatters (Prettier/ESLint), and productivity shortcuts."
        }
      ]
    },
    {
      id: "softskills",
      title: "Professional & Soft Skills",
      badge: "Team & Communication",
      description: "Interpersonal, leadership, and collaboration capabilities demonstrated through structured team engineering.",
      skills: [
        {
          name: "Technical Communication",
          subtitle: "Presentations & Clear Explanations",
          details: "Communicating technical frontend concepts with clarity, documenting component structures, and presenting project ideas effectively."
        },
        {
          name: "Teamwork & Collaboration",
          subtitle: "Structured Group Engineering",
          details: "Collaborating with peers on practical team projects in the DEPI initiative and academic group deliverables."
        },
        {
          name: "Time Management & Adaptability",
          subtitle: "Balancing Academics & Practical Projects",
          details: "Successfully balancing university engineering coursework (3.80 GPA) with DEPI internship deliverables and hands-on projects."
        }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "food-rescue",
    title: "Food Rescue — Surplus Food Redistribution Platform",
    category: "React.js / Web App / Food Rescue",
    shortDescription: "A community-focused web platform designed to combat food waste by connecting donors, local volunteers, and relief charities to redistribute surplus meals efficiently in real-time.",
    image: "/projects/food-rescue.png",
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Responsive UI", "Material Symbols", "Git"],
    githubUrl: "https://github.com/mhady8736/Food-Rescue",
    liveDemoUrl: "https://food-rescue-five-self.vercel.app/",
    featured: true,
    caseStudy: {
      tagline: "Connecting food surplus with community hunger through fast, accessible digital coordination",
      overview: "Food Rescue (Loom & Larder / HarvestLink) is an impactful community web application designed to reduce food waste and support food-insecure families. The platform enables local food suppliers, bakeries, and restaurants to post surplus food batches, allowing volunteers and charity shelters to coordinate pickups and distribution before good food goes to waste.",
      problem: "Every day, tons of quality prepared meals and fresh produce are discarded because donors lack direct, low-friction communication channels to notify local volunteers and charities in their immediate vicinity.",
      approach: "Built a responsive, mobile-first React application with fluid typography (Cairo & Lexend), clear visual status tags, and localized bilingual accessibility. Optimized for quick interactions so donors can list surplus meals in seconds and volunteers can instantly claim pickups.",
      keyFeatures: [
        "Surplus listing feed featuring meal details, expiration timers, and quantity badges",
        "Interactive claim status workflow for volunteers and community distribution centers",
        "Bilingual layout support (English & Arabic) with accessible typographic hierarchy",
        "Mobile-first responsive architecture tailored for rapid on-site logistics"
      ],
      architecturalHighlights: [
        "Modular React component hierarchy separating stateful data flows from presentational UI",
        "Tailwind CSS utility styling ensuring minimal bundle size and rapid render speed",
        "Accessible touch targets and high-contrast color scheme for on-the-go outdoor usage"
      ]
    }
  },
  {
    id: "positivus",
    title: "Positivus — Digital Marketing Agency Landing Page",
    category: "HTML5 / CSS3 / JavaScript / Marketing",
    shortDescription: "A pixel-perfect, fully responsive digital marketing agency website featuring modern design systems, interactive service showcases, case study spotlights, and lead-capture consultation forms.",
    image: "/projects/positivus.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox & Grid", "FontAwesome", "UI/UX Design"],
    githubUrl: "https://github.com/mhady8736/Positivus",
    liveDemoUrl: "https://mhady8736.github.io/Positivus/",
    featured: true,
    caseStudy: {
      tagline: "Engineering a high-conversion, responsive digital agency web interface from UI design specifications",
      overview: "Positivus is a modern digital agency web experience built to showcase creative services (SEO, Pay-Per-Click advertising, Social Media Marketing, and Content Creation). The platform is engineered to turn casual visitors into prospective enterprise clients through clear value proposition displays, trust badges, and interactive consultation scheduling.",
      problem: "Commercial agency websites frequently suffer from slow load times caused by excessive third-party scripts, lack of visual structure, and broken layouts across mobile viewports, leading to high bounce rates.",
      approach: "Implemented a clean, framework-free architecture utilizing semantic HTML5 and modern CSS3 (Flexbox & CSS Grid). Built a smooth, accessible layout with custom typography, responsive navigation, and engaging interactive consultation calls-to-action.",
      keyFeatures: [
        "Pixel-perfect translation of modern Figma agency design systems",
        "Interactive service breakdown cards detailing SEO, PPC, and content strategies",
        "Responsive header navigation with clean mobile adaptation and CTA triggers",
        "Strategic lead-generation consultation booking and client testimonial carousel"
      ],
      architecturalHighlights: [
        "Pure HTML5 & CSS3 layout without unnecessary external framework overhead",
        "Optimized asset loading achieving instant First Contentful Paint (FCP)",
        "Strict semantic structure and cross-browser consistency across modern viewports"
      ]
    }
  },
  {
    id: "tutor",
    title: "Tutor — 1-on-1 Online Tutoring Platform",
    category: "HTML5 / CSS3 / JavaScript / EdTech",
    shortDescription: "An interactive educational web platform connecting students with vetted private tutors for personalized 1-on-1 learning, featuring dynamic metrics, student resources, and clear registration pathways.",
    image: "/projects/tutor.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "FontAwesome", "Responsive Design"],
    githubUrl: "https://github.com/mhady8736/Tutor",
    liveDemoUrl: "https://mhady8736.github.io/Tutor/",
    featured: true,
    caseStudy: {
      tagline: "Simplifying personalized learning and private instructor discovery through clean, friendly web design",
      overview: "Tutor is an online educational landing platform built to make 1-on-1 private instruction accessible and trustworthy. The platform highlights key social proof metrics (870+ expert tutors), provides specialized pathways for school and university students, and guides learners directly to finding their ideal tutor.",
      problem: "Students seeking educational tutoring often struggle with cluttered portals, confusing pricing structures, and ambiguous teacher qualifications.",
      approach: "Designed a clean, welcoming visual interface with cheerful color accents, satisfaction guarantees, clear platform statistics, and seamless onboarding CTAs. Implemented responsive grid layouts and intuitive navigation.",
      keyFeatures: [
        "Hero section featuring 100% satisfaction guarantee and fast onboarding triggers",
        "Dynamic platform statistics banner showcasing 870+ verified expert tutors",
        "Dedicated student resource sections and institutional partnership announcements",
        "Fluid responsive design tailored for smartphones, tablets, laptops, and large displays"
      ],
      architecturalHighlights: [
        "Clean CSS modular class structure ensuring rapid styling maintainability",
        "Lightweight DOM tree for lightning-fast performance on student mobile devices",
        "Consistent typography and button component states across interactive elements"
      ]
    }
  },
  {
    id: "burger-rush",
    title: "Burger Rush — Fast Food Ordering & Restaurant Web App",
    category: "HTML5 / CSS3 / JavaScript / Food Ordering",
    shortDescription: "A high-conversion online food ordering web experience for a gourmet burger restaurant, featuring interactive menus, cart management, bilingual support, and dark/light modes.",
    image: "/projects/burger-rush.png",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "UI/UX Design", "Responsive Layout", "Vercel"],
    githubUrl: "https://github.com/mhady8736/Burger-Rush-",
    liveDemoUrl: "https://burger-rush-three.vercel.app/",
    featured: true,
    caseStudy: {
      tagline: "Engineering an appetizing, high-performance online food ordering and restaurant discovery platform",
      overview: "Burger Rush is a vibrant commercial restaurant web application designed to deliver an engaging, mouth-watering digital ordering experience. The platform highlights specialty burger collections, customer reviews, branch locations, and instant 30-minute delivery guarantees with an intuitive shopping cart flow.",
      problem: "Restaurant websites often suffer from unoptimized high-res images causing slow initial loads, clunky mobile ordering experiences, and lack of localized language support for diverse audiences.",
      approach: "Built a mobile-first, responsive web application utilizing semantic HTML5 and modern CSS3. Implemented a shopping cart state counter, bilingual toggle (English & Arabic), instant theme customization (Dark & Light modes), and accessible CTA pathways.",
      keyFeatures: [
        "Interactive food menu with category browsing and real-time shopping cart counter",
        "Bilingual localization support (English & Arabic) with smooth layout direction switches",
        "Dark and Light theme toggle for comfortable browsing day and night",
        "Mobile-first responsive design guaranteeing rapid ordering on mobile devices"
      ],
      architecturalHighlights: [
        "Optimized media delivery ensuring rapid First Contentful Paint despite rich hero imagery",
        "Pure JavaScript DOM manipulation for lightweight cart state and theme persistence",
        "Semantic layout with accessible interactive controls for touch and keyboard users"
      ]
    }
  }
];


export const timelineData = [
  {
    period: "Jul 2026 – Present",
    title: "Front-End Developer Intern",
    institution: "Digital Egypt Pioneers Initiative (DEPI)",
    badge: "Internship • Part-Time",
    description: "Building user-friendly, responsive web interfaces using HTML, CSS, JavaScript, and React in a structured, high-intensity training program. Applying UI/UX principles, consuming REST APIs, and collaborating with engineering peers on practical team projects while strengthening professional workplace workflows."
  },
  {
    period: "Oct 2023 – Present",
    title: "Bachelor of Information Technology – Software Engineering",
    institution: "Borg Al Arab Technological University, Alexandria, Egypt",
    badge: "Education • GPA: 3.80 / 4.00",
    description: "Specializing in Software Engineering with an outstanding GPA of 3.80 / 4.00. Completed extensive coursework in software development, web development, programming (C, C++, Java, Python), database systems (MySQL), and software engineering principles."
  },
  {
    period: "Jul 2024",
    title: "Front-End Developer Trainee",
    institution: "Borg El Arab Technological University, Alexandria, Egypt",
    badge: "Practical Training",
    description: "Completed intensive practical training in front-end development, building interfaces with HTML, CSS, and JavaScript for cross-device compatibility. Developed and improved web interfaces through hands-on projects, applying UI/UX and responsive design principles."
  }
];
