/**
 * ============================================================
 *  PORTFOLIO CONFIGURATION FILE
 *  Edit this file to update your portfolio content.
 *  No need to touch index.html or style.css — ever.
 * ============================================================
 */

const PORTFOLIO_DATA = {

  // ── PERSONAL INFO ─────────────────────────────────────────
  name: "Rashed Hasan Bijoy ",
  tagline: "CSE Student & Aspiring Tech Innovator",
  headline: "Building Secure, Smart & Scalable Tech Solutions",
  bio: "I'm a Diploma Engineering student (7th Semester) at the intersection of Networking and Artificial Intelligence. Passionate about designing intelligent, secure systems — from configuring networks to crafting Python-powered solutions.",
  location: " Rakhalia Bazar,Raipur Upazila,Lakshmipur, Chattogram, Bangladesh",
  email: "rashedhassan881@gmail.com",
  phone: "01841310118",

  // ── SOCIAL LINKS ──────────────────────────────────────────
  social: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rashedhasanbijoy",
      icon: "fab fa-linkedin-in"
    },
    {
      label: "GitHub",
      url: "https://github.com/rashedhassan881-crypto",
      icon: "fab fa-github"
    },
    {
      label: "Email",
      url: "mailto:rashedhassan881@gmail.com",
      icon: "fas fa-envelope"
    }
  ],

  // ── ABOUT ME ──────────────────────────────────────────────
  about: {
    sliderImages: [
      "image/event1.jpg",
      "image/event2.jpg",
      "image/event3.jpg",
      "image/event4.jpg"
    ],
    paragraphs: [
      "I am a Diploma Engineering student currently in my 7th semester, deeply passionate about the intersection of networking and cutting-edge technology. With a strong foundational focus on Computer Networking and a keen interest in Artificial Intelligence, I am driven to build smart, secure, and scalable tech solutions.",
      "As I approach the completion of my diploma, I am eager to connect with industry professionals, take on challenging projects, and leverage my skills in Python programming, networking, and AI to drive impactful innovation."
    ],
    highlights: [
      { icon: "fas fa-network-wired", label: "Networking" },
      { icon: "fas fa-shield-alt",   label: "Cybersecurity" },
      { icon: "fas fa-brain",        label: "AI / ML" },
      { icon: "fab fa-python",       label: "Python" }
    ]
  },

  // ── SKILLS ────────────────────────────────────────────────
  // level: 0–100
  skills: [
    { name: "Cybersecurity",           level: 75, category: "Security"    },
    { name: "Python",                  level: 80, category: "Programming" },
    { name: "Computer Networking",     level: 85, category: "Networking"  },
    { name: "Cisco Packet Tracer",     level: 80, category: "Networking"  },
    { name: "HTML / Web Basics",       level: 65, category: "Web"         },
    { name: "Digital Marketing",       level: 60, category: "Marketing"   },
    { name: "Routing & Switching",     level: 75, category: "Networking"  },
    { name: "Generative AI",           level: 70, category: "AI"          }
  ],

  // ── CERTIFICATIONS ────────────────────────────────────────
  certifications: [
    {
      title: "What Is Generative AI?",
      issuer: "Online Platform",
      year: "2024",
      icon: "fas fa-robot"
    },
    {
      title: "Computer Networking Basics",
      issuer: "Online Platform",
      year: "2024",
      icon: "fas fa-network-wired"
    },
    {
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco / NetAcad",
      year: "2024",
      icon: "fas fa-server"
    },
    {
      title: "Final Evaluation AI & Cyber Security Essential",
      issuer: "Online Platform",
      year: "2024",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Fundamentals of Digital Marketing",
      issuer: "Google / Online Platform",
      year: "2024",
      icon: "fas fa-chart-line"
    }
  ],

  // ── EDUCATION ─────────────────────────────────────────────
  education: [
    {
      degree: "Diploma in Engineering",
      field: "Computer Science and Technology",
      institution: "Pricipal Kazi Faruky Institute of Science & Technology",
      period: "Jan 2023 – Jan 2027",
      status: "In Progress · 7th Semester",
      icon: "fas fa-microchip"
    },
    {
      degree: "HSC",
      field: "Accounting & Business Management",
      institution: "Raipur Govt. College",
      period: "Jan 2024 – Sep 2025",
      status: "Completed",
      icon: "fas fa-graduation-cap"
    },
    {
      degree: "SSC",
      field: "Accounting & Business Management",
      institution: "Principal Kazi Faruky School and College",
      period: "Jan 2021 – Apr 2022",
      status: "Completed",
      icon: "fas fa-school"
    }
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  // Add your real projects here
  projects: [
    {
      title: "Network Topology Simulator",
      description: "Designed and configured multi-layer network topologies using Cisco Packet Tracer, implementing RIP, OSPF routing protocols and VLAN segmentation.",
      tags: ["Cisco Packet Tracer", "Networking", "Routing"],
      icon: "fas fa-project-diagram",
      link: "#"
    },
    {
      title: "Python Cybersecurity Toolkit",
      description: "Built a lightweight Python-based toolkit for network scanning and basic vulnerability assessment as a learning project in ethical hacking fundamentals.",
      tags: ["Python", "Cybersecurity", "Scripting"],
      icon: "fas fa-terminal",
      link: "#"
    },
    {
      title: "AI Chatbot Exploration",
      description: "Explored and integrated Generative AI APIs to prototype a simple conversational assistant, studying prompt engineering and LLM behaviour.",
      tags: ["Python", "Generative AI", "NLP"],
      icon: "fas fa-robot",
      link: "#"
    }
  ]
};
