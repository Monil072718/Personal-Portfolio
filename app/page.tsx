"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Laptop,
  Layers,
  Cpu,
  ShieldCheck,
  Star,
  Send,
  Download,
  Calendar,
  Briefcase
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeProjectFilter, setActiveProjectFilter] = useState("all")
  const [activeSkillTab, setActiveSkillTab] = useState("frontend")
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [aboutInView, setAboutInView] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = aboutRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Keviot Tech",
      period: "2025 - Present",
      location: "Surat, India",
      description:
        "Architecting and shipping high-performance full-stack web applications, streamlining database schemas, and building production-ready Next.js solutions.",
      icon: <Laptop className="w-5 h-5 text-amber-500" />,
      skills: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
      highlights: [
        "Architected scalable cloud microservices reducing server response time by 35%",
        "Implemented end-to-end state management and type-safe GraphQL/REST APIs",
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Upwork & Direct Clients",
      period: "2025 - Present",
      location: "Remote / International",
      description:
        "Delivering bespoke full-stack solutions for global startups and businesses, guaranteeing responsiveness, clean code, and on-schedule delivery.",
      icon: <Globe className="w-5 h-5 text-amber-500" />,
      skills: ["MERN Stack", "React", "Node.js", "Tailwind CSS", "Stripe", "Prisma"],
      highlights: [
        "Shipped 20+ custom web apps with 100% 5-star client satisfaction",
        "Engineered AI integrations (OpenAI API, mock interview engines, ATS resume analyzers)",
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Swiftrut Technologies",
      period: "2024 - 2025",
      location: "Surat, India",
      description:
        "Built and maintained scalable cloud web applications using Next.js and Node.js. Collaborated on CI/CD deployment pipelines and automated test suites.",
      icon: <Code className="w-5 h-5 text-amber-500" />,
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs", "AWS"],
      highlights: [
        "Optimized frontend bundle sizes by 40% using dynamic imports and code splitting",
        "Developed automated regression and component testing workflows",
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Vermillion Tech",
      period: "2022 - 2024",
      location: "Surat, India",
      description:
        "Led full-stack web projects, designed robust RESTful APIs, and optimized React performance across high-traffic customer-facing web apps.",
      icon: <Database className="w-5 h-5 text-amber-500" />,
      skills: ["React", "JavaScript", "HTML5/CSS3", "Node.js", "MongoDB", "Git"],
      highlights: [
        "Built responsive client portals and dashboards utilized by 10,000+ active users",
        "Integrated payment gateways (PayPal, Stripe) with real-time webhook listeners",
      ]
    },
  ]

  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Building end-to-end web applications with modern architectures like MERN and Next.js. Robust backends, smooth frontends, and zero technical debt.",
      icon: <Layers className="w-6 h-6 text-amber-600" />,
      deliverables: ["Custom Web Apps", "Admin Dashboards", "SaaS Platforms", "REST & GraphQL APIs"],
    },
    {
      title: "Modern Frontend & UI/UX Engineering",
      description:
        "Crafting intuitive, accessible, and pixel-perfect web interfaces. Fluid micro-interactions, responsive across all screen sizes, and optimized for speed.",
      icon: <Smartphone className="w-6 h-6 text-amber-600" />,
      deliverables: ["Responsive Websites", "Design System Implementation", "Interactive Web UIs", "Performance Tuning"],
    },
    {
      title: "API Architecture & Database Design",
      description:
        "Designing scalable, secure API ecosystems and efficient database schemas with MongoDB, PostgreSQL, and Prisma with rock-solid authentication.",
      icon: <Database className="w-6 h-6 text-amber-600" />,
      deliverables: ["RESTful & GraphQL APIs", "Database Modeling", "JWT & OAuth Auth", "Payment Gateways"],
    },
    {
      title: "AI Integration & Automation",
      description:
        "Infusing cutting-edge AI capabilities into real-world business apps: OpenAI API integrations, smart resume scoring, interactive AI mock interviews, and automated workflows.",
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      deliverables: ["LLM / OpenAI Integrations", "AI Resume Scorer (ATS)", "Mock Interview Engines", "Workflow Automation"],
    },
  ]

  const allProjects = [
    {
      title: "CA Account Management",
      subtitle: "FULL STACK · ACCOUNTING & TAX",
      category: "fullstack",
      description:
        "Helped manage accounting-related business data digitally with intuitive account management dashboards, ledger records, and secure backend APIs. Implemented role-based access for accountants and business clients with real-time tax filing logs and secure document repositories.",
      image: "/projects/ca-management.jpg",
      technologies: ["React", "Python", "PostgreSQL", "Docker", "Tailwind CSS"],
      link: "https://fynivo.in/",
      featured: true,
      actionText: "View live platform",
    },
    {
      title: "Nilkanth IT Company",
      subtitle: "WEB PORTAL · IT SERVICES",
      category: "web",
      description:
        "Built a professional business website for an IT company, featuring comprehensive service sections, portfolio layout, and high-performance SEO optimization. Engineered with responsive modern design, service inquiry modals, technology stack highlights, and structured data schemas.",
      image: "/projects/nilkanth-it.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Figma"],
      link: "https://nilkanth-seven.vercel.app/",
      featured: true,
      actionText: "View live platform",
    },
    {
      title: "Data Management Company",
      subtitle: "ENTERPRISE · DATA PLATFORM",
      category: "web",
      description:
        "Created a sleek business website with Figma-based UI, structured service pages, responsive layout, and interactive data enterprise showcases. Constructed with type-safe TypeScript and Next.js for high SEO scores and rapid interactive performance.",
      image: "/projects/datalogie.jpg",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Figma"],
      link: "https://datalogie-web.vercel.app/",
      featured: true,
      actionText: "View live platform",
    },
    {
      title: "Taxi Booking & Travel Website",
      subtitle: "TRAVEL & MOBILITY · WEB PORTAL",
      category: "web",
      description:
        "Built a professional travel and taxi service website to showcase routes, vehicles, destinations, and allow customers to send booking inquiries easily with direct WhatsApp integration. Optimized for mobile travelers with instant contact triggers, transparent route listings, and fast image loading across Himalayan mountain passes.",
      image: "/projects/zangskar-taxi.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "WhatsApp API"],
      link: "https://zangskartaxiservice.com/",
      featured: true,
      actionText: "View live platform",
    },
    {
      title: "Hapihomes Ireland",
      subtitle: "REAL ESTATE · SUSTAINABLE HOUSING",
      category: "web",
      description:
        "Created a premium digital presentation for the real estate project in Ireland, highlighting sustainable housing designs, neighborhood amenities, and generating buyer enquiries. Features downloadable estate brochures, site plan maps, interactive unit availability, and direct booking consultations.",
      image: "/projects/hapihomes-ireland.jpg",
      technologies: ["Next.js", "Astro.io", "Tailwind CSS"],
      link: "https://www.hapihomes.ie/",
      featured: true,
      actionText: "View live platform",
    },
    {
      title: "Hapihomes Altadena",
      subtitle: "REAL ESTATE · LUXURY PROPERTIES",
      category: "web",
      description:
        "Created a premium digital presentation for the real estate project, showcasing architectural renderings, community amenities, floor plans, and generated high-intent buyer enquiries. Constructed with Astro and Next.js for rapid image delivery, virtual walkthrough galleries, and direct sales team routing.",
      image: "/projects/hapihomes-altadena.jpg",
      technologies: ["Next.js", "Astro.io", "Tailwind CSS", "TypeScript"],
      link: "https://www.altadenabuilds.com/",
      featured: true,
      actionText: "View live platform",
    },
    {
      title: "Logistics & Freight Forwarding Website",
      subtitle: "SUPPLY CHAIN · LOGISTICS",
      category: "web",
      description:
        "Showcase freight services, build trust, and generate cargo/shipping inquiries online with interactive quote request forms. Covers sea freight, air cargo, inland trucking, customs brokerage, and live container tracking inquiries.",
      image: "/projects/freightx-global.jpg",
      technologies: ["PHP", "HTML", "CSS", "JavaScript"],
      link: "https://freightxglobal.com/",
      featured: false,
      actionText: "View live platform",
    },
    {
      title: "Central Asian Museum – Cultural Heritage",
      subtitle: "CULTURE & HERITAGE · DIGITAL ARCHIVE",
      category: "web",
      description:
        "Developed a modern, responsive digital platform for the Central Asian Museum, showcasing its rich cultural heritage, historical significance, and museum highlights through engaging visual storytelling. Focused on intuitive navigation, structured content presentation, and seamless browsing across devices to create an accessible and informative experience for visitors, researchers, and cultural enthusiasts.",
      image: "/projects/central-asian-museum.jpg",
      technologies: ["Next.js", "React", "TypeScript", "Node.js"],
      link: "https://centralasianmuseum.org/",
      featured: false,
      actionText: "View live platform",
    },
    {
      title: "ALATOA – Adventure Tourism Portal",
      subtitle: "FULL STACK · TOURISM ASSOCIATION",
      category: "fullstack",
      description:
        "Engineered high-converting landing pages and dynamic adventure tourism member inquiry portals with responsive layout and secure backend connection. Integrated verified operator listings, adventure tour showcases, and automated lead routing for tour operators.",
      image: "/projects/alatoa-portal.jpg",
      technologies: ["Next.js", "Node.js", "React", "PostgreSQL", "Tailwind CSS", "TypeScript"],
      link: "https://alatoa.in/",
      featured: false,
      actionText: "View live platform",
    },
    {
      title: "ALHGHA – Hospitality Association Portal",
      subtitle: "FULL STACK · HOSPITALITY PORTAL",
      category: "fullstack",
      description:
        "Designed and engineered an all-in-one digital portal for the All Ladakh Hotel & Guest House Association (ALHGHA), streamlining member registrations, tourism inquiries, and association notices. Equipped with verified hotel listings, member verification workflows, and an administrative dashboard for announcements.",
      image: "/projects/alhgha-portal.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Node.js", "TypeScript"],
      link: "https://alhgha.com/",
      featured: false,
      actionText: "View live platform",
    },
    {
      title: "JPT Casters – Industrial Mobility",
      subtitle: "MANUFACTURING · ENTERPRISE CATALOG",
      category: "web",
      description:
        "Developed a corporate website for JPT Casters, a leading industrial mobility manufacturer in India. Founded in 2003, JPT has grown from a small workshop to a manufacturer serving over 1000 clients nationwide. The platform highlights their state-of-the-art facilities and extensive catalog of over 5000 casters and wheels.",
      image: "/projects/jpt-casters.webp",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      link: "https://www.jptcaster.com/",
      featured: false,
      actionText: "View live platform",
    },
    {
      title: "Downing Students – Student Living",
      subtitle: "FULL STACK · STUDENT HOUSING",
      category: "fullstack",
      description:
        "Developed a robust online platform for Downing Students, a premier provider of purpose-built student homes in the UK's top university cities for over 35 years. The platform allows students to easily explore accommodations, manage all-inclusive billings, and connect with a supportive community featuring 24/7 on-site teams and well-being initiatives.",
      image: "/projects/downing-students.webp",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "TypeScript"],
      link: "https://www.downingstudents.com/",
      featured: false,
      actionText: "View live platform",
    },
    {
      title: "Hospital Management System",
      subtitle: "FULL STACK · HEALTHCARE",
      category: "fullstack",
      description:
        "A clinical platform for patient records, appointment scheduling, doctor shifts and PayPal billing.",
      image: "/hms.png",
      technologies: ["React", "Node.js", "MongoDB", "PayPal", "Tailwind CSS", "Socket.io"],
      link: "https://patient-management-system-gules-eight.vercel.app/",
      featured: false,
      actionText: "View project details",
    },
    {
      title: "Wisume — AI Résumé Builder",
      subtitle: "AI & INNOVATION",
      category: "ai",
      description:
        "Check ATS compatibility in real time, generate résumé bullet points with AI and export custom templates.",
      image: "/wisum.jpg",
      technologies: ["React.js", "OpenAI API", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://wisume-one.vercel.app/",
      featured: false,
      actionText: "View live platform",
    },
    {
      title: "Invoice Management System",
      subtitle: "FULL STACK · FINTECH",
      category: "fullstack",
      description:
        "Production-grade financial invoicing application enabling multi-currency billing, client tracking and dynamic PDF generation.",
      image: "/inovice.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      link: "https://invoice-rouge-kappa.vercel.app/",
      featured: false,
      actionText: "View live platform",
    },
    {
      title: "Interview With AI",
      subtitle: "AI & INNOVATION",
      category: "ai",
      description:
        "Interactive mock technical interview platform that simulates realistic engineering interviews and live evaluations.",
      image: "/Interviewai.webp",
      technologies: ["React.js", "AI APIs", "Express.js", "MongoDB", "Node.js"],
      link: "https://interview-ai-xi-one.vercel.app/",
      featured: false,
      actionText: "View live platform",
    },
    {
      title: "Voranty – Expense & Warranty Manager",
      subtitle: "FULL STACK · PRODUCTIVITY",
      category: "fullstack",
      description:
        "Streamlined user and data management system with token authentication, full CRUD expense tracking and warranty alerts.",
      image: "/voranty.webp",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      link: "https://voranty-delta.vercel.app/",
      featured: false,
      actionText: "View project details",
    },
    {
      title: "GP Financial Services",
      subtitle: "WEB PORTAL · FINANCE",
      category: "web",
      description:
        "High-trust corporate financial advisory website showcasing comprehensive loans, insurance plans and inquiry workflows.",
      image: "/gpfinance.webp",
      technologies: ["Next.js", "Figma", "Tailwind CSS", "TypeScript"],
      link: "https://gpfinservices.com/",
      featured: false,
      actionText: "View live platform",
    },
    {
      title: "Seven Step School",
      subtitle: "WEB PORTAL · EDUCATION",
      category: "web",
      description:
        "Interactive educational portal providing comprehensive academic curriculum, admissions details and event calendars.",
      image: "/sevenstep.webp",
      technologies: ["React.js", "Tailwind CSS", "Figma"],
      link: "https://seven-step-school.vercel.app/",
      featured: false,
      actionText: "View project details",
    },
    {
      title: "Marketplace NFT Platform",
      subtitle: "WEB3 · DIGITAL ASSETS",
      category: "web",
      description:
        "Decentralized Web3 marketplace interface for digital creators and art collectors with sleek responsive views.",
      image: "/marketplace.webp",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      link: "https://nft-sepia-chi.vercel.app/",
      featured: false,
      actionText: "View live platform",
    },
  ]

  const filteredProjects =
    activeProjectFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeProjectFilter)

  const skillCategories = [
    { id: "frontend", label: "Frontend" },
    { id: "mobile", label: "Mobile Development" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases & ORM" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "auth", label: "Authentication & Security" },
    { id: "saas", label: "SaaS & Architecture" },
    { id: "ai", label: "AI / LLM Technologies" },
    { id: "payment", label: "Payment & Billing" },
    { id: "apis", label: "APIs & Integration" },
  ]

  const skillsByCategory: Record<string, string[]> = {
    frontend: [
      "Next.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Web Design",
      "SSG",
      "ISR",
      "Dynamic Routing",
      "SEO Optimization",
      "Performance Optimization",
    ],
    mobile: [
      "React Native",
      "Expo",
      "React Native CLI",
      "iOS App Development",
      "Android App Development",
      "Push Notifications",
      "Realtime Mobile Applications",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "GraphQL API Development",
      "MVC Architecture",
      "Service-Layer Architecture",
      "Webhooks",
      "Background Processing",
      "API Validation",
      "Rate Limiting",
      "Authentication & Authorization",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "MongoDB Mongoose",
      "Supabase",
      "Firebase",
      "Firestore",
      "Prisma ORM",
      "SQL",
      "Database Migrations",
      "Row-Level Security (RLS)",
    ],
    cloud: [
      "AWS",
      "Microsoft Azure",
      "Vercel",
      "Docker",
      "Cloudflare",
      "CDN",
      "Hostinger",
      "cPanel",
      "Deployment & Production Management",
      "Caching",
      "Structured Logging",
      "Performance Monitoring",
      "Production Debugging",
    ],
    auth: [
      "JWT",
      "OAuth 2.0",
      "SSO",
      "RBAC",
      "Supabase Auth",
      "Secure Sessions",
      "Row-Level Security",
      "API Security",
      "Input Validation",
      "Access Control",
      "OWASP Security Practices",
      "Secrets Management",
      "Webhook Signature Verification",
      "Idempotency",
    ],
    saas: [
      "Multi-Tenant SaaS Architecture",
      "SaaS MVP Development",
      "Scalable Backend Architecture",
      "Role-Based Access Control",
      "Subscription Architecture",
      "Marketplace Architecture",
      "CRM Development",
      "CMS Development",
      "Admin Dashboard Development",
      "Internal Business Tools",
      "Reporting Systems",
      "Workflow Automation",
    ],
    ai: [
      "OpenAI API",
      "ChatGPT API",
      "Claude API",
      "Google Gemini",
      "LangChain",
      "AI Agents",
      "RAG (Retrieval-Augmented Generation)",
      "AI Chatbots",
      "LLM Integration",
      "AI Automation",
      "AI-Powered Forms",
      "Content Generation",
      "Lead Qualification Automation",
      "Custom AI Tools",
      "Business Workflow AI Integration",
    ],
    payment: [
      "Stripe",
      "Stripe Connect",
      "Razorpay",
      "PayPal",
      "Stripe Billing Portal",
      "Stripe Subscriptions",
      "Stripe Invoices",
      "Stripe Webhooks",
      "Marketplace Payments",
      "Recurring Billing",
      "Third-Party Integration Tools",
    ],
    apis: [
      "Stripe",
      "Stripe Connect",
      "Razorpay",
      "PayPal",
      "Twilio",
      "OpenAI",
      "ChatGPT API",
      "Claude",
      "Gemini",
      "Supabase",
      "Firebase",
      "Jira",
      "Notion",
      "CRM APIs",
      "ERP APIs",
      "SaaS APIs",
      "Cloudflare",
      "Vercel",
      "AWS",
      "Microsoft Azure",
      "Hostinger",
      "REST APIs",
      "GraphQL APIs",
      "Third-Party API Integration",
      "Webhook Integration",
      "CRM Integration",
      "ERP Integration",
      "Payment Gateway Integration",
      "Authentication API Integration",
      "AI API Integration",
      "Legacy System Integration",
      "SaaS Platform Integration",
      "Automation Workflow Integration",
      "Webhook Retry Handling",
      "Signature Verification",
      "Idempotency Handling",
    ],
  }

  const testimonials = [
    {
      quote:
        "Monil is a phenomenal full-stack engineer. He took our rough concept and delivered a clean, fast, and scalable web application ahead of deadline. His attention to detail is unmatched.",
      author: "Alex Morgan",
      role: "Startup Founder & Product Lead",
      rating: 5,
    },
    {
      quote:
        "Outstanding communication and top-tier code quality. Monil built our invoice system with precision and thoughtful UI. Working with him was effortless and productive.",
      author: "Sarah Jenkins",
      role: "Operations Director",
      rating: 5,
    },
    {
      quote:
        "Monil's deep expertise in Next.js and API integrations helped us solve complex technical challenges with ease. Truly dependable and highly skilled developer.",
      author: "David Chen",
      role: "Engineering Manager",
      rating: 5,
    },
  ]

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setContactSubmitted(true)
    setTimeout(() => setContactSubmitted(false), 5000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 selection:bg-amber-100 selection:text-amber-900 relative">
      {/* =========================================================
          Top Navigation Bar
         ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-amber-100/70 transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollTo("home")
            }}
            className="text-2xl font-extrabold tracking-tight text-neutral-900 hover:text-amber-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md px-1"
          >
            Monil Nakrani<span className="text-[#F59E0B]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("home")
              }}
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("services")
              }}
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("about")
              }}
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              About
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("work")
              }}
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("skills")
              }}
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("projects")
              }}
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("contact")
              }}
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Right Action on Nav */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/Monil072718"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-neutral-600 hover:text-neutral-900 hover:bg-amber-100/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/monil072718"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-neutral-600 hover:text-[#0A66C2] hover:bg-amber-100/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="text-xs font-bold px-4 py-2 rounded-xl bg-[#F59E0B] text-neutral-950 hover:bg-[#D97706] shadow-2xs hover:shadow-sm transition-all duration-150 cursor-pointer"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-amber-100/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <nav aria-label="Mobile Navigation" className="md:hidden border-b border-amber-100/80 bg-[#FAF8F5] px-6 py-4 flex flex-col space-y-3 shadow-lg">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("home")
              }}
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("services")
              }}
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("about")
              }}
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              About
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("work")
              }}
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("skills")
              }}
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("projects")
              }}
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo("contact")
              }}
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* =========================================================
          Hero Section (Warm White, Yellow Accent, Floating Cards)
         ========================================================= */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
      >
        {/* Subtle ambient lighting & pattern in background */}
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute top-1/3 right-0 w-[550px] h-[550px] rounded-full bg-yellow-100/40 blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.04]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8 xl:gap-12">
            
            {/* Left Column: Hero Text, Actions & Stats */}
            <div className="flex flex-col justify-center text-left lg:col-span-6 xl:col-span-6">
              {/* Availability Badge */}
              <div className="animate-hero-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold mb-6 shadow-xs w-fit" style={{ animationDelay: "0ms" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for new projects</span>
              </div>

              {/* Headline */}
              <h1 className="animate-hero-fade-up font-sans text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.08]" style={{ animationDelay: "60ms" }}>
                Hi, I’m <span className="text-[#F59E0B]">Monil</span>
              </h1>

              {/* Role */}
              <p className="animate-hero-fade-up mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight" style={{ animationDelay: "120ms" }}>
                Web Developer
              </p>

              {/* Description */}
              <p className="animate-hero-fade-up mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-neutral-600" style={{ animationDelay: "180ms" }}>
                I build responsive websites and web applications with clean code and thoughtful interfaces.
              </p>

              {/* Action Buttons */}
              <div className="animate-hero-fade-up mt-8 flex flex-wrap items-center gap-4 sm:gap-5" style={{ animationDelay: "240ms" }}>
                {/* Primary Button */}
                <button
                  onClick={() => scrollTo("projects")}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#FBBF24] hover:bg-[#D97706] px-7 py-3.5 text-base font-bold text-neutral-950 shadow-md hover:shadow-lg transition-all duration-[180ms] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 cursor-pointer"
                >
                  <span>View My Projects</span>
                  <span
                    className="inline-block transition-transform duration-[180ms] ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>

                {/* Secondary Button */}
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center rounded-xl border border-neutral-300 bg-white hover:bg-[#FEF9C3] hover:border-amber-300 hover:text-amber-950 px-7 py-3.5 text-base font-semibold text-neutral-800 shadow-xs hover:shadow-sm transition-all duration-[180ms] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 cursor-pointer"
                >
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Experience Highlights / Stats Strip (Eliminates emptiness) */}
              <div className="animate-hero-fade-up mt-10 pt-7 border-t border-amber-200/60 flex items-center gap-6 sm:gap-8" style={{ animationDelay: "300ms" }}>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                    3+<span className="text-[#F59E0B]">.</span>
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5">Years Experience</p>
                </div>
                <div className="h-8 w-px bg-amber-200/60" />
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                    20+<span className="text-[#F59E0B]">.</span>
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5">Projects Built</p>
                </div>
                <div className="h-8 w-px bg-amber-200/60" />
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                    100%<span className="text-[#F59E0B]">.</span>
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Column: Portrait and Anchored Floating Cards */}
            <div className="flex flex-col items-center justify-center lg:col-span-6 xl:col-span-6">
              {/* Relative Portrait Wrapper: Cards anchor to this wrapper */}
              <div className="relative flex w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[450px] items-center justify-center mx-auto">
                {/* Two soft yellow CSS circles behind transparent portrait */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  {/* Larger pale cream circle */}
                  <div className="h-[370px] w-[370px] sm:h-[420px] sm:w-[420px] lg:h-[460px] lg:w-[460px] rounded-full bg-[#FEF9C3]/80 border border-amber-200/50" />
                  {/* Smaller warm yellow gradient circle, offset slightly to the right */}
                  <div className="absolute h-[290px] w-[290px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px] rounded-full bg-gradient-to-tr from-[#FDE047]/65 via-[#FBBF24]/50 to-[#F59E0B]/35 border border-amber-300/40 translate-x-4 sm:translate-x-6 lg:translate-x-8" />
                </div>

                {/* Portrait Image (black open overshirt and white crew-neck T-shirt, looking left) */}
                <div className="animate-portrait-in relative z-10 w-full flex justify-center">
                  <Image
                    src="/monil-portrait.png"
                    alt="Monil - Web Developer"
                    width={450}
                    height={465}
                    priority
                    className="w-full h-auto object-contain drop-shadow-none"
                  />
                </div>

                {/* Upper-Left Floating Card (Tablet & Desktop) */}
                <div
                  tabIndex={-1}
                  className="animate-hero-fade-up pointer-events-auto absolute z-20 hidden md:block -left-10 sm:-left-14 lg:-left-20 top-[30%] lg:top-[32%]"
                  style={{ animationDelay: "180ms" }}
                >
                  {/* Decorative yellow dot and thin curved doodle just above the card */}
                  <div className="relative mb-1 flex items-center gap-1.5 pl-3" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                    <svg className="overflow-visible" width="44" height="24" viewBox="0 0 44 24" fill="none">
                      <path
                        className="doodle-path"
                        d="M 2 20 C 14 4, 30 2, 42 12"
                        stroke="#F59E0B"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>

                  {/* Card Body */}
                  <div className="group cursor-default select-none rounded-2xl border border-amber-100/90 bg-white/95 px-4 py-3 shadow-[0_12px_30px_-4px_rgba(245,158,11,0.18),_0_6px_16px_-2px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-[transform,box-shadow] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_18px_36px_-4px_rgba(245,158,11,0.2),_0_8px_16px_-4px_rgba(0,0,0,0.08)]">
                    <div className="flex items-center gap-3">
                      {/* Pale-yellow rounded square with golden </> icon */}
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-[#FEF9C3] shadow-xs transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[2px]"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-4 w-4 text-[#D97706]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                          <line x1="14" y1="4" x2="10" y2="20" />
                        </svg>
                      </div>
                      {/* Card text on two lines */}
                      <div className="whitespace-nowrap text-left">
                        <div className="text-xs sm:text-sm font-bold leading-tight text-neutral-900">
                          Turning Ideas
                        </div>
                        <div className="text-xs sm:text-sm font-bold leading-tight text-neutral-900">
                          into Real Applications
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lower-Right Floating Card (Tablet & Desktop) */}
                <div
                  tabIndex={-1}
                  className="animate-hero-fade-up pointer-events-auto absolute z-20 hidden md:block -right-4 sm:-right-8 lg:-right-10 bottom-[12%] lg:bottom-[14%]"
                  style={{ animationDelay: "280ms" }}
                >
                  <div className="group cursor-default select-none rounded-2xl border border-amber-100/90 bg-white/95 px-4 py-3 shadow-[0_12px_30px_-4px_rgba(245,158,11,0.18),_0_6px_16px_-2px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-[transform,box-shadow] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_18px_36px_-4px_rgba(245,158,11,0.2),_0_8px_16px_-4px_rgba(0,0,0,0.08)]">
                    <div className="flex items-start gap-3">
                      {/* Pale-yellow rounded square with golden bar-chart icon and tiny golden dot */}
                      <div className="flex flex-col items-center gap-1.5" aria-hidden="true">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-[#FEF9C3] shadow-xs transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[2px]">
                          <svg className="h-4 w-4 text-[#D97706]" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="3" y="14" width="3.5" height="7" rx="1" />
                            <rect x="8.5" y="10" width="3.5" height="11" rx="1" />
                            <rect x="14" y="6" width="3.5" height="15" rx="1" />
                            <rect x="19.5" y="2" width="3.5" height="19" rx="1" />
                          </svg>
                        </div>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                      </div>
                      {/* Card text on four lines */}
                      <div className="flex flex-col whitespace-nowrap text-xs sm:text-sm font-bold leading-snug text-neutral-900">
                        <span>Build</span>
                        <span>Learn</span>
                        <span>Improve</span>
                        <span>Repeat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View: Cards stacked below portrait in a two-column row */}
              <div className="mt-8 grid w-full max-w-sm grid-cols-1 gap-3 sm:max-w-md sm:grid-cols-2 md:hidden">
                {/* Upper-Left Card (Mobile) */}
                <div
                  tabIndex={-1}
                  className="animate-hero-fade-up cursor-default select-none rounded-2xl border border-amber-100/90 bg-white/95 p-3.5 shadow-sm"
                  style={{ animationDelay: "180ms" }}
                >
                  <div className="mb-1.5 flex items-center gap-1.5 pl-1" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                    <svg className="overflow-visible" width="36" height="18" viewBox="0 0 44 24" fill="none">
                      <path
                        className="doodle-path"
                        d="M 2 20 C 14 4, 30 2, 42 12"
                        stroke="#F59E0B"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-[#FEF9C3] shadow-xs"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-3.5 w-3.5 text-[#D97706]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                        <line x1="14" y1="4" x2="10" y2="20" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold leading-tight text-neutral-900">
                        Turning Ideas
                      </div>
                      <div className="text-xs font-bold leading-tight text-neutral-900">
                        into Real Applications
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lower-Right Card (Mobile) */}
                <div
                  tabIndex={-1}
                  className="animate-hero-fade-up cursor-default select-none rounded-2xl border border-amber-100/90 bg-white/95 p-3.5 shadow-sm"
                  style={{ animationDelay: "280ms" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-1" aria-hidden="true">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-[#FEF9C3] shadow-xs">
                        <svg className="h-3.5 w-3.5 text-[#D97706]" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="3" y="14" width="3.5" height="7" rx="1" />
                          <rect x="8.5" y="10" width="3.5" height="11" rx="1" />
                          <rect x="14" y="6" width="3.5" height="15" rx="1" />
                          <rect x="19.5" y="2" width="3.5" height="19" rx="1" />
                        </svg>
                      </div>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 text-xs font-bold leading-tight text-neutral-900">
                      <span>Build</span>
                      <span>Learn</span>
                      <span>Improve</span>
                      <span>Repeat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tech Stack Strip in Hero (Eliminates empty feel) */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-amber-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Core Technologies</span>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL", "Docker", "AWS", "GraphQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white border border-amber-100 text-xs font-semibold text-neutral-700 shadow-2xs hover:border-amber-300 hover:text-amber-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Services / What I Do Section (Fills content gaps)
         ========================================================= */}
      <section id="services" className="py-24 px-6 border-t border-amber-100/70 bg-white/70 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80">
              Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-neutral-900 tracking-tight">
              What I Bring To Your Team
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto mt-3 text-base sm:text-lg">
              From conceptual design to scalable production deployment, I engineer resilient digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-7 bg-white border border-amber-100/90 rounded-2xl shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-amber-50 border border-amber-200/70 mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-2.5">
                    Key Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-amber-50/70 text-neutral-700 border border-amber-100"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          About Section (Matching White-and-Yellow Hero Theme)
         ========================================================= */}
      <section
        id="about"
        ref={aboutRef}
        className="py-24 px-6 lg:px-8 border-t border-amber-100/70 bg-[#FAF8F5] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Role, Bio & CTA */}
            <div className="flex flex-col justify-center text-left lg:col-span-6 xl:col-span-7">
              {/* Small "ABOUT ME" label with short gold line */}
              <div
                className={`flex items-center gap-2.5 mb-4 ${
                  aboutInView ? "animate-about-fade-up" : "opacity-0"
                }`}
                style={aboutInView ? { animationDelay: "0ms" } : {}}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
                  ABOUT ME
                </span>
                <span className="h-0.5 w-8 bg-[#F59E0B] rounded-full" aria-hidden="true" />
              </div>

              {/* Section Heading */}
              <h2
                className={`font-sans text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.12] ${
                  aboutInView ? "animate-about-fade-up" : "opacity-0"
                }`}
                style={aboutInView ? { animationDelay: "60ms" } : {}}
              >
                Get to know <span className="text-[#D97706]">me.</span>
              </h2>

              {/* Role */}
              <p
                className={`mt-2.5 text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight ${
                  aboutInView ? "animate-about-fade-up" : "opacity-0"
                }`}
                style={aboutInView ? { animationDelay: "120ms" } : {}}
              >
                Full-Stack Web Developer
              </p>

              {/* Bio Paragraph 1 */}
              <p
                className={`mt-5 text-base sm:text-lg leading-relaxed text-neutral-600 ${
                  aboutInView ? "animate-about-fade-up" : "opacity-0"
                }`}
                style={aboutInView ? { animationDelay: "180ms" } : {}}
              >
                I’m Monil Nakrani. I build web applications for startups and growing businesses, including SaaS platforms, admin dashboards, and CRM and CMS portals.
              </p>

              {/* Bio Paragraph 2 */}
              <p
                className={`mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 ${
                  aboutInView ? "animate-about-fade-up" : "opacity-0"
                }`}
                style={aboutInView ? { animationDelay: "240ms" } : {}}
              >
                I work with the MERN stack and TypeScript, and integrate payment systems, real-time features, and AI APIs.
              </p>

              {/* CTA Button */}
              <div
                className={`mt-8 ${
                  aboutInView ? "animate-about-fade-up" : "opacity-0"
                }`}
                style={aboutInView ? { animationDelay: "300ms" } : {}}
              >
                <button
                  onClick={() => scrollTo("projects")}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#FBBF24] hover:bg-[#D97706] px-7 py-3.5 text-base font-bold text-neutral-950 shadow-md hover:shadow-lg transition-all duration-[180ms] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 cursor-pointer"
                >
                  <span>View My Projects</span>
                  <span
                    className="inline-block transition-transform duration-[180ms] ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Developer Profile Panel */}
            <div
              className={`lg:col-span-6 xl:col-span-5 w-full ${
                aboutInView ? "animate-about-panel" : "opacity-0"
              }`}
              style={aboutInView ? { animationDelay: "180ms" } : {}}
            >
              <div className="bg-white rounded-3xl border border-amber-200/70 shadow-[0_12px_30px_-6px_rgba(245,158,11,0.08),0_6px_16px_-3px_rgba(0,0,0,0.04)] overflow-hidden">
                {/* Pale-yellow Header */}
                <div className="bg-[#FEF9C3]/80 border-b border-amber-200/70 px-6 py-4 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100/90 text-[#D97706]" aria-hidden="true">
                    <Code className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-wide">
                    Developer Profile
                  </h3>
                </div>

                {/* 2x2 Grid with Subtle Dividers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-amber-100/80 bg-white">
                  {/* Top-left cell: 20+ Projects / Completed */}
                  <div className="group p-6 flex items-start gap-4 cursor-default select-none transition-colors duration-[180ms] hover:bg-[#FEF9C3]/45">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-[#FEF9C3] shadow-2xs text-[#D97706] transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[2px]"
                      aria-hidden="true"
                    >
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-neutral-900 leading-tight">
                        20+ Projects
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
                        Completed
                      </p>
                    </div>
                  </div>

                  {/* Top-right cell: Full-Stack / Development */}
                  <div className="group p-6 flex items-start gap-4 cursor-default select-none border-t sm:border-t-0 border-amber-100/80 transition-colors duration-[180ms] hover:bg-[#FEF9C3]/45">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-[#FEF9C3] shadow-2xs text-[#D97706] transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[2px]"
                      aria-hidden="true"
                    >
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-neutral-900 leading-tight">
                        Full-Stack
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
                        Development
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider between top row and bottom row */}
                <div className="border-t border-amber-100/80" />

                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-amber-100/80 bg-white">
                  {/* Bottom-left cell: MERN + TypeScript / Core Stack */}
                  <div className="group p-6 flex items-start gap-4 cursor-default select-none transition-colors duration-[180ms] hover:bg-[#FEF9C3]/45">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-[#FEF9C3] shadow-2xs text-[#D97706] transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[2px]"
                      aria-hidden="true"
                    >
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-neutral-900 leading-tight">
                        MERN + TypeScript
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
                        Core Stack
                      </p>
                    </div>
                  </div>

                  {/* Bottom-right cell: Responsive / Interfaces */}
                  <div className="group p-6 flex items-start gap-4 cursor-default select-none border-t sm:border-t-0 border-amber-100/80 transition-colors duration-[180ms] hover:bg-[#FEF9C3]/45">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-[#FEF9C3] shadow-2xs text-[#D97706] transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[2px]"
                      aria-hidden="true"
                    >
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-neutral-900 leading-tight">
                        Responsive
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
                        Interfaces
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          Work Experience Section
         ========================================================= */}
      <section id="work" className="py-24 px-6 border-t border-amber-100/70 bg-white/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80">
              Career Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-neutral-900 tracking-tight">Work Experience</h2>
            <p className="text-neutral-600 max-w-xl mx-auto mt-3 text-base sm:text-lg">
              A track record of engineering scale-ready applications across teams and client projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {workExperience.map((job, index) => (
              <Card
                key={index}
                className="p-6 sm:p-7 bg-white border border-amber-100/80 rounded-2xl shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/70">{job.icon}</div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-600">{job.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{job.title}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[#D97706] font-semibold text-sm">{job.company}</span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-xs text-neutral-500">{job.location}</span>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mt-3">{job.description}</p>

                  {/* Bullet Highlights */}
                  <div className="mt-4 space-y-1.5">
                    {job.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-neutral-100">
                  {job.skills.map((skill) => (
                    <span key={skill} className="text-[11px] font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          Skills & Technologies Section
         ========================================================= */}
      <section id="skills" className="py-24 px-6 border-t border-amber-100/70 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-left sm:text-center mb-10">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-neutral-900 tracking-tight">Technical Skills</h2>
            <p className="text-neutral-600 max-w-xl sm:mx-auto mt-2 text-sm sm:text-base">
              A comprehensive breakdown of technologies, frameworks, and architecture patterns I specialize in.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
            {skillCategories.map((cat) => {
              const isActive = activeSkillTab === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveSkillTab(cat.id)}
                  className={`px-4 py-2 sm:px-4.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#FF5722] to-[#F4511E] text-white shadow-sm ring-1 ring-[#FF5722]"
                      : "bg-[#EAEFF4] text-[#475569] hover:bg-[#dfe5ec] hover:text-neutral-900"
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Active Category Skills Panel */}
          <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 shadow-xs">
            <h3 className="text-[#FF5722] font-bold text-base sm:text-lg mb-5">
              {skillCategories.find((c) => c.id === activeSkillTab)?.label || "Technical Skills"}
            </h3>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {(skillsByCategory[activeSkillTab] || []).map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-neutral-200 text-neutral-800 text-xs sm:text-sm font-medium shadow-2xs hover:border-[#FF5722]/60 hover:text-[#FF5722] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Projects Section (Matching Reference Design)
         ========================================================= */}
      <section id="projects" className="py-24 px-6 lg:px-8 border-t border-amber-100/70 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200/80 mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Featured <span className="font-serif font-bold text-[#A75A00]">Projects</span>
            </h2>
            <p className="max-w-xs md:text-right text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Production web applications for healthcare operations and AI-assisted résumé building.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10">
            {[
              { id: "all", label: "All Projects" },
              { id: "fullstack", label: "Full Stack" },
              { id: "ai", label: "AI & Innovation" },
              { id: "web", label: "Web Portals" },
            ].map((tab) => {
              const isActive = activeProjectFilter === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveProjectFilter(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#F59E0B] text-neutral-950 shadow-2xs"
                      : "bg-white text-neutral-600 border border-neutral-300 hover:border-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Projects Grid (Exact match to reference, 2 cols, showing top 6 on homepage) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
            {filteredProjects.slice(0, 6).map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-[28px] border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Top Image Container: Warm Beige Background with floating screen mockup */}
                  <div className="relative bg-gradient-to-b from-[#EFE5D8] via-[#E8D9C5] to-[#DFCEB6] p-6 sm:p-8 pt-8 sm:pt-10 flex items-end justify-center overflow-hidden h-64 sm:h-72 lg:h-80">
                    {/* Device screen mockup with black bezel */}
                    <div className="relative w-full max-w-[430px] rounded-t-2xl sm:rounded-t-3xl border-[6px] sm:border-[7px] border-b-0 border-neutral-900 bg-neutral-900 shadow-2xl translate-y-3 sm:translate-y-4 group-hover:translate-y-1 group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                      <div className="aspect-[16/10] overflow-hidden bg-white">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content Container */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Uppercase Category Subtitle */}
                      <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#A75A00] block mb-2">
                        {project.subtitle || (project.category === "fullstack" ? "FULL STACK · WEB APP" : project.category === "ai" ? "AI & INNOVATION" : "WEB PORTAL")}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-[26px] font-bold text-neutral-900 tracking-tight leading-snug mb-2.5">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technology Pills */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700 text-xs font-medium shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="pt-5 border-t border-neutral-100 flex items-center justify-between">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-neutral-900 hover:text-amber-700 transition-colors"
                      >
                        {project.actionText || "View live platform"}
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-neutral-950 flex items-center justify-center font-bold shadow-2xs hover:scale-110 transition-all cursor-pointer"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              size="lg"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-neutral-950 font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-sm sm:text-base"
              onClick={() => (window.location.href = "/projects")}
            >
              Explore All Projects Archive ({allProjects.length}) →
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          Testimonials Section (Social Proof / Richness)
         ========================================================= */}
      <section className="py-24 px-6 border-t border-amber-100/70 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80">
              Social Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-neutral-900 tracking-tight">
              Client Testimonials
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto mt-3 text-base sm:text-lg">
              Here's what collaborators and clients say about working together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <Card
                key={index}
                className="p-6 sm:p-7 bg-white border border-amber-100/80 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[#F59E0B]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-neutral-700 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100">
                  <h4 className="font-bold text-neutral-900 text-sm">{item.author}</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          Contact Section
         ========================================================= */}
      <section id="contact" className="py-24 px-6 border-t border-amber-100/70 bg-white/70 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 text-neutral-900 tracking-tight">Let’s Build Together</h2>
            <p className="text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
              Have a project in mind, need a full-stack engineer, or want to discuss an idea? Send a message or reach out directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-4">
              <Card className="p-6 bg-[#FAF8F5] border border-amber-100 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-100 text-amber-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">Email Me Directly</h4>
                    <a
                      href="mailto:nakranimonil18@gmail.com"
                      className="text-amber-700 hover:text-amber-900 font-semibold text-sm break-all mt-0.5 block"
                    >
                      nakranimonil18@gmail.com
                    </a>
                    <p className="text-xs text-neutral-500 mt-1">Typical reply time: within 4 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-[#FAF8F5] border border-amber-100 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-100 text-amber-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">Location</h4>
                    <p className="text-neutral-700 text-sm mt-0.5">Surat, Gujarat, India</p>
                    <p className="text-xs text-neutral-500 mt-1">Available for remote contracts worldwide</p>
                  </div>
                </div>
              </Card>

              {/* Direct Buttons */}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="https://github.com/Monil072718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 bg-white hover:border-amber-300 hover:bg-amber-50/50 transition-colors"
                >
                  <span className="flex items-center gap-3 font-semibold text-sm text-neutral-800">
                    <Github className="w-5 h-5 text-neutral-800" />
                    GitHub Profile
                  </span>
                  <ExternalLink className="w-4 h-4 text-neutral-400" />
                </a>

                <a
                  href="https://www.linkedin.com/in/monil072718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 bg-white hover:border-amber-300 hover:bg-amber-50/50 transition-colors"
                >
                  <span className="flex items-center gap-3 font-semibold text-sm text-neutral-800">
                    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                    LinkedIn Profile
                  </span>
                  <ExternalLink className="w-4 h-4 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-7">
              <Card className="p-7 sm:p-8 bg-white border border-amber-100 rounded-3xl shadow-xs">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Send a Message</h3>
                <p className="text-sm text-neutral-600 mb-6">
                  Fill in your details and I'll get back to you shortly.
                </p>

                {contactSubmitted ? (
                  <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                    <CheckCircle2 className="w-10 h-10 text-amber-600 mx-auto mb-2" />
                    <h4 className="font-bold text-neutral-900">Message Received!</h4>
                    <p className="text-sm text-neutral-600 mt-1">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[#FAF8F5]/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[#FAF8F5]/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Monil, I'd like to discuss a project..."
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[#FAF8F5]/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-neutral-950 font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Footer
         ========================================================= */}
      <footer className="py-10 px-6 border-t border-amber-100/70 bg-[#FAF8F5] text-neutral-600">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-bold text-neutral-900">
              Monil Nakrani<span className="text-[#F59E0B]">.</span>
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">Full Stack Web Developer • Surat, India</p>
          </div>
          <div className="flex items-center space-x-6 text-sm font-medium">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home") }} className="hover:text-amber-600">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about") }} className="hover:text-amber-600">About</a>
            <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo("work") }} className="hover:text-amber-600">Experience</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects") }} className="hover:text-amber-600">Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact") }} className="hover:text-amber-600">Contact</a>
          </div>
          <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Monil Nakrani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
