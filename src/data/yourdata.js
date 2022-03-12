// Skills Icons
import htmlIcon from "../../static/images/animations/htmllogo.svg";
import cssIcon from "../../static/images/animations/css.png";
import reactIcon from "../../static/images/animations/react.png";
import reactTop from "../../static/images/animations/reacttop.svg";
import jsIcon from "../../static/images/animations/javascript.png";
import designIcon from "../../static/images/animations/nextjs.png";
import codeIcon from "../../static/images/animations/github.png";
import FigmaIcon from "../../static/images/animations/figma.png";
import GatsbyIcon from "../../static/images/animations/Gatsby_Monogram.png";
import NodeIcon from "../../static/images/animations/node.png";

// Work Icons
import Pepsi from "../../static/images/animations/Pepsi.png";

// Social Icon
import githubIcon from "../../static/images/icons/github.svg";
import linkedin from "../../static/images/icons/linkedin.svg";
import instagramIcon from "../../static/images/icons/instagram.svg";

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Igor",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "ipaiva07@hotmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      imageHeader: Pepsi,
      title: "Pepsi",
      highLight: "Single Page Application",
      description: "React + Gatsby + Styled Components",
      logo1: GatsbyIcon,
      logo2: reactTop,
      logo3: jsIcon,
      text1: "July Dec",
      text2: "2022",
    },
    {
      imageHeader: "https://picsum.photos/800/600?random=2",
      title: "Technology",
      highLight: "Why is the Tesla Cybertruck designed the way it is?",
      description: "An exploration into the truck's polarising design",
      logo1: htmlIcon,
      logo2: cssIcon,
      logo3: jsIcon,
      text1: "July Dec",
      text2: "2022",
    },
    {
      imageHeader: "https://picsum.photos/800/600?random=3",
      title: "Technology",
      highLight: "Why is the Tesla Cybertruck designed the way it is?",
      description: "An exploration into the truck's polarising design",
      logo1: htmlIcon,
      logo2: cssIcon,
      logo3: jsIcon,
      text1: "July Dec",
      text2: "2022",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Created HTML markup templates. Updated and modified existing css code. Maintained HTML content on a daily basis.Processed data in content manage system. ",
    },
    {
      img: cssIcon,
      para:
        "Designing and creating components for the web using CSS/CSS3, SASS, Bootstrap and Tailwind.",
    },
    {
      img: jsIcon,
      para:
        "Implemented best practices to JavaScript codebase, develop new functionality and create new layouts, teach advanced JavaScript techniques to the team.",
    },
    {
      img: reactIcon,
      para:
        "Comprehensive knowledge of React JS Plataform and core principle. +100 custom React JS components. React-router to turn application into a Single Page Application",
    },
    {
      img: designIcon,
      para:
        "Designed and developed a full-stack funding website based on Next.JS",
    },
    {
      img: codeIcon,
      para:
        "Extensively used Git for version controlling and regularly pushed the code to GitHub.",
    },
    {
      img: FigmaIcon,
      para:
        "Designed and developed User Interface Wireframes and Web Forms using Figma.",
    },
    {
      img: GatsbyIcon,
      para:
        "Experience using Gatsby to delivery a great experience in less time. Built Web pages that are more user-interactive using Gatsby.",
    },
    {
      img: NodeIcon,
      para:
        "Implemented various screens for the front end using React JS and used various predefined components from NPM and Redux library.",
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/IgorRussi" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/igorrussi13",
    },
    {
      img: linkedin,
      url: "https://www.linkedin.com/in/igor-paiva-b592242b",
    },
  ],

  // End Contact Section ---------------
};
