import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Miraga Aliyev",
  initials: "DV",
  url: "https://mirowo.com",
  location: "Azerbaijan, Baku",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a software developer and Open Source contributor. I like working on low level programming languages, IoT, embedded systems, cloud infrastructure and networking.",
  summary:
    "In 2016, I started my career as a game developer, building small games using [LÖVE2D](https://love2d.org/) and [Unity](https://unity.com/). Over the years, I transitioned into software development, building desktop applications, web applications and do coding challenges. Currently studying Computer Systems and Networking masters at Baku State University.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Nuxt",
    "Vue.js",
    "Typescript",
    "Node.js",
    "Python",
    "Rust",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C++",
    "VCS",
    "CI/CD",
    "Agile Methodologies",
    "Unit Testing",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "miraga.aliyev.qasim@bsu.edu.az",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AVMiraga",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mirowo/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:contact@mirowo.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Baku State University",
      href: "https://bdu.info.az",
      badges: [],
      location: "In Place",
      title: "Software Developer",
      logoUrl: "/bdu.jpeg",
      start: "Jan 2025",
      end: "Present",
      description:
        "Working as a software developer at Baku State University, focusing on building and maintaining various software applications and systems to support the university's operations and academic activities.",
    },
  ],
  education: [
      {
          school: "Baku State University",
          href: "https://bdu.info.az",
          degree: "Master of Computer Systems and Networking",
          logoUrl: "/bdu.jpeg",
          start: "2025",
          end: "2027",
      },
      {
          school: "Code Academy",
          href: "https://code.edu.az",
          degree: "Backend based Software Development on C# and .NET",
          logoUrl: "/code.webp",
          start: "2023",
          end: "2024",
      },
    {
      school: "Baku State University",
      href: "https://bdu.info.az",
      degree: "Bachelor of Computer Science",
      logoUrl: "/bdu.jpeg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Graduation invitation system",
        href: "",
      dates: "Mar 2025 - Jul 2025",
      active: true,
      description:
        "Worked on developing the Graduate Management System's frontend using Next.js and TailwindCSS.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        ".NET",
        "API",
        "CI/CD",
      ],
        links: [

        ],
      image: "/mezun.png",
        video: "",
    },
    {
      title: "DigitalGenc.az",
      href: "https://digitalgenc.az",
      dates: "Jul 2025 - Sep 2025",
      active: true,
      description:
        "Built the frontend for DigitalGenc.az, a platform to serve the youth of Azerbaijan with news, events, and resources.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI", "API", ".NET", "CI/CD",
      ],
      links: [
        {
          type: "Website",
          href: "https://digitalgenc.az",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/digitalgenc.png",
        video: "",
    },
    {
      title: "Rust Shell (rsh)",
        href: "",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "A rust based shell that aims to be a simple and efficient command-line interpreter. Works cross-platform and supports basic shell functionalities.",
      technologies: [
          "Rust",
          "Cargo",
          "CLI",
          "UNIX/Linux Shell",
          "Pipelines and Redirection",
          "Process Management",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AVMiraga/rsh",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rsh.png",
        video: "",
    },
    {
      title: "3D Library App",
        href: "",
      dates: "May 2025 - May 2025",
      active: true,
      description:
        "Developed a web application for managing library that dedicated to memorial of Musa Aliyev.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Shadcn UI",
        "Stripe",
          "Redis",
          "Fuzzy Logic",
      ],
      links: [
      ],
      image: "/library.png",
        video: "",
    },
      {
          title: "Management System for the Department of Humanitarian Affairs and Youth Policy\n",
          href: "",
          dates: "Sep 2025 - Dec 2025",
          active: true,
          description:
              "A web application for managing humanitarian and youth policy initiatives, providing resources and support for management",
          technologies: [
              "Next.js",
              "Typescript",
              "TailwindCSS",
              "Shadcn UI", "API", ".NET", "CI/CD",
          ],
          links: [
          ],
          image: "/hr-system.png",
          video: "",
      },
      {
          title: "Codemy",
          href: "",
          dates: "Jan 2025 - Apr 2025",
          active: true,
          description:
              "A web application for the course, allowing users to apply and get information about various courses offered.",
          technologies: [
              "Next.js",
              "Typescript",
              "TailwindCSS",
              "Shadcn UI", "API", ".NET", "CI/CD",
          ],
          links: [
          ],
          image: "/codemy.png",
          video: "",
      },
  ],
  hackathons: [
    {
      title: "Pasha Hackathon",
      dates: "May 2, 2025",
      location: "Baku, Azerbaijan",
      description:
        "A hackathon organized by Pasha Holding, focusing on innovative solutions in Insurtech.",
      image:
        "/pasha.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/AVMiraga/pashahackathon",
        },
      ],
    },
      {
          title: "Code8 Hackathon",
          dates: "Dec 6, 2024",
          location: "Baku, Azerbaijan",
          description:
              "A hackathon organized by Code Academy, focusing on building CRM solutions for businesses.",
          image:
              "/code8.png",
          links: [
              {
                  title: "Source",
                  icon: <Icons.github className="h-4 w-4" />,
                  href: "https://github.com/AVMiraga/hackathon24",
              },
          ],
      },
  ],
} as const;
