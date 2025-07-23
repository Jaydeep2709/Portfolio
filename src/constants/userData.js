import SRMImg from "../assets/srm.svg";
import TCSImg from "../assets/tcs.svg";
import PortfolioImg from "../assets/portfolio.png";
import ReactIcon from "../assets/React.svg";
import DotNetCoreIcon from "../assets/NET_Core_Logo.svg"
import SQLIcon from "../assets/SQL Developer.svg"
import Angular from "../assets/Angular.svg"
import JavaScriptIcon from "../assets/JavaScript.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import GitIcon from "../assets/Git.svg";
import UnderDevelopment from "../assets/UnderDevelopment.png"

export const userData = {
  name: "Jaydeep Sarjerao Khot",
  location: "Pune India",
  role: "Web Developer",
  role_desc:
    "Hi, I'm Jaydeep Khot. A dedicated frontend professional exploring backend technologies to build robust, full-stack websites.",
  socials: {
    linkedin: "https://linkedin.com/in/jaydeep-khot-8b2520204",
    github: "https://github.com/Jaydeep2709",
    email: "jaydeepkhot2709@gmail.com",
  },
  skillsData: {
    title: "My Tech Stack",
    desc: "I'm proficient in a range of modern technologies that empower me to build highly functional solutions.",
    technologies: [
      // Programming Languages
      {
        id: 1,
        name: "JavaScript",
        type: "Programming Language",
        image: JavaScriptIcon,
      },
      {
        id: 2,
        name: "TypeScript",
        type: "Programming Language",
        image: TypeScriptIcon,
      },

      // Frontend Libraries and Frameworks
      {
        id: 3,
        name: "React",
        type: "JavaScript Library",
        image: ReactIcon,
      },


  // Backend and Databases
  {
    id: 10,
    name: ".NET Core",
    type: "Backend Framework",
    image: DotNetCoreIcon, // Replace with actual import
  },
  // {
  //   id: 11,
  //   name: ".NET MVC",
  //   type: "Backend Framework",
  //   image: DotNetMVCIcon, // Replace with actual import
  // },
  {
    id:11,
    name: "Angular",
    type: "JavaScript Framework",
    image: Angular,
  },
  {
    id: 12,
    name: "SQL",
    type: "Database Query Language",
    image: SQLIcon, // Replace with actual import
  },
  {
    id: 13,
    name: "PL/SQL",
    type: "Procedural Language",
    image: SQLIcon, // Replace with actual import
  },

      // {
      //   id: 4,
      //   name: "Next.js",
      //   type: "React Framework",
      //   image: NextJsIcon,
      // },

      // Styling and CSS Frameworks
      // {
      //   id: 5,
      //   name: "Tailwind CSS",
      //   type: "CSS Framework",
      //   image: TailwindIcon,
      // },

      // Backend and Databases
      // {
      //   id: 6,
      //   name: "Node.js",
      //   type: "JavaScript Runtime",
      //   image: NodeJsIcon,
      // },
      // {
      //   id: 7,
      //   name: "Express",
      //   type: "Web Framework",
      //   image: ExpressIcon,
      // },
        // {
        //   id: 8,
        //   name: "MongoDB",
        //   type: "Database",
        //   image: MongoDBIcon,
        // },

      // Tools and Version Control
      {
        id: 9,
        name: "Git",
        type: "Version Control",
        image: GitIcon,
      },
    ],
  },
  experienceData: {
    title: "Experience",
    desc: "A glimpse into my academic and profesional experience, shaping my growth in the tech world.",
    exp: [
      {
        id: 1,
        title: "Programmer Analyst",
        company: "Rheal Software",
        location: "Pune, India",
        year: "Feb 2024 - Present",
        role: "Designed and developed scalable web applications for the 'Any Where Warrant' project using Angular and .NET MVC. Collaborated with cross-functional teams to enhance performance, conducted code reviews, and ensured high-quality deliverables through unit testing and debugging.",
        image: TCSImg,
      }
    ],
    edu: [
      {
        id: 1,
        degree: "Bachelor of Technology in Computer Science and Engineering",
        institution: "ADCET Ashta",
        year: "Jul 2020 - May 2024",
        image: SRMImg,
      },
    ],
  },
 projectsData: {
    title: "Personal Projects",
    desc: "Code-Powered Designs in Action",
    projects: [
      {
        id: 1,
        name: "Portfolio V1",
        description: "A personal portfolio to showcase my projects and skills.",
        techStack: ["JavaScript", "React", "CSS"],
        image: PortfolioImg,
        github: "https://github.com/Jaydeep2709/PortFolio",
        website: "https://jaydeep-khot-portfolio.onrender.com",
        status: "completed", // Mark as completed
      },
      {
        id: 2,
        name: "Music Tiles (In Development)",
        description: "An upcoming project currently in development. Stay tuned for more details!",
        techStack: ["JavaScript", "Angular", "Tailwind CSS"],
        image: UnderDevelopment, // Use a placeholder image
        github: "https://github.com/Jaydeep2709/PianoTiles", // Optional: link to repo if it exists
        website: "", // Empty or null for in-development projects
        status: "in_development", // Mark as in development
      },
    ],
  },
  contactData: {
    salutation: "Hi There",
    title: "Send me a message",
    subTitle: "Let's build something amazing.",
    emailDesc: "Mail me at",
    linkedin: "Linkedin",
    github: "Github",
  },
};
