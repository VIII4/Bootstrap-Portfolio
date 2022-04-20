/*

  Figma
  Inkscape
  Sketch
  Adobe Photoshop
    

  React
  Next.js
  Node.js
  WebXR
  Unity3D
  Blender
  MongoDB
  Babylon.js
  Three.js
  A-frame
  Google APIs
  Figma
  Inkscape
  Sketch
  Adobe Photoshop
  Typescript
  Javascript
  C#
  Html
  webGL

  Search Engine Optimization (SEO)
  Content Management Systems (CMS)

*/

export const projectType = {
  web: "WEB",
  webxr: "WEBXR",
  native: "NATIVE",
  hybrid: "HYBRID",
};

export const skillSet = {
  designer: {
    skills: ["Web", "Apps", "Video Games", "Simulation", "UI/UX"],
    tools: ["Figma", "Inkscape", "Sketch", "Adobe Photoshop", "Lotties"],
  },
  developer: {
    skills: ["Front End", "Back End", "Video Game", "Interactive Simulation"],
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "WebXR",
      "Unity3D",
      "Blender",
      "MongoDB",
      "Babylon.js",
      "Three.js",
      "A-frame",
      "Bootstrap",
      "Google APIs",
    ],
  },
  entrep: {
    skills: [
      "Founder",
      "Freelance",
      "Consulting",
      "Training",
      "Mentorship",
      "Community Outreach",
    ],
    tools: [
      "Insight",
      "Forward Thinking",
      "Diligence",
      "Meticulousness",
      "Passion",
      "Teamwork",
      "Determination",
    ],
  },
  languages: ["Typescript", "Javascript", "C#", "Html"],
};

