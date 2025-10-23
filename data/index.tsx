import { Mail, User, FolderOpen } from "lucide-react"; //Zap
import {
  asanaIcon,
  athonLogo,
  client_1,
  client_2,
  client_3,
  client_4,
  // discord,
  // dribble,
  // dribbleIcon,
  instagramword,
  facebook,
  figmaIcon,
  framerIcon,
  graphicDesignIcon,
  instagramIcon,
  linkedInIcon,
  notionIcon,
  pinterest,
  pixelworksLogo,
  // project_4,
  seoOptIcon,
  slackIcon,
  // snapchat,
  spotify,
  vortexLogo,
  webDesignIcon,
  webDevIcon,
  webflowIcon,
  XLogo,
} from "@/app/assets/assets";
import { Github, Instagram, SmilePlus } from "lucide-react";

import {
  counterListsType,
  FAQ,
  FollowerData,
  myExperienceTypes,
  myServicesPlansTypes,
  myServicesTypes,
  Project,
  myStackTypes,
  socialBrandsTypes,
  testimonialsTypes,
} from "@/types";
import { socialListsTypes } from "@/types";
import { pagesListsType } from "@/types";

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "Projects",
    href: "/projects",
    icon: <FolderOpen />,
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: "Instagram",
    icon: <Instagram size={22} />,
    link: "https://www.instagram.com/j0mer",
  },
  {
    id: 2,
    title: "Github",
    icon: <Github size={22} />,
    link: "https://www.github.com/jomermandap",
  },
  {
    id: 3,
    title: "Tiktok",
    icon: <SmilePlus size={22} />,
    link: "https://www.tiktok.com/@jomermndap",
  },
];

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: "Facebook",
    icon: facebook,
    link: "https://facebook.com",
  },
  {
    id: 2,
    name: "Instagram",
    icon: instagramword,
    link: "https://instagram.com",
  },
  {
    id: 4,
    name: "Pinterest",
    icon: pinterest,
    link: "https://pinterest.com",
  },
  {
    id: 5,
    name: "Spotify",
    icon: spotify,
    link: "https://open.spotify.com",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Web Design",
    value: 5,
  },
  {
    id: 2,
    title: "Web Development",
    value: 2,
  },
  {
    id: 3,
    title: "Freelance",
    value: 12,
  },
  {
    id: 4,
    title: "Business",
    value: 3,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "2023 - Present",
    title: "Product Designer",
    company: "Vortex",
    label: "Tech Firm",
    description:
      "Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products.",
    link: "vortex.com",
    logo: vortexLogo,
  },
  {
    id: 2,
    year: "2022 - 2023",
    title: "Senior UI/UX Designer",
    company: "PixelWorks",
    label: "Design Studio",
    description:
      "Provided leadership in UI/UX design, mentored junior designers, and collaborated with cross-functional teams for product excellence.",
    link: "pixelworks.io",
    logo: pixelworksLogo,
  },
  {
    id: 3,
    year: "2020 - 2022",
    title: "UI/UX Designer",
    company: "Athon",
    label: "Tech Start-up",
    description:
      "Led UI/UX design projects from concept to delivery, conducted user testing, and iterated designs for optimal user experience.",
    link: "athon.com",
    logo: athonLogo,
  },
];

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: "Figma",
    description: "Interface Design Tool",
    logo: figmaIcon,
    link: "https://www.figma.com",
  },
  {
    id: 2,
    title: "Notion",
    description: "Productivity Tool",
    logo: notionIcon,
    link: "https://www.notion.so",
  },
  {
    id: 3,
    title: "Webflow",
    description: "No Code Design Tool",
    logo: webflowIcon,
    link: "https://www.webflow.com",
  },
  {
    id: 4,
    title: "Framer",
    description: "No Code Design Tool",
    logo: framerIcon,
    link: "https://www.framer.com",
  },
  {
    id: 5,
    title: "Slack",
    description: "Productivity Tool",
    logo: slackIcon,
    link: "https://slack.com",
  },
  {
    id: 6,
    title: "Asana",
    description: "Productivity Tool",
    logo: asanaIcon,
    link: "https://www.asana.com",
  },
];

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Crafting visually captivating and user-friendly websites for online success.",
    icon: webDesignIcon,
    link: "/services",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Bringing ideas to life with robust and scalable web solutions.",
    icon: webDevIcon,
    link: "/services",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Creating visually stunning designs that captivate and engage audiences.",
    icon: graphicDesignIcon,
    link: "/services",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Elevating online visibility and driving organic traffic through strategies.",
    icon: seoOptIcon,
    link: "/services",
  },
];

