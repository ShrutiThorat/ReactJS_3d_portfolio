import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  plantDisease,
  customers,
  socialMedia,
  threejs,
  mavenir,
  Library,
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
    title: "Backend Developer",
    icon: backend,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Member of Technical Staff 1 - R&D",
    company_name: "Mavenir",
    icon: mavenir,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present ",
    points: [
      "Orchestrated the design and development of the robust application, used by internal teams to optimize workflows and enhance collaboration.",
      "Assisted in creating various mock-up designs using the Figma tool and building responsive UI pages.",
      "Implemented an application with a Lazy-Loading concept to reduce the initial load.",
      "Integrated Apache ECharts library for data visualization.",
      "Worked on writing UI automation test cases using the Robot framework in Python.",
      "Engaged in backed development using Python.",
      "Worked on the creation of mock-up designs and used the Material UI library for development.",
      "Integrated React Recharts library for charts for data visualization.",
      "Contributed to IIOTP stability by working on minor features and resolving bugs.",
      "Created diverse visualization widgets for the dashboard using Grafana, enabling interactive data representation.",
    ],
  },
  {
    title: "Graduate Engineer",
    company_name: "Mavenir",
    icon: mavenir,
    iconBg: "#383E56",
    date: "March 2021 - Feb 2022",
    points: [
      "Assisted in creating various mock-up designs using Adobe XD and building responsive UI pages and components along with real-time chat features.",
      "Worked on the creation of a chatbot by using the SDK from the Nvdia Jarvis with Automatic Speech Recognition and Text-to-speech capabilities.",
      "Integrated ‘HERE’ maps in the application for displaying location data.",
      "Supported backend development using Node JS, enabling seamless data processing and management.",
      "Collaborated effectively with cross-functional teams, including designers, developers, and product managers, to ensure mock-ups aligned with project goals and objectives.",
      "Actively participated in the development of a model registry for use-cases and switching of models at ease.",
      "Integrated redux for state management, optimizing application performance.",
      "Worked on Docker-based deployments for efficient application distribution.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Media Backend Application using NODE.JS",
    description:
      "A Node.js project for a social media app facilitates real-time communication, user authentication, and data management, enabling users to connect, share content, and interact seamlessly. The backend ensures scalability, security, and efficient handling of user-generated content.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: socialMedia,
    source_code_link: "https://github.com/ShrutiThorat/Social_Media_NodeJS_App",
  },
  {
    name: "Book Management System - MERN",
    description:
      "A MERN-based Book Management System allows users to seamlessly manage book inventories, including adding, updating, and deleting books, with features for tracking availability and categorization. Built with MongoDB, Express.js, React, and Node.js, it offers a responsive UI and robust backend for efficient book management.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: Library,
    source_code_link: "https://github.com/ShrutiThorat/Book_Management_System",
  },
  {
    name: "Plant Disease Detection using CNN",
    description:
      "A plant disease detection project uses CNNs to classify diseases from leaf images, aiding in timely and accurate diagnosis for improved agricultural management.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "pink-text-gradient",
      },
    ],
    image: plantDisease,
    source_code_link:
      "https://github.com/ShrutiThorat/PlantDiseaseDetectionUsingCNN",
  },
  {
    name: "Customer Segmentation Project using R",
    description:
      "A customer segmentation project in R uses clustering algorithms to group customers based on purchasing behavior, enabling targeted marketing and personalized services. This enhances customer engagement and boosts business profitability.",
    tags: [
      {
        name: "R",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: customers,
    source_code_link:
      "https://github.com/ShrutiThorat/CustomerSegmentationUsingR/",
  },
];

export { services, technologies, experiences, testimonials, projects };
