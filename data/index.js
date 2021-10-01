export const skillSet = {
  designer: {
    skills: ["Web", "Apps", "Video Games", "Simulation", "UI/UX"],
    tools: ["Figma", "Inkscape", "Sketch", "Photoshop"],
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
      "Google APIs",
    ],
  },
  entrep: {
    skills: ["Founder", "Freelance", "Consulting", "Training"],
    tools: [
      "Communication",
      "Leadership",
      "Problem-solving",
      "Time Management",
      "Teamwork",
    ],
  },
  languages: ["Typescript", "Javascript", "C#", "Html"],
};

export const projects = [
  // IXPORT TECHNOLOGIES
  {
    title: "Ixport Technologies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget faucibus libero, at pulvinar dui. Nam auctor, enim et tincidunt euismod, orci libero blandit purus, quis facilisis dolor lacus nec tellus. In dictum, turpis a gravida pretium, sapien dui tempus nunc, ut volutpat nisl neque vel odio. Praesent ut lectus non ipsum consectetur ornare. Proin consequat efficitur venenatis. Vivamus a elit eget nunc ullamcorper consequat. Donec pulvinar id eros ut tristique. Sed nec ante lectus. Nam a purus pellentesque sem luctus scelerisque nec id diam.",
    id: "ixport",
    role: "Full Stack Developer",
    type: "hybrid",
    tags: ["html", "bootstrap", "javascript"],
    deployed: {
      active: false,
      link: "",
    },
    repo: {
      active: false,
      link: "",
    },
    imgUrl: { hero: "/images/PhotoPlaceHolder.png", subImgs: [] },
    bullets: [],
  },
  // BOOKLA
  {
    title: "Bookla",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget faucibus libero, at pulvinar dui. Nam auctor, enim et tincidunt euismod, orci libero blandit purus, quis facilisis dolor lacus nec tellus. In dictum, turpis a gravida pretium, sapien dui tempus nunc, ut volutpat nisl neque vel odio. Praesent ut lectus non ipsum consectetur ornare. Proin consequat efficitur venenatis. Vivamus a elit eget nunc ullamcorper consequat. Donec pulvinar id eros ut tristique. Sed nec ante lectus. Nam a purus pellentesque sem luctus scelerisque nec id diam.",
    id: "bookla",
    role: "Full Stack Developer",
    type: "hybrid",
    tags: ["html", "bootstrap", "javascript"],
    repo: {
      active: false,
      link: "",
    },
    deployed: {
      active: false,
      link: "",
    },
    imgUrl: { hero: "/images/PhotoPlaceHolder.png", subImgs: [] },
    bullets: [],
  },
  // Real Estate VR
  // {
  //   title: "Realtor App",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget faucibus libero, at pulvinar dui. Nam auctor, enim et tincidunt euismod, orci libero blandit purus, quis facilisis dolor lacus nec tellus. In dictum, turpis a gravida pretium, sapien dui tempus nunc, ut volutpat nisl neque vel odio. Praesent ut lectus non ipsum consectetur ornare. Proin consequat efficitur venenatis. Vivamus a elit eget nunc ullamcorper consequat. Donec pulvinar id eros ut tristique. Sed nec ante lectus. Nam a purus pellentesque sem luctus scelerisque nec id diam.",
  //   id: "realtor",
  //   role: "Full Stack Developer",
  //   type: "hybrid",
  //   tags: ["html", "bootstrap", "javascript"],
  //   repo: {
  //     active: false,
  //     link: "",
  //   },
  //   deployed: {
  //     active: false,
  //     link: "",
  //   },
  //   imgUrl: { hero: "/images/PhotoPlaceHolder.png", subImgs: [] },
  //   bullets: [],
  // },
  // Med Sim
  // {
  //   title: "Med Sim VR",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget faucibus libero, at pulvinar dui. Nam auctor, enim et tincidunt euismod, orci libero blandit purus, quis facilisis dolor lacus nec tellus. In dictum, turpis a gravida pretium, sapien dui tempus nunc, ut volutpat nisl neque vel odio. Praesent ut lectus non ipsum consectetur ornare. Proin consequat efficitur venenatis. Vivamus a elit eget nunc ullamcorper consequat. Donec pulvinar id eros ut tristique. Sed nec ante lectus. Nam a purus pellentesque sem luctus scelerisque nec id diam.",
  //   id: "medsim",
  //   role: "Full Stack Developer",
  //   type: "hybrid",
  //   tags: ["html", "bootstrap", "javascript"],
  //   repo: {
  //     active: false,
  //     link: "",
  //   },
  //   deployed: {
  //     active: false,
  //     link: "",
  //   },
  //   imgUrl: { hero: "/images/PhotoPlaceHolder.png", subImgs: [] },
  //   bullets: [],
  // },

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
    imgUrl: { hero: "/images/app-screens/caren-main_b.png", subImgs: [] },
    bullets: [
      "Created 80% of App React components",
      "Implemented React Google Maps API",
      "Dynamic Google Maps Components based on location tracking",
      "Backend dependent React component creation with state and hooks logic",
      "All front end routing and communication to backend",
      "Image frontend uploading, server hosting/storage request to cloud",
      "Review and manage project and task",
    ],
  },
  // BOTTLED WATERMARK
  {
    title: "Bottled Watermark",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget faucibus libero, at pulvinar dui. Nam auctor, enim et tincidunt euismod, orci libero blandit purus, quis facilisis dolor lacus nec tellus. In dictum, turpis a gravida pretium, sapien dui tempus nunc, ut volutpat nisl neque vel odio. Praesent ut lectus non ipsum consectetur ornare. Proin consequat efficitur venenatis. Vivamus a elit eget nunc ullamcorper consequat. Donec pulvinar id eros ut tristique. Sed nec ante lectus. Nam a purus pellentesque sem luctus scelerisque nec id diam.",
    id: "bottledW",
    role: "Full Stack Developer",
    type: "mobile",
    tags: ["html", "bootstrap", "javascript"],
    repo: {
      active: false,
      link: "",
    },
    deployed: {
      active: false,
      link: "",
    },
    imgUrl: { hero: "/images/PhotoPlaceHolder.png", subImgs: [] },
    bullets: [],
  },
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
    imgUrl: { hero: "/images/app-screens/trek-main.png", subImgs: [] },
    bullets: [
      "Designed layout, typography, and logo element for cohesive sleek look",
      "Lead front end team in developing webapp html and css",
      "implented jQuery logic to handle and render dynamic data",
      "assisted with client-side logic to fetch API request",
    ],
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
    imgUrl: { hero: "/images/app-screens/seniorPets-main.png", subImgs: [] },
    bullets: [
      "100% designed webapp layout and user interface",
      "developed dynamic HTML using the Handlebars.js",
      "started with bootstrap css framework but integrated custom styling for complete unique look",
      "developed and implemented interaction logic between the model, view and controller",
      "assisted in server-side API logic",
      "assisted with sequelize/mysql Schema and controller on backend server",
      "heavily assisted with troubleshooting of team issues and bugs",
    ],
  },
  // BECAUSE ZOMBIES
  {
    title: "Because Zombies!",
    desc: "",
    id: "becauseZombies",
    role: "Full Stack Developer",
    type: "mobile",
    tags: ["html", "bootstrap", "javascript"],
    repo: {
      active: false,
      link: "",
    },
    repoLink: "",
    deployed: { active: false, link: "" },
    imgUrl: { hero: "/images/PhotoPlaceHolder.png", subImgs: [] },
    bullets: [],
  },
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
    imgUrl: { hero: "/images/app-screens/loveBug-main.png", subImgs: [] },
    bullets: [
      "Designed webapp HTML layout and user interface",
      "Utilized bootstrap framework along with custom CSS",
      "Developed client-side logic to fetch server side db-less data",
      "Configured express server routing to serve static files and update data",
    ],
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
    imgUrl: { hero: "/images/app-screens/googleBooks-main.png", subImgs: [] },
    bullets: [
      "React Single-Page Application",
      "Implement React Router for conditional rendering of components",
      "Created React components utilizing React lifecycle methods.",
      "React State logic with query and display books based on Googlebooks API searches and CRUD database request",
      "Created and configured Moongoose/MongoDB Schema and controller on backend server",
      "Configure and deployed fullstack MERN application",
    ],
  },
];
