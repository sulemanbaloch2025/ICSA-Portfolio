// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "ICSA",
  description:
    "Uniting Diversity, Igniting Excellence: Empowering Inclusivity in Computer Science across DePauw",
  siteUrl: "https://ICSA.com",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Events",
    ref: "works",
  },
  {
    name: "Expertise",
    ref: "skills",
  },
  {
    name: "Council Members ",
    ref: "timeline",
  },
  {
    name: "Get in Touch",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "or ICSA",
  "Home of International Tigers in Tech",
  "We inspire a passion in Tech",
  "Achieve your dream job",

];

export const EMAIL = "icsa@depauw.edu";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/icsa-at-depauw-006ab0214/",
  github: "https://github.com/ICSA2024",
  medium: "https://medium.com/@icsa",
  instagram: "https://www.instagram.com/icsa_depauw/",
  dribbble: "https://dribbble.com/ISCA2024",
  behance: "https://www.behance.net/icsaatdepauw",
  twitter: "https://twitter.com/icsa2024",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "LeetMentor - Boost Your Leet Skills Together!",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Learn the most crucial element of programming interviews",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://docs.google.com/document/d/1Ofsn4-sNpXBh32RR-4JDepocSzbtkiwTrZlBEukQM2w/edit?usp=sharing",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Cracking the Coding Interviews",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Learn about the various stages of interviews, including behavioral and technical aspects",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://docs.google.com/document/d/1fp22ePmF_ct_PNok9vdna1kJwZQyjQN2p2J6EKFH8ec/edit?usp=sharing",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "Resume Workshop",
    image: "/projects/alpha.jpg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Fix your resume and get more interviews",
    gradient: ["#172839", "#334659"],
    url: "https://docs.google.com/document/d/1qFfcpBiQRtWXil5gqqDCQTUZyr-I1ExWV7eEsC-EQV4/edit?usp=sharing",
    tech: ["illustrator", "javascript", "angular"],
  },
  {
    name: "Personal Portfolio Workshop",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Create your personal portfolio",
    gradient: ["#245B57", "#004741"],
    url: "https://docs.google.com/document/d/17e-FtCqjdDb4qvcgdzVNm3CsgJ1dpy1iY7v5ntdCy28/edit?usp=sharing",
    tech: ["figma", "angular", "gsap"],
  },
  {
    name: "ICSA Hackathon",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Participate in ICSA Hackathons and seize the opportunity to win prizes"
  ,
    gradient: ["#003052", "#167187"],
    url: "https://docs.google.com/document/d/1TqOf2l0cxus5wIVUPJk2XB12bmBQJo-5nOYjJFOrO3Q/edit?usp=sharing",
    tech: ["tailwind", "angular", "gsap", "figma"],
  },
  {
    name: "React.js Workshop",
    image: "/projects/ngx-quill-upload.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "Learn the fundamentals of a popular front-end framework",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://docs.google.com/document/d/1qy7_qYehOf_HTljEX0I3H87YaV2ScJXGFk6uTRBnNNU/edit?usp=sharing",
    tech: ["npm", "angular", "typescript"],
  },
  {
    name: "AWS Workshop",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "An introduction to Cloud technologies",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://docs.google.com/document/d/170F7KMe4lcZWHeo3BC0GL2uvydD_ctNzzIfmI0iLqlc/edit?usp=sharing",
    tech: ["javascript", "sass", "svg", "gulp"],
  },
  {
    name: "Node.js Workshop",
    image: "/projects/akgec.jpg",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Learn the fundamentals of backend programming",
    gradient: ["#5E4C06", "#746528"],
    url: "https://docs.google.com/document/d/1D6Vcqb2YeQwfHI0A4dn2eIIv-RVgebqkaBR5N9QfDnQ/edit?usp=sharing",
    tech: ["javascript", "html", "css"],
  },

  {
    name: "Much More to come...",
    image: "/projects/cardize.jpg",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "Stay tuned for more updates",
    gradient: ["#552A04", "#614023"],
    url: "https://docs.google.com/document/d/1menaRKVl-xwYeLZsonVkQRCWoFOLJ-YeWya6p5BpUnA/edit?usp=sharing",
    tech: ["javascript", "html", "css"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "President",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Suleman Baloch (Sul/Sully)",
    size: ItemSize.SMALL,
    subtitle: "Software Engineering Intern @ SportsExcitement, Class of 2024",
    image: "/timeline/Flag_of_Pakistan.jpg",
    slideImage: "/timeline/president.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Vice President ",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Phuoc Ong (Peter)",
    size: ItemSize.SMALL,
    subtitle:"Front-end Engineering Intern @ NolymitAI, Class of 2026",
    image: "/timeline/Flag_of_Vietnam.jpg",
    slideImage: "/timeline/flipkart.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Social Media Manager ",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Nan Lin Wah Sin Htoo (Nan Nan)",
    size: ItemSize.SMALL,
    subtitle:
      "Full-time Programming Instructor @ ID Tech Camps, Class of 2025",
      image: "/timeline/Flag-Myanmar.jpg",
    slideImage: "/timeline/huminos.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Treasurer",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Adhikari Manashi",
    size: ItemSize.SMALL,
    subtitle:
      "CS Major, Class of 2024",
    image: "/timeline/nepal-flag.jpg",
    slideImage: "/timeline/xda-rt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
