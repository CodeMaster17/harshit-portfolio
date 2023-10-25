import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineUserAdd,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { HiPhotograph } from "react-icons/hi";
import { GiMicrophone } from "react-icons/gi";
import {
  MdOutlineDashboard,
  MdComputer,
  MdCall,
  MdDownhillSkiing,
} from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { PiMedalFill } from "react-icons/pi";
import { BsBuilding } from "react-icons/bs";

export const INSTAGRAM_URL = "https://www.instagram.com/harshit._._.yadav/";
export const GITHUB_URL = " https://github.com/CodeMaster17";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/harshit-yadav-2b2b2922b/";

export const menus = [
  { name: "About", link: "/", icon: AiOutlineUser },
  { name: "Projects", link: "/", icon: AiOutlineAppstoreAdd },
  { name: "Skills", link: "/addplace", icon: MdComputer },
  { name: "Experience", link: "/", icon: HiPhotograph },
  { name: "Contact Me", link: "/addplace", icon: MdCall },
  { name: "Anchoring", link: "/", icon: GiMicrophone, margin: true },
  { name: "Technical Lead", link: "/", icon: PiMedalFill },
  { name: "Enterprenauirship", link: "/", icon: BsBuilding },
  { name: "Startups", link: "/", icon: RiSettings4Line },
];

export const sidebarLinks = {
  home: [
    {
      imgURL: "/icons/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/icons/about.svg",
      route: "/about",
      label: "About",
    },
    {
      imgURL: "/icons/skills.svg",
      route: "/skills",
      label: "Skills",
    },
    {
      imgURL: "/icons/projects.svg",
      route: "/projects",
      label: "Projects",
    },
    {
      imgURL: "/icons/experience.svg",
      route: "/experience",
      label: "Experience",
    },
    {
      imgURL: "/icons/contact.svg",
      route: "/contact",
      label: "Contact",
    },
  ],
};

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
    description:
      "I designed and developed the whole frontend of Friska from scratch on React Js, and Figma designs. This experience has not only developed my experience with frontend development but also helped me to understand more about the work culture of a startup.",
  },
];

export const projects = [
  {
    id: 1,
    subtitle: "React Js , Tailwind Css",
    title: "Maze Official Website",
    description:
      "Maze officila website built from scratch, using react js, tailwind css, and framer motion.",
    imageSrc: "/assets/projeccts/maze.svg",
    linkState: true,
    link: "https://mazeapp.in/",
  },
  {
    id: 2,
    subtitle: "React Js, Framer Motion, Vanilla Css ",
    title: "Crazy Tivago Website",
    description:
      "A complete frontend site for handling and hiring freelancers all across the world, to make our job easier.",
    imageSrc: "/",
    linkState: true,

    link: "https://codemaster17.github.io/freelancehelper.github.io/",
  },
  {
    id: 3,
    subtitle: "React Js, Tailwind CSS",
    title: "Crazy Tivago",
    description:
      "A complete solution to book flights, trains. hotels in simpler way, in low costs as compared to other websites.",
    imageSrc: "/",
    link: "",
    linkState: false,
  },
  {
    id: 4,
    subtitle: "React Js, Syncfusion",
    title: "Shopping Admin Dashboard",
    description:
      "A fintech admin dashboard to manage all the resources, user , user experiences, expenditure, savings, products.",
    imageSrc: "/",
    linkState: true,
    link: "https://shopping-dashboard-yln8.vercel.app/",
  },
];
