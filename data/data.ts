import {
  AiOutlineUser,
} from "react-icons/ai";

import { GiMicrophone } from "react-icons/gi";


export const INSTAGRAM_URL = "https://www.instagram.com/harshit._._.yadav/";
export const GITHUB_URL = " https://github.com/CodeMaster17";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/harshit-yadav-2b2b2922b/";

export const anchoring = [
  {
    id: 2,
    eventName: "Stark Expo  2023",
    date: "2nd January 2023",
    topic: "",
    imgUrl: "/assets/anchroing/stark-expo.jpeg",
  },
  {
    id: 4,
    eventName: "Project wing 2023",
    date: "2nd January 2023",
    topic: "",
    imgUrl: "/assets/anchroing/project-wing.jpg",
  },
  {
    id: 1,
    eventName: "DevOps 2022",
    date: "2nd January 2023",
    topic: "",
    imgUrl: "/assets/anchroing/devops.jpg",
  },

  {
    id: 3,
    eventName: "HacktoberFest  2022",
    date: "2nd January 2023",
    topic: "",
    imgUrl: "/assets/anchroing/hacktoberfest.jpg",
  },
];

export const menus = [
  // { name: "About", link: "/", icon: AiOutlineUser },
  // { name: "Projects", link: "/", icon: AiOutlineAppstoreAdd },
  // { name: "Skills", link: "/addplace", icon: MdComputer },
  // { name: "Experience", link: "/", icon: HiPhotograph },
  { name: "View Everything", link: "/", icon: AiOutlineUser },
  // { name: "Contact Me", link: "/under-development", icon: MdCall },
  {
    name: "Anchoring",
    link: "/anchoring",
    icon: GiMicrophone,
  },
  // { name: "Technical Lead", link: "/lead", icon: PiMedalFill },
  // { name: "Enterprenauirship", link: "/under-development", icon: BsBuilding },
  // { name: "Startups", link: "/under-development", icon: RiSettings4Line },
];

export const skill = [
  {
    imgSrc: "/skills/reactjs.webp ",
    skillName: "React Js",
  },
  {
    imgSrc: "/skills/nextjs.png",
    skillName: "next Js",
  },
  {
    imgSrc: "/skills/mongodb.png",
    skillName: "Mongo DB",
  },
  {
    imgSrc: "/skills/materialui.png",
    skillName: "Material UI",
  },
  {
    imgSrc: "/skills/postman.png",
    skillName: "Postman",
  },
  {
    imgSrc: "/skills/figma.png",
    skillName: "Figma",
  },
  {
    imgSrc: "/skills/tailwind.png",
    skillName: "Tailwind",
  },
  {
    imgSrc: "/skills/nodejs.png",
    skillName: "Node Js",
  },
  {
    imgSrc: "/skills/redux.png",
    skillName: "Redux",
  },
];

