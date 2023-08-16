import {
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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Graduate Systems Engineer",
    company_name: "TATA CONSULTANCY SERVICES",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2017 - Jun 2019",
    points: [
      "Worked directly from the client’s office (United Utilities) alongside the BAU team.",
      "Worked on the configuration of Kepware OPC Server Telemetry outstations.",
      "Diligently installed the PLC and SCADA system in the lab and assisted with automated system issues.",
      "Worked with engineers to gain an excellent understanding of the ClearSCADA implementation schema.",
      "Adapted configuration packs for the telemetry configuration team and supported engineering systems.",
      "Gained advanced level skills in composing ClearSCADA structured text applications and libraries.",
      "Developed an understanding of systems/equipment used (SCADA, PLCE and HMI on water systems).",
    ],
  },
  {
    title: "Lead Systems Engineer (Contractor)",
    company_name: "BAKER HUGHES",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Jun 2020",
    points: [
      "Successfully delivered project requirements to engineer a new a Baker Hughes Aptara XTree into an existing field.",
      "Worked to ensure that changes to the SCU S/W are made accordingly to accommodate the additional well with a different XTree (Aptara).",
      "Worked alongside the hydraulic and electrical team, to support in providing design solutions and to ensure all solution are feasible.",
      "Produced and delivered the Functional Design Specification, used to present the completed product according to the client’s requirements.",
    ],
  },
  {
    title: "Assistant Project Manager ",
    company_name: "MECHAN CONTROLS PLC ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2020 - Feb 2022",
    points: [
      "Supervise, assign duties, and coordinate work schedules of information technology staff and assist them in resolving issues.",
      "Identify resource requirements and manage budgets for resource allocation.",
      "Develop new information communication procedures.",
      "Create, implement, and monitor detailed projects to ensure standards and deadlines are met.",
    ],
  },
  {
    title: "QA Engineer (Contractor)",
    company_name: "UNITED UTILITIES",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Dec 2022",
    points: [
"Assist with identification and addressing commissioning and malfunction issues.",
"Evaluate commissioning reports and instruction guidelines in accordance with the needs of the project.ClearSCADA configuration (DNP3, WITSDNP3 and OPC), enhancements and troubleshooting.", "Writing ClearSCADA Structured Text applications and libraries.", "Advanced system querying i.e. Generating complex SQL data retrieval for system reports, checks and troubleshooting."      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was Mohamed's mentor during his time at Northcoders. Mohamed was a keen student and loved getting involved in sprints. He got on very well with others and loved pair or group programming sessions. It was a pleasure having him on the course and I have no doubt he will go on to make a brilliant software engineer.",
    name: "Rayhaan Ugharadar",
    designation: "Mentor",
    company: "North Coders",
    image: "https://media.licdn.com/dms/image/C4E03AQEgylloJ3YtVg/profile-displayphoto-shrink_100_100/0/1647021594515?e=1697673600&v=beta&t=aDtUW0zof9m11RDviPQkqgNJKt-0QQa0Bf5QyIGp7C0",
  },
  {
    testimonial:
      "I had the pleasure of leading Mohamed during his time as a graduate software developer at Tata Consultancy Services. His dedication, adaptability, and collaborative nature were evident in every project. Mohamed's contributions greatly enriched our team, and I'm confident his skills will serve him well in his future endeavors.",
    name: "Anirudh Naraparaju",
    designation: "Team Lead",
    company: "TCS",
    image: "https://scontent.fman4-1.fna.fbcdn.net/v/t31.18172-8/17389247_10210075131648794_7936741646699029483_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Bm5YxyTll28AX_Z7Ow6&_nc_ht=scontent.fman4-1.fna&oh=00_AfCrh3zPHdpfvDBXPN_YAzvjxmWex4PS0pHQMg7lhYiMmw&oe=65040181",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
