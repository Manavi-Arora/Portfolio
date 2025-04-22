import {
  cpp,
  github,
  bootstrap,
  vitejs,
  vercel,
  sql,
  socketio,
  bluestock,
  chinar,
  zidio,
  python,
  lottie,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  nextjs,
  expressjs,
  git,
  figma,
  docker,
  news,
  rideIT,
  chat,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Zidio",
    icon: zidio,
    iconBg: "#6043b1",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Completed a Web Development Internship at Zidio Development, a fast-growing product-based startup focused on AI-driven learning and innovation.",

"Received hands-on training in the latest web development technologies and worked on real-world projects from ideation to deployment.",

"Collaborated with team members to design, develop, and test responsive and user-friendly web features using modern frameworks."
    ],
  },
  
  {
    title: "SDE Intern",
    company_name: "bluestock",
    icon: bluestock,
    iconBg: "#ffffff",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Developed and integrated scalable frontend and backend features for fintech applications using modern web technologies.",

"Collaborated with developers and product leads to design technical solutions aligned with business requirements.",
"Utilized Git for version control and contributed to clean, modular code through peer-reviewed pull requests.",

"Gained hands-on experience with debugging, API integration, and performance optimization in a production-level environment."],
  },
  {
    title: "Frontend Developer",
    company_name: "Chinar Fabrics",
    icon: chinar,
    iconBg: "#00923f",
    date: "June 2024 - July 2024",
    points: [
      "Developed and maintained frontend components for Chinar Fabrics' internal and customer-facing web applications using React.js, improving user experience and interface consistency.",

      "Collaborated with UI/UX designers and backend developers to implement pixel-perfect designs and integrate RESTful APIs for dynamic data rendering.",

      "Ensured responsive layouts and cross-browser compatibility, optimizing the website for desktop, tablet, and mobile devices.",

      "Participated in regular code reviews, learning best practices and contributing to clean, maintainable code.",
    ],
  },
  
];


const projects = [
  {
    name: "BuzzChat - Real Time Chat Platform",
    description:
      "BuzzChat is a real-time chat platform with one-on-one & group messaging, image sharing, voice & video calls, Google authentication, friend suggestions and updates, and status updates. Designed for seamless communication, it ensures secure, fast, and interactive conversations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/Manavi-Arora/BuzzChat-MERN",
  },
  {
    name: "RideIT - Cab Booking Service",
    description:
      "RideIT is a modern cab booking service that provides seamless ride-hailing experiences for users and drivers. The platform supports user authentication, driver registration, ride path tracking, driver and user history-rides tracking and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: rideIT,
    source_code_link: "https://github.com/Manavi-Arora/RideIT-MERN",
  },
  {
    name: "Newsphere - News Website",
    description:
      "Newsphere is a modern, responsive React-based news website that provides news articles across multiple categories, including Business, Sports, Technology, Entertainment, Health, Science, and more. It integrates with a news API to fetch the latest articles and display them to the users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/Manavi-Arora/Newsphere-React-NewsApp",
  },
];

export { services, technologies, experiences, projects };