export const myProjects: Project[] = [
  {
    id: 1,
    title: "Lantawi: Hyper-Local Weather on Edge",
    summary: "Offline forecasts on Raspberry Pi 4 using TFLite.",
    impact: "↓12% 24-hr temp RMSE on test region.",
    stack: ["Next.js", "TFLite", "Raspberry Pi", "Python"],
    links: { 
      code: "https://github.com/jomermandap/lantawi", 
      paper: "https://arxiv.org/abs/example" 
    },
  },
  {
    id: 2,
    title: "Portfolio Website",
    summary: "Modern portfolio built with Next.js 15 and Tailwind CSS.",
    impact: "95.7% Lighthouse performance score.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: { 
      code: "https://github.com/jomermandap/portfolio", 
      demo: "https://jomermandap.dev" 
    },
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    summary: "Analytics dashboard for small business inventory management.",
    impact: "↑23% inventory turnover rate for client.",
    stack: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    links: { 
      code: "https://github.com/jomermandap/dashboard", 
      demo: "https://dashboard-demo.vercel.app" 
    },
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    summary: "Custom GPT integration with document processing capabilities.",
    impact: "↓40% customer support response time.",
    stack: ["Python", "OpenAI API", "FastAPI", "Docker"],
    links: { 
      code: "https://github.com/jomermandap/ai-chat", 
      demo: "https://ai-chat-demo.vercel.app" 
    },
  },
  {
    id: 5,
    title: "Mobile Weather App",
    summary: "Cross-platform weather app with location-based forecasts.",
    impact: "4.8★ rating with 500+ downloads.",
    stack: ["React Native", "Expo", "OpenWeather API", "AsyncStorage"],
    links: { 
      code: "https://github.com/jomermandap/weather-app", 
      demo: "https://weather-app-demo.netlify.app" 
    },
  },
  {
    id: 6,
    title: "Task Management System",
    summary: "Collaborative project management tool with real-time updates.",
    impact: "↑35% team productivity metrics.",
    stack: ["Vue.js", "Socket.io", "MongoDB", "Express"],
    links: { 
      code: "https://github.com/jomermandap/task-manager", 
      demo: "https://task-manager-demo.herokuapp.com" 
    },
  },
];

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    description:
      "I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...",
    location: "New York City, USA.",
    avatar: client_1,
  },
  {
    id: 2,
    name: "John Anderson",
    description:
      "Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.",
    location: "Sydney, Australia.",
    avatar: client_2,
  },
  {
    id: 3,
    name: "Mark Davis",
    description:
      "Pragadesh's creativity and technical expertise transformed our website into a visually stunning platform.",
    location: "London, UK.",
    avatar: client_3,
  },
  {
    id: 4,
    name: "Laura Adams",
    description:
      "Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.",
    location: "Madrid, Spain.",
    avatar: client_4,
  },
];

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: "Web Design",
    price: "$50",
    description:
      "Crafting visually captivating and user-friendly websites for online success.",
    completedWorks: "25+",
    experience: "5+",
    totalHoursWorked: "500 hours",
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: "Web Dev",
    price: "$60",
    description:
      "Bringing ideas to life with robust and scalable web solutions.",
    completedWorks: "30+",
    experience: "6+",
    totalHoursWorked: "420 hours",
    icon: webDevIcon,
  },
  {
    id: 3,
    service: "Graphic Design",
    price: "$40",
    description:
      "Creating visually stunning designs that captivate and engage audiences.",
    completedWorks: "40+",
    experience: "8+",
    totalHoursWorked: "328 hours",
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: "SEO",
    price: "$70",
    description:
      "Elevating online visibility and driving organic traffic through strategies.",
    completedWorks: "20+",
    experience: "4+",
    totalHoursWorked: "223 hours",
    icon: seoOptIcon,
  },
];

export const faqData: FAQ[] = [
  {
    question: "Can you work with clients remotely?",
    answer:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes. Your website will provide an optimal user experience whether accessed via desktops, smartphones, or tablets.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.",
  },
  {
    question: "Can you integrate third-party tools into my website?",
    answer:
      "Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.",
  },
  {
    question: "How do you handle website revisions?",
    answer:
      "I value your input and collaboration throughout the design process. Upon completing an initial design, I encourage you to provide feedback. I incorporate your suggestions and revisions to ensure the final product aligns with your vision.",
  },
  {
    question: "Can you optimize my website?",
    answer:
      "Certainly! I incorporate search engine optimization (SEO) best practices into my development process. This includes using relevant keywords, optimizing meta tags, creating search-engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.",
  },
];

export const followerData: FollowerData[] = [
  {
    platform: "twitter",
    followers: "12.6K",
    url: "https://twitter.com/",
    icon: XLogo,
  },
  {
    platform: "Instagram",
    followers: "8.3K",
    url: "https://www.instagram.com/",
    icon: instagramIcon,
  },
  {
    platform: "LinkedIn",
    followers: "2.5K",
    url: "https://www.linkedin.com/",
    icon: linkedInIcon,
  },
];