export const projects = [
  /*
  title: "",
    desc: "",
    id: "",
    role: "",
    type: "hybrid",
    tags: [],
    repo: {
      active: false,
      link: "",
    },
    deployed: {
      active: false,
      link: "",
    },
    imgs: ["/images/webP_images/PhotoPlaceHolder.webp"],
    bullets: [],
    tech: [
      "Javascript",
      "React",
      "Next.js",
      "Vercel",
      "Figma",
      "SEO",
      "MDBootstrap",
    ],
  */

  // Med Sim Proof of Concept
  {
    title: "Harlem Pediatrics VR Training App (BETA)",
    desc: "A WebXR Demo webapp for medical simulation training demo...",
    id: "medsim",
    role: "Full Stack XR Developer",
    type: "hybrid",
    tags: ["html", "bootstrap", "javascript"],
    repo: {
      active: false,
      link: "",
    },
    deployed: {
      active: true,
      link: "https://web-xr-med-sim.vercel.app/dashboard",
    },
    imgs: [
      "/images/projectImages/portfolio_HarlemPeds_5.webp",
      "/images/projectImages/portfolio_HarlemPeds_1.webp",
      "/images/projectImages/portfolio_HarlemPeds_3.webp",
      "/images/projectImages/portfolio_HarlemPeds_4.webp",
      "/images/projectImages/portfolio_HarlemPeds_6.webp",
    ],
    bullets: ["...", "...", "...", "..."],
    tech: [
      "React",
      "Next.js",
      "Vercel",
      "Figma",
      "SEO",
      "MDBootstrap",
      "Babylon.js",
      "Unity",
      "Blender",
    ],
  },

  // IXPORT TECHNOLOGIES
  {
    title: "Ixport Technologies",
    desc: "A server side rendered (Next.js), interactive Company product/services site that utilizes the babylon.js framework for a unique immersive experience that can also be personalized with metaverse avatar(ready player me), and highly ooptimized for SEO.",
    id: "ixport",
    role: "Full Stack Developer",
    type: "hybrid",
    tags: ["Native", "webXR", "web"],
    deployed: {
      active: false,
      link: "",
    },
    repo: {
      active: false,
      link: "",
    },
    imgs: ["/images/webP_images/PhotoPlaceHolder.webp"],
    bullets: [
      "...",
      ,
      "...",
      "Dynamic Google Maps Components based on location tracking",
      "Backend dependent React component creation with state and hooks logic",
      "All front end routing and communication to backend",
      "Image frontend uploading, server hosting/storage request to cloud",
      "Review and manage project and task",
    ],
    tech: [
      "Javascript",
      "React",
      "Next.js",
      "Vercel",
      "Babylon.js",
      "Blender",
      "Unity",
      "Figma",
      "SEO",
      "MDBootstrap",
      "Ready Player Me",
    ],
  },

  // BOOKLA
  {
    title: "Bookla",
    desc: "UI/UX Design for community sourced library  web platform...",
    id: "bookla",
    role: "UI/UX Designer",
    type: "hybrid",
    tags: ["html", "bootstrap", "javascript"],
    repo: {
      active: false,
      link: "",
    },
    deployed: {
      active: true,
      link: "https://www.figma.com/proto/YU8sKCwOloXYLmu862o0kX/Bookla-Wireframe?node-id=324%3A2860&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=324%3A2860&show-proto-sidebar=1",
    },
    imgs: [
      "/images/projectImages/Portfolio_Bookla_1.webp",
      "/images/projectImages/Portfolio_Bookla_2.webp",
      "/images/projectImages/Portfolio_Bookla_3.webp",
      "/images/projectImages/Portfolio_Bookla_4.webp",
    ],
    bullets: [],
    tech: [
      "Javascript",
      "React",
      "Next.js",
      "Vercel",
      "Figma",
      "SEO",
      "MDBootstrap",
    ],
  },

  // CARE'N
  {
    title: "Care'n",
    desc: "A Full Stack MERN application bootstrapped by Create-React-App framework and powered by Google Maps API; Care'n provides prioritization of community desired change by presenting real-time location based issues for users to vote on, with a unique limited vote token system.",
    id: "caren",
    role: "Full Stack Developer",
    type: "mobile",
    tags: ["html", "bootstrap", "javascript"],
    repo: {
      active: true,
      link: "https://github.com/VIII4/Care-n-v2",
    },
    deployed: {
      active: true,
      link: "https://care-n.herokuapp.com/",
    },
    imgs: [
      "/images/projectImages/Portfolio_Caren_7.webp",
      "/images/projectImages/Portfolio_Caren_5.webp",
      "/images/projectImages/Portfolio_Caren_6.webp",
      "/images/projectImages/Portfolio_Caren_2.webp",
      "/images/projectImages/Portfolio_Caren_1.webp",
    ],
    duration: "5 months",
    bullets: [
      "Created 80% of App React components",
      "Implemented React Google Maps API",
      "Dynamic Google Maps Components based on location tracking",
      "Backend dependent React component creation with state and hooks logic",
      "All front end routing and communication to backend",
      "Image frontend uploading, server hosting/storage request to cloud",
      "Review and manage project and task",
    ],
    tech: [
      "Javascript",
      "React",
      "@react-google-maps",
      "Google Maps API",
      "Google Civics API",
      "MongoDB",
      "Heroku",
      "Cloudinary",
      "SEO",
      "MDBootstrap",
    ],
  },

  // BOTTLED WATERMARK
  // {
  //   title: "Bottled Watermark",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget faucibus libero, at pulvinar dui. Nam auctor, enim et tincidunt euismod, orci libero blandit purus, quis facilisis dolor lacus nec tellus. In dictum, turpis a gravida pretium, sapien dui tempus nunc, ut volutpat nisl neque vel odio. Praesent ut lectus non ipsum consectetur ornare. Proin consequat efficitur venenatis. Vivamus a elit eget nunc ullamcorper consequat. Donec pulvinar id eros ut tristique. Sed nec ante lectus. Nam a purus pellentesque sem luctus scelerisque nec id diam.",
  //   id: "bottledW",
  //   role: "Full Stack Developer",
  //   type: "mobile",
  //   tags: ["html", "bootstrap", "javascript"],
  //   repo: {
  //     active: false,
  //     link: "",
  //   },
  //   deployed: {
  //     active: false,
  //     link: "",
  //   },
  //   imgUrl: { hero: "/images/webP_images/PhotoPlaceHolder.webp", subImgs: [] },
  //   bullets: [],
  //   tech: [],
  // },

  // TREK
  {
    title: "Trek",
    desc: "Trek! A convenient travel tool to learn about a destination city of your choice. Enter a destination city to receive current weather information, a 7 day weather forecast, and a sample of ten local events for that city. If you would like step by step driving directions to that city, simply enter your origin city for the search.",
    id: "trek",
    role: "Full Stack Developer",
    type: "hybrid",
    tags: ["html", "bootstrap", "javascript"],
    repo: {
      active: true,
      link: "https://github.com/VIII4/Trek",
    },

    deployed: {
      active: true,
      link: "https://benjamintownsend02.github.io/TrekProject/",
    },
    imgs: [
      "/images/projectImages/Portfolio_Trek_1.webp",
      "/images/projectImages/Portfolio_Trek_2.webp",
      "/images/projectImages/Portfolio_Trek_3.webp",
    ],
    bullets: [
      "Designed layout, typography, and logo element for cohesive sleek look",
      "Lead front end team in developing webapp html and css",
      "implented jQuery logic to handle and render dynamic data",
      "assisted with client-side logic to fetch API request",
    ],
    tech: ["Bootstrap", "javascript", "HTML5", "Firebase", "Moment.js"],
  },

  // SENIOR PETS
  {
    title: "Senior Pets",
    desc: "A Fullstack MVC web application. Senior Pets is a platform for volunteers that wish to assist seniors with pet care needs. Users can log in and see what tasks are available on specific days in their area, using the dynamic calendar. All active and completed tasks are tracked and presented to user in sleek UI designed for web and mobile screens",
    id: "seniorPets",
    role: "Frontend Developer",
    type: "hybrid",
    tags: ["html", "bootstrap", "mysql", "handlebars"],
    repo: {
      active: true,
      link: "https://github.com/VIII4/SeniorPets",
    },
    deployed: { active: true, link: "https://seniorpets22.herokuapp.com/" },
    imgs: [
      "/images/projectImages/Portfolio_SeniorPets_1.webp",
      "/images/projectImages/Portfolio_SeniorPets_2.webp",
      "/images/projectImages/Portfolio_SeniorPets_3.webp",
    ],
    bullets: [
      "100% designed webapp layout and user interface",
      "developed dynamic HTML using the Handlebars.js",
      "started with bootstrap css framework but integrated custom styling for complete unique look",
      "developed and implemented interaction logic between the model, view and controller",
      "assisted in server-side API logic",
      "assisted with sequelize/mysql Schema and controller on backend server",
      "heavily assisted with troubleshooting of team issues and bugs",
    ],
    tech: ["Bootstrap", "MySQL", "Handlebars"],
  },

  // BECAUSE ZOMBIES
  // {
  //   title: "Because Zombies!",
  //   desc: "",
  //   id: "becauseZombies",
  //   role: "Game Developer",
  //   type: "mobile",
  //   tags: ["html", "bootstrap", "javascript"],
  //   repo: {
  //     active: false,
  //     link: "",
  //   },
  //   repoLink: "",
  //   deployed: { active: false, link: "" },
  //   imgs: ["/images/webP_images/PhotoPlaceHolder.webp"],
  //   bullets: [],
  //   tech: ["Unity", "C#", "Blender", "Photoshop"],
  // },
  // LOVEBUG
  {
    title: "Lovebug",
    desc: "LoveBug is a web app designed to allows user to quickly find a match by simply completing a survey. The app then uses an algorithm to processes the best match based on user results comparison. Lovebug tracks all matches, allowing users to see all profiles and how many times they have been matched with someone. Lovebug provides an API to allow developers to retrieve all profiles in json format.",
    id: "lovebug",
    role: "Full Stack Developer",
    type: "mobile",
    tags: ["html", "bootstrap", "mysql", "express"],
    repo: {
      active: true,
      link: "https://github.com/VIII4/LoveBug",
    },
    deployed: { active: true, link: "https://lovebug-app.herokuapp.com/" },
    imgs: [
      "/images/projectImages/Portfolio_Lovebug_1.webp",
      "/images/projectImages/Portfolio_Lovebug_2.webp",
      "/images/projectImages/Portfolio_Lovebug_3.webp",
      "/images/projectImages/Portfolio_Lovebug_4.webp",
    ],
    bullets: [
      "Designed webapp HTML layout and user interface",
      "Utilized bootstrap framework along with custom CSS",
      "Developed client-side logic to fetch server side db-less data",
      "Configured express server routing to serve static files and update data",
    ],
    tech: ["Bootstrap", "MySQL", "express.js", "node.js"],
  },
  // Google Books
  {
    title: "Google Books",
    desc: "A Full Stack MERN web app, utilizing Google Books API. Google Books provides users with a platform to search books with an option to add to their reading/favorites list, user can then view and remove books from the list as necessary .",
    id: "googleBooks",
    role: "Full Stack Developer",
    type: "mobile",
    tags: ["html", "bootstrap", "javascript"],
    repo: {
      active: true,
      link: "https://github.com/VIII4/googleBooks",
    },
    deployed: {
      active: true,
      link: "https://googlebooksmernapp.herokuapp.com/",
    },
    imgs: ["/images/projectImages/Portfolio_GoogleBooks_1.webp"],
    bullets: [
      "React Single-Page Application",
      "Implement React Router for conditional rendering of components",
      "Created React components utilizing React lifecycle methods.",
      "React State logic with query and display books based on Googlebooks API searches and CRUD database request",
      "Created and configured Moongoose/MongoDB Schema and controller on backend server",
      "Configure and deployed fullstack MERN application",
    ],
    tech: ["html", "bootstrap", "javascript", "React", "node.js", "Heroku"],
  },
  // And The Whole Nine
  {
    title: "And The Whole 9",
    desc: " 'Coming Soon' branding and landing page ",
    id: "whole9",
    role: "",
    type: "hybrid",
    tags: [],
    repo: {
      active: false,
      link: "",
    },
    deployed: {
      active: true,
      link: "http://andthewhole9.com/",
    },
    imgs: ["/images/projectImages/Portfolio_Whole9_1.webp"],
    bullets: [],
    tech: ["PhotoShop", "Inkscape", "Html", "CSS", "Figma", "MDBootstrap"],
  },
];
