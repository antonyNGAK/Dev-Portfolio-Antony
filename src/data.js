import { Icon } from "@iconify/react";// Importation des Icon

// import newLogo from "./images/yourFileName"

// Logo principal et images des cartes projets
import Logo from "./images/AN-Logo-.svg";
import Cover1 from "./images/Desktop Nina cover.png";
import Cover2 from "./images/Sophi pic.png";
import Cover3 from "./images/Kasa pic.png";
import Cover4 from "./images/booki pic.png";
import Cover5 from "./images/Screenshot 2024-04-13 01.50.30.png";
import Cover6 from "./images/Desktop Booki.png";

//Images Bannière
import HeroLight from "./images/bannière.jpg";
import HeroDark from "./images/hero-dark.jpg";

export { HeroLight as Light };
export { HeroDark as Dark };

//Exportation des infos github via le nom d'utilisateur
export const githubUsername = "antonyNGAK";

// Navbar Logo 
export const navLogo = Logo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

//Bloc A Propos
export const moreInfo =
  "Je suis un Développeur passsionné par la découverte et l'apprentissage de nouvelles technologie . Ce qui me motive au quotidien c'est de pouvoir matérialisé les différentes idées innovantes par l'intermédiaire de code d'une application ou d'un site web.";

//Skills

export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 5,
    skill: <Icon icon="fa6-brands:node" className="display-4" />,
    name: "Node JS",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:express" className="display-4" />,
    name: "Express JS",
  },
  {
    id: 7,
    skill: <Icon icon="cib:sass-alt" className="display-4" />,
    name: "Sass",
  },
  {
    id: 8,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "Intégration BootStrap",
  },
  {
    id: 9,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Intégration Redux",
  },
  {
    id: 10,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 11,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 12,
    skill: <Icon icon="cbi:apple-iphone" className="display-4" />,
    name: "Responsive Design",
  },
  {
    id: 13,
    skill: <Icon icon="devicon-plain:mongodb" className="display-4" />,
    name: "MongoDB",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/19KLSQMABPmZWrtsR5L1vueT8baoIbDnN/view?usp=drive_link"; 

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["P6-Kasa", "Optimisation-Nina-C", "P3"];
export const cardCover1 = Cover1;
export const cardCover2 = Cover2;
export const cardCover3 = Cover3;
export const cardCover4 = Cover4;
export const cardCover5 = Cover5;
export const cardCover6 = Cover6;

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "P6-Kasa",
    image: Cover3,
  },
  {
    name: "Optimisation-Nina-C",
    image: Cover1,
  },
  {
    name: "P3",
    image: Cover2,
  },
  {
    name: "Booki",
    image: Cover4,
  },
  {
    name: "P7-Dev-Web-livres",
    image: Cover5,
  },
];

// Contact Info

export const formspreeUrl = "https://formspree.io/f/mpzvojko";
