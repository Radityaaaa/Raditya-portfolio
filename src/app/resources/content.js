import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Raditya",
  lastName: "Wibowo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/profile.jpg",
  email: "agusraditya13@gmail.com",
  location: "Asia/Kuala_Lumpur", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Japanese「日本語」", "Bahasa Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Radityaaaa",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/agus-raditya-wibowo/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ranvm_/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Android Application</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Raditya, a full stack developer at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  cv: {
    display: true,
    link: "/files/Raditya_Wibowo_CV.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Raditya is a Bali-based full stack developer with a passion transforming complex technical 
        requirements into robust and elegant full-stack solutions. His work spans front-end user 
        experiences, back-end architecture, database design, and seamless API integrations.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Nadhira",
        timeframe: "2019 - Present",
        role: "Office Administrator",
        achievements: [
          <>
            Record Keeping and Data Management
          </>,
          <>
            Financial and Budgetary Support
          </>,
          <>
            Facilities and Equipment Management
          </>,
          <>
            Team Coordination and HR Support
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple platforms, improving
      //       design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line, contributing to a 15% increase
      //       in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Help University Malaysia",
        description: <>Bachelor of Information Technology.</>,
      },
      {
        name: "ITB Stikom Bali",
        description: <>Bachelor of Information System.</>,
      },
      {
        name: "Jadi Hacker",
        description: <>Studied website penetration testing.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Able to create application and analyse data using python.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Java",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  tools: {
    display: true, // set to false to hide this section
    title: "Tools",
    description: "Some tools that I've used...",
    items: [
      {
        name: "HTML5",
        icon: "/images/tools/html5.svg", // You'll need to add these icons to your public folder
        background: "neutral-background-medium"
      },
      {
        name: "CSS3",
        icon: "/images/tools/css3.svg",
        background: "neutral-background-medium"
      },
      {
        name: "JavaScript",
        icon: "/images/tools/js.svg",
        background: "neutral-background-medium"
      },
      {
        name: "MySQL",
        icon: "/images/tools/mysql.svg",
        background: "neutral-background-medium"
      },
      {
        name: "mongoDB",
        icon: "/images/tools/mongodb.svg",
        background: "neutral-background-medium"
      },
      {
        name: "Bootstrap",
        icon: "/images/tools/bootstrap.svg",
        background: "neutral-background-medium"
      },
      {
        name: "Tailwind",
        icon: "/images/tools/tailwind.svg",
        background: "neutral-background-medium"
      },
      {
        name: "Figma",
        icon: "/images/tools/figma.svg",
        background: "neutral-background-medium"
      },
      {
        name: "GitHub",
        icon: "/images/tools/github.svg",
        background: "neutral-background-medium"
      },
      {
        name: "React",
        icon: "/images/tools/react.svg",
        background: "neutral-background-medium"
      },
      {
        name: "Android",
        icon: "/images/tools/android.svg",
        background: "neutral-background-medium"
      },
      {
        name: "Unity",
        icon: "/images/tools/unity.svg",
        background: "neutral-background-medium"
      },
      {
        name: "VS Code",
        icon: "/images/tools/vs.svg",
        background: "neutral-background-medium"
      }
    ]
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
