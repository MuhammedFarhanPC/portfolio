import { 
  Mail, 
  Code2, 
  Brain, 
  Cpu, 
  Database, 
  Globe, 
  Terminal,
  Layers,
  Sparkles,
  Bot,
  Search,
  Scan,
  FileText,
  Eye,
  Workflow,
  Zap,
  MapPin,
  Send,
  Users
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

export const socialLinks = [
  { id: "github", icon: FaGithub, link: "https://github.com/muhammedfarhanpc" },
  { id: "linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/muhammed-farhan-p-c-1ab697330" },
  { id: "email", icon: Mail, link: "mailto:farhanartificialintelligence@gmail.com" },
];

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    category: "AI/ML",
    items: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "NLP", level: 88 },
      { name: "Data Science", level: 92 },
      { name: "Computer Vision", level: 80 },
      { name: "Generative AI", level: 95 },
    ],
  },
  {
    category: "Agentic AI",
    items: [
      { name: "LangChain", level: 90 },
      { name: "LangGraph", level: 85 },
      { name: "CrewAI", level: 80 },
      { name: "MCP", level: 75 },
    ],
  },
  {
    category: "Deployment",
    items: [
      { name: "Flask", level: 85 },
      { name: "Streamlit", level: 90 },
      { name: "FastAPI", level: 88 },
      { name: "Gradio", level: 80 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "Firebase", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 90 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Vercel", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Travel Planner",
    description: "Intelligent travel itinerary generator using GPT-4 and Google Maps API for personalized trip planning.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Python", "OpenAI", "Google Maps"],
    github: "#",
    demo: "#",
    icon: Globe
  },
  {
    id: 2,
    title: "RAG Chatbot",
    description: "Custom knowledge-base chatbot using Retrieval Augmented Generation with Pinecone and LangChain.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    tags: ["LangChain", "Pinecone", "Python", "FastAPI"],
    github: "#",
    demo: "#",
    icon: Bot
  },
  {
    id: 3,
    title: "AI Website Scanner",
    description: "Automated vulnerability and SEO scanner powered by AI for comprehensive website audits.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Selenium", "OpenAI", "React"],
    github: "#",
    demo: "#",
    icon: Search
  },
  {
    id: 4,
    title: "Agentic AI Assistant",
    description: "Multi-tool AI agent capable of web searching, coding, and file management autonomously.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    tags: ["LangGraph", "AutoGPT", "Python", "MCP"],
    github: "#",
    demo: "#",
    icon: Sparkles
  },
  {
    id: 5,
    title: "AI Resume Analyzer",
    description: "Smart ATS-friendly resume analyzer providing feedback and improvement suggestions using NLP.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
    tags: ["NLP", "Python", "Streamlit", "PyPDF2"],
    github: "#",
    demo: "#",
    icon: FileText
  },
  {
    id: 6,
    title: "AI SEO Analyzer",
    description: "Real-time SEO optimization suggestions and keyword density analysis using LLMs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "BeautifulSoup", "GPT-4", "Flask"],
    github: "#",
    demo: "#",
    icon: Zap
  },
  {
    id: 7,
    title: "CV Detection System",
    description: "Real-time object detection and tracking system using YOLOv8 and OpenCV for security surveillance.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    tags: ["YOLOv8", "OpenCV", "Python", "PyTorch"],
    github: "#",
    demo: "#",
    icon: Eye
  },
  {
    id: 8,
    title: "Gen AI Content Generator",
    description: "Marketing content engine for generating blogs, social media posts, and ad copies automatically.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Tailwind", "OpenAI", "Node.js"],
    github: "#",
    demo: "#",
    icon: Scan
  },
  {
    id: 9,
    title: "Autonomous AI Agent System",
    description: "Decentralized AI agents collaborating to solve complex tasks with minimal human intervention.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["CrewAI", "LangChain", "Python", "Docker"],
    github: "#",
    demo: "#",
    icon: Cpu
  },
  {
    id: 10,
    title: "Multi-Agent Workflow",
    description: "Enterprise-grade workflow automation using multi-agent systems for data processing and reporting.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["LangGraph", "FastAPI", "MongoDB", "React"],
    github: "#",
    demo: "#",
    icon: Workflow
  },
];

export const experience = [
  {
    title: "Technical Lead | IT Engineer | AI Trainer",
    company: "IPCS Global",
    period: "Jan 2026 – Apr 2026",
    description: [
      "Worked as a Technical Lead managing AI-focused technical activities and student project execution.",
      "Led AI and software-related project guidance sessions for students and trainees.",
      "Supported development and deployment of AI applications and intelligent automation systems.",
      "Mentored students in Machine Learning, Gen AI, RAG systems, and Agentic AI workflows.",
      "Coordinated technical implementation, debugging, deployment, and project optimization.",
      "Assisted in building scalable AI-based solutions using modern frameworks and tools."
    ],
    icon: Users,
    badges: ["Technical Lead", "AI Architecture", "Mentorship", "Deployment", "Gen AI"]
  },
  {
    title: "IT Engineer & AI Trainer",
    company: "IPCS Global",
    period: "2025 – 2026",
    description: [
      "Worked as an IT Engineer and AI Trainer handling modern technology solutions and AI-based learning.",
      "Guided students in building real-world AI, Machine Learning, and automation projects.",
      "Trained students in Python, AI tools, Gen AI concepts, and project development.",
      "Worked on Gen AI, RAG systems, Agentic AI workflows, and deployment-based applications.",
      "Supported practical implementation of intelligent systems and modern software solutions.",
      "Assisted students with hands-on AI project development and deployment workflows."
    ],
    icon: Brain,
    badges: ["AI", "IT", "Training", "Gen AI", "Machine Learning"]
  }
];

export const certifications = [
  {
    title: "AI and Data Science Engineer",
    issuer: "Certified Professional",
    date: "2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Python Certification",
    issuer: "Certified Professional",
    date: "2024",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400",
  }
];
