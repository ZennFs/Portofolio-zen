import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  nsc,
  simutu,
  sinora,
  simaset,
  ecommerce,
  laboran,
  php,
  laravel,
  mysql,
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
    title: "Laboran Komputer",
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
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Politeknik NSC Surabaya",
    icon: nsc,
    iconBg: "#383E56",
    date: "May 2023 - Febuary 2025",
    points: [
      "Co-developed the SIMUTU (Sistem Penjaminan Mutu) system with another backend developer using Laravel, focusing on building a robust admin panel.",
      "Collaboratively designed and implemented features for quality assurance processes, ensuring data integrity and system reliability.",
      "Optimized the admin panel for efficiency, user experience, and maintainability while adhering to project requirements.",
      "Participated in peer code reviews, promoting clean code practices and continuous improvement.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Politeknik NSC Surabaya",
    icon: nsc,
    iconBg: "#E6DEDD",
    date: "May 2023 - Febuary 2025",
    points: [
      "Independently designed and developed a comprehensive Meeting Minutes System (Sistem Notulen Rapat) using Laravel, Filament, and Tailwind CSS, focusing on an efficient admin panel for managing meeting documentation.",
      "Built end-to-end functionalities for handling meeting proposals, approvals, scheduling, minute-taking, photo uploads, and web-based invitations.",
      "Optimized the admin panel for performance, usability, and scalability to ensure smooth documentation and meeting workflows.",
      "Maintained high code quality through continuous testing and adherence to best practices.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Politeknik NSC Surabaya",
    icon: nsc,
    iconBg: "#383E56",
    date: "May 2023 - Febuary 2025",
    points: [
      "Solely architected and developed the SIMASET (Asset Management System) for Politeknik NSC Surabaya using Laravel, Filament, and Tailwind CSS.",
      "Engineered a robust asset management solution covering asset inventory, requests, procurement, purchasing, allocation, and lifecycle management.",
      "Implemented advanced features for asset maintenance, decommissioning, disposal, and reallocation, ensuring seamless tracking throughout the asset lifecycle.",
      "Designed and optimized a responsive, user-centric admin panel to streamline asset monitoring and management processes.",
    ],
  },
  {
    title: "Laboran",
    company_name: "Politeknik NSC Surabaya",
    icon: nsc,
    iconBg: "#E6DEDD",
    date: "May 2023 - Febuary 2025",
    points: [
      "Collaborated with a team to plan and execute the installation of a new computer laboratory at Politeknik NSC Surabaya.",
      "Handled the setup and configuration of hardware, networking, and software to ensure optimal performance and usability.",
      "Ensured proper cable management, network connectivity, and system security during the installation process.",
      "Conducted testing and troubleshooting to verify system stability and readiness for academic use.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "He's consistently delivers high-quality solutions with excellent problem-solving skills. His expertise and clear communication made complex projects run smoothly.",
    name: "Mohamad Akhsan Rofiqi",
    designation: "ICT Department Head",
    company: "Politeknik NSC Surabaya",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGpssZ5VrjwnQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678991433414?e=1746057600&v=beta&t=B4qsCtSi4ZOozR77OQt-dYpVkAj56SO1Um5N2gpSM4w",
  },
  {
    testimonial:
      "He's showed great technical skills and attention to detail. His work significantly improved our computer lab’s workflow and system efficiency.",
    name: "Deva Pratama Kurniawan",
    designation: "Head of Computer Laboratory",
    company: "Politeknik NSC Surabaya",
    image:
      "https://media.licdn.com/dms/image/v2/D5635AQG31kVC4eqhbQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738533726496?e=1740978000&v=beta&t=-2-sPE0ibiCf87RGssczZecPWNE2LO1658QEHU2oS2E",
  },
];

const projects = [
  {
    name: "SIMUTU GO",
    description:
      "A web-based quality assurance system (Sistem Penjaminan Mutu) focused on managing and streamlining institutional quality standards. Features include document management, audit tracking, and comprehensive reporting through an efficient admin panel.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "bootsrap", color: "green-text-gradient" },
      { name: "jquery", color: "pink-text-gradient" },
    ],
    image: simutu,
    source_code_link: "", // Private repository
  },
  {
    name: "SINORA",
    description:
      "A meeting minutes management system (Sistem Notulen Rapat) that streamlines meeting documentation, including proposal submissions, approvals, scheduling, minutes, photos, and web-based invitations, all managed through a responsive admin panel.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "filament", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: sinora,
    source_code_link: "", // Private repository
  },
  {
    name: "SIMASET",
    description:
      "An asset management system designed to handle asset inventory, procurement, allocation, maintenance, and decommissioning. The system streamlines asset tracking and lifecycle management through a robust admin panel.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "filament", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: simaset,
    source_code_link: "", // Private repository
  },
  {
    name: "E-COMMERCE",
    description:
      "A dynamic e-commerce platform enabling users to browse, search, and purchase products seamlessly. Features include product management, shopping cart, secure checkout, and order tracking.",
    tags: [
      { name: "laravel-filament", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/ZennFs/e-commerce", // Public repo
  },
  {
    name: "LAB. KOMPUTER",
    description:
      "A project focused on setting up and configuring a computer laboratory, including hardware installation, network configuration, and software deployment, ensuring optimal performance and usability for academic activities.",
    tags: [
      { name: "networking", color: "blue-text-gradient" },
      { name: "hardware", color: "green-text-gradient" },
      { name: "configuration", color: "pink-text-gradient" },
    ],
    image: laboran,
    source_code_link: "", // No repository
  },
];

export { services, technologies, experiences, testimonials, projects };