export const companies = [
  {
    _id: 1,
    startDate: " August 2023",
    endDate: "",
    role: "Software Engineer Intern",
    company: "SYMB Technologies",
    companyLink: "//symbtechnologies.com/",
    src: "/assets/experience/symbtechnologies_logo.png",
    description:
      " SYMB Technologies website & mobile application development company based in Delhi. - Went through aptitude test, followed by HR round, React and Javascript machine coding round. - SYMB Technologies website & mobile application development company based in Delhi.  Went through aptitude test, followed by HR round, React and Javascript machine coding round.",
  },
  {
    _id: 2,
    startDate: "May 2023",
    endDate: "June 2023",
    role: "Freelance web Developer",
    company: "Maze",
    companyLink: "https://mazeapp.in/",
    src: "/assets/experience/maze.svg",
    description:
      "In collaboration with Maze design team, I am developing Maze Official Website in React and Tailwind CSS, Framer Motion library keeping in mind the responsiveness and performance of the website. - Learnt the art of negotiation and communication with the client.",
  },
  {
    _id: 3,
    startDate: "December 2022",
    endDate: "March 2023",
    role: "Web Developer Intern",
    company: "Yaro",
    src: "/assets/experience/yaro.jpeg",
    description:
    "Developed Admin Dashboard in React Js, Redux, and Tailwind CSS with features like CRUD operations, authentication, otp verification, video and image upload, and search filter.",
  },
  {
    _id: 4,
    startDate: "August 2022",
    endDate: "",
    role: "Official Student Ambassador",
    company: "MLSA - Beta",
    src: "/assets/experience/mlsa-beta.jpeg",
    companyLink:
    "https://mvp.microsoft.com/en-US/studentambassadors/profile/f4540d33-8818-46e4-8559-853827635316",
    description:
    "From learning technical skills like Github, Github Copilot, Microsoft Azure etc to Non-technical skills like public speaking and event management, all contributed a lot ion development of my career and personality. - Learning and growing with like minded people is the best way to grow with this fast paced world, so I am too focusing on growing with one of the best community of people.Learning and growing with like minded people is the best way to grow with this fast paced world, so I am too focusing on growing with one of the best community of people.",
  },
  {
    _id: 5,
    startDate: "August 2022",
    endDate: "November 2022",
    role: "Frontend Lead",
    company: "Friska",
    src: "/assets/experience/friska.jpeg",
    companyLink: "https://www.linkedin.com/company/friskanow/",
    description:
      "I designed and developed the whole frontend of Friska from scratch on React Js, and Figma designs. This experience has not only developed my experience with frontend development but also helped me to understand more about the work culture of a startup.",
  },
];

export const projects = [
  {
    id: 2,
    subtitle: ["Next Js", "Tailwind CSS", "Shadcn/ui", "MongoDb", "Clerkjs"],
    title: "DevExchange",
    description:
      "This platform developed with Next Js 13.5, Shadcn/Ui helps developers to ask question, post answers,  and even generate answers to their questions, alongwith  voting system for questions asked, helping to build user profile and get badges. It includes features like google, email authentication system with Clerk, code formatting, generating an AI answer, connecting and building like minded community (under development), finding jobs and even more.",
    imageSrc: "/assets/projeccts/dev-exchange.svg",
    linkState: true,
    githubLink: "",
    link: "https://dev-overflow-dqh0gdcm8-codemaster17.vercel.app/",
  },
  {
    id: 1,
    subtitle: ["React", "Tailwind", "Framer  Motion", "Tally Forms"],
    title: "Maze Website",
    description:
      "In collaboration with Maze design team, I am developing Maze Official Website in React and Tailwind CSS, Framer Motion library keeping in mind the responsiveness and performance of the website.Maze official website built from scratch, using React js, Tailwind css, and Framer motion.",
    imageSrc: "/assets/projeccts/maze.svg",
    linkState: true,
    githubLink: "",
    link: "https://mazeapp.in/",
  },
  {
    id: 3,
    subtitle: ["Next Js", "SCSS", "Cloudinary", "Figma"],
    title: "ABM Technologies",
    description:
      "Fully responsive  website developed with Next Js, SCSS, Cloudinary, and Figma designs.",
    imageSrc: "/assets/projeccts/abm.webp",
    link: "https://www.abmtechnologies.us/",
    linkState: true,
    githubLink: "",
  },
  {
    id: 4,
    subtitle: ["Javascript", "CSS"],
    title: "Javascript Quiz Game -  For Mobile",
    description:
      "Developed with  pure javascript logic  and css, this quiz game meant to be played on mobile devices.",
    imageSrc: "/assets/projeccts/quiz-game.jpg",
    link: "https://yaro-quiz-game.vercel.app/",
    linkState: true,
    githubLink: "",
  },
  {
    id: 4,
    subtitle: ["React", "Tailwind", "Syncfusion", "Material UI"],
    title: "Shopify Dashboard",
    description:
      "Professional React Js Frontend syncfusion admin dashboard, with robust tables and bar charts, which are styled with Material UI.",
    imageSrc: "/assets/projeccts/shopify-dashboard.jpg",
    link: "https://shopping-dashboard-yln8.vercel.app/ecommerce",
    linkState: false,
    githubLink: "https://github.com/CodeMaster17/Shopping-Dashboard",
  },
];
