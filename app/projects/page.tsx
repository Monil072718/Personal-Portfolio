"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Linkedin, Mail, Menu, X } from "lucide-react"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const allProjects = [
    {
      title: "Hospital Management System",
      category: "fullstack",
      description:
        "Comprehensive full-stack clinical platform with secure patient records, automated appointment scheduling, doctor shift management, and PayPal payment integration.",
      image: "/hms.png",
      technologies: ["React", "Node.js", "MongoDB", "Paypal", "Tailwind CSS", "Socket.io"],
      link: "https://patient-management-system-gules-eight.vercel.app/",
    },
    {
      title: "Wisume - AI-Driven Resume Builder",
      category: "ai",
      description:
        "An AI-powered resume platform built with MERN Stack that evaluates ATS compatibility in real time, generates AI-optimized bullet points, and exports custom templates.",
      image: "/wisum.jpg",
      technologies: ["React.js", "MongoDB", "Tailwind CSS", "Node.js", "OpenAI API"],
      link: "https://wisume-one.vercel.app/",
    },
    {
      title: "CA Account Management",
      category: "fullstack",
      description:
        "Helped manage accounting-related business data digitally with intuitive account management dashboards, ledger records, and secure backend APIs. Implemented role-based access for accountants and business clients with real-time tax filing logs and secure document repositories.",
      image: "/projects/ca-management.jpg",
      technologies: ["React", "Python", "PostgreSQL", "Docker", "Tailwind CSS"],
      link: "https://fynivo.in/",
    },
    {
      title: "Nilkanth IT Company",
      category: "web",
      description:
        "Built a professional business website for an IT company, featuring comprehensive service sections, portfolio layout, and high-performance SEO optimization. Engineered with responsive modern design, service inquiry modals, technology stack highlights, and structured data schemas.",
      image: "/projects/nilkanth-it.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Figma"],
      link: "https://nilkanth-seven.vercel.app/",
    },
    {
      title: "Data Management Company",
      category: "web",
      description:
        "Created a sleek business website with Figma-based UI, structured service pages, responsive layout, and interactive data enterprise showcases. Constructed with type-safe TypeScript and Next.js for high SEO scores and rapid interactive performance.",
      image: "/projects/datalogie.jpg",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Figma"],
      link: "https://datalogie-web.vercel.app/",
    },
    {
      title: "Taxi Booking & Travel Website",
      category: "web",
      description:
        "Built a professional travel and taxi service website to showcase routes, vehicles, destinations, and allow customers to send booking inquiries easily with direct WhatsApp integration. Optimized for mobile travelers with instant contact triggers, transparent route listings, and fast image loading across Himalayan mountain passes.",
      image: "/projects/zangskar-taxi.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "WhatsApp API"],
      link: "https://zangskartaxiservice.com/",
    },
    {
      title: "Hapihomes Ireland",
      category: "web",
      description:
        "Created a premium digital presentation for the real estate project in Ireland, highlighting sustainable housing designs, neighborhood amenities, and generating buyer enquiries. Features downloadable estate brochures, site plan maps, interactive unit availability, and direct booking consultations.",
      image: "/projects/hapihomes-ireland.jpg",
      technologies: ["Next.js", "Astro.io", "Tailwind CSS"],
      link: "https://www.hapihomes.ie/",
    },
    {
      title: "Hapihomes Altadena",
      category: "web",
      description:
        "Created a premium digital presentation for the real estate project, showcasing architectural renderings, community amenities, floor plans, and generated high-intent buyer enquiries. Constructed with Astro and Next.js for rapid image delivery, virtual walkthrough galleries, and direct sales team routing.",
      image: "/projects/hapihomes-altadena.jpg",
      technologies: ["Next.js", "Astro.io", "Tailwind CSS", "TypeScript"],
      link: "https://www.altadenabuilds.com/",
    },
    {
      title: "Logistics & Freight Forwarding Website",
      category: "web",
      description:
        "Showcase freight services, build trust, and generate cargo/shipping inquiries online with interactive quote request forms. Covers sea freight, air cargo, inland trucking, customs brokerage, and live container tracking inquiries.",
      image: "/projects/freightx-global.jpg",
      technologies: ["PHP", "HTML", "CSS", "JavaScript"],
      link: "https://freightxglobal.com/",
    },
    {
      title: "Central Asian Museum – Cultural Heritage",
      category: "web",
      description:
        "Developed a modern, responsive digital platform for the Central Asian Museum, showcasing its rich cultural heritage, historical significance, and museum highlights through engaging visual storytelling. Focused on intuitive navigation, structured content presentation, and seamless browsing across devices to create an accessible and informative experience for visitors, researchers, and cultural enthusiasts.",
      image: "/projects/central-asian-museum.jpg",
      technologies: ["Next.js", "React", "TypeScript", "Node.js"],
      link: "https://centralasianmuseum.org/",
    },
    {
      title: "ALATOA – Adventure Tourism Portal",
      category: "fullstack",
      description:
        "Engineered high-converting landing pages and dynamic adventure tourism member inquiry portals with responsive layout and secure backend connection. Integrated verified operator listings, adventure tour showcases, and automated lead routing for tour operators.",
      image: "/projects/alatoa-portal.jpg",
      technologies: ["Next.js", "Node.js", "React", "PostgreSQL", "Tailwind CSS", "TypeScript"],
      link: "https://alatoa.in/",
    },
    {
      title: "ALHGHA – Hospitality Association Portal",
      category: "fullstack",
      description:
        "Designed and engineered an all-in-one digital portal for the All Ladakh Hotel & Guest House Association (ALHGHA), streamlining member registrations, tourism inquiries, and association notices. Equipped with verified hotel listings, member verification workflows, and an administrative dashboard for announcements.",
      image: "/projects/alhgha-portal.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Node.js", "TypeScript"],
      link: "https://alhgha.com/",
    },
    {
      title: "JPT Casters – Industrial Mobility",
      category: "web",
      description:
        "Developed a corporate website for JPT Casters, a leading industrial mobility manufacturer in India. Founded in 2003, JPT has grown from a small workshop to a manufacturer serving over 1000 clients nationwide. The platform highlights their state-of-the-art facilities and extensive catalog of over 5000 casters and wheels.",
      image: "/projects/jpt-casters.webp",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      link: "https://www.jptcaster.com/",
    },
    {
      title: "Downing Students – Student Living",
      category: "fullstack",
      description:
        "Developed a robust online platform for Downing Students, a premier provider of purpose-built student homes in the UK's top university cities for over 35 years. The platform allows students to easily explore accommodations, manage all-inclusive billings, and connect with a supportive community featuring 24/7 on-site teams and well-being initiatives.",
      image: "/projects/downing-students.webp",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "TypeScript"],
      link: "https://www.downingstudents.com/",
    },
    {
      title: "Invoice Management System",
      category: "fullstack",
      description:
        "A production-grade financial invoicing application enabling multi-currency billing, client tracking, dynamic PDF invoice generation, and payment tracking.",
      image: "/inovice.png",
      technologies: ["React.js", "MongoDB", "Tailwind CSS", "Node.js", "Express"],
      link: "https://invoice-rouge-kappa.vercel.app/",
    },
    {
      title: "Interview With AI",
      category: "ai",
      description:
        "Interactive mock technical interview platform that simulates realistic engineering interview scenarios, providing live feedback and scoring.",
      image: "/Interviewai.webp",
      technologies: ["React.js", "MongoDB", "Tailwind CSS", "Node.js", "AI APIs"],
      link: "https://interview-ai-xi-one.vercel.app/",
    },
    {
      title: "Voranty – Expense, Warranty & Reminder System",
      category: "fullstack",
      description:
        "Full suite for user and data management with token authentication, expense tracking with full CRUD, custom budget rules, and warranty reminders.",
      image: "/voranty.webp",
      technologies: ["React.js", "MongoDB", "Tailwind CSS", "Node.js"],
      link: "https://voranty-delta.vercel.app/",
    },
    {
      title: "GP Financial Services",
      category: "web",
      description:
        "Professional corporate portal for GP Financial Services, showcasing financial advisory solutions, loan plans, client testimonials, and lead capture.",
      image: "/gpfinance.webp",
      technologies: ["Next.js", "Figma", "Tailwind CSS", "TypeScript"],
      link: "https://gpfinservices.com/",
    },
    {
      title: "Seven Step School",
      category: "web",
      description:
        "Educational web portal offering resources for students, parents, and educators. Showcases academic vision, interactive curriculum, and facilities.",
      image: "/sevenstep.webp",
      technologies: ["React.js", "Figma", "Tailwind CSS"],
      link: "https://seven-step-school.vercel.app/",
    },
    {
      title: "Marketplace NFT Platform",
      category: "web",
      description:
        "Next-generation decentralized NFT marketplace for digital creators, collectors, and traders with modern Web3 UI aesthetics.",
      image: "/marketplace.webp",
      technologies: ["React.js", "Figma", "Tailwind CSS", "Framer Motion"],
      link: "https://nft-sepia-chi.vercel.app/",
    },
    {
      title: "Digistic NFT",
      category: "web",
      description:
        "Decentralized digital art gallery and marketplace featuring interactive card transitions and clean modern Web3 layouts.",
      image: "/nft.webp",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      link: "https://digistic-nft-blond.vercel.app/",
    },
    {
      title: "SA Solar Technology",
      category: "web",
      description:
        "Clean energy and solar technology solutions for residential and industrial applications, promoting sustainable energy adoption.",
      image: "/solar.webp",
      technologies: ["Next.js", "Shadcn UI", "Tailwind CSS"],
      link: "https://sasolartechnology.inferoinfotech.com/",
    },
  ]

  const counts = {
    all: allProjects.length,
    fullstack: allProjects.filter((p) => p.category === "fullstack").length,
    ai: allProjects.filter((p) => p.category === "ai").length,
    web: allProjects.filter((p) => p.category === "web").length,
  }

  const filtered =
    filter === "all" ? allProjects : allProjects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Header (Matching Home Page Navbar) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-amber-100/70 transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/?home=1"
            className="text-2xl font-extrabold tracking-tight text-neutral-900 hover:text-amber-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md px-1"
          >
            Monil Nakrani<span className="text-[#F59E0B]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8">
            <a
              href="/?home=1#home"
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Home
            </a>
            <a
              href="/?home=1#services"
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Services
            </a>
            <a
              href="/?home=1#about"
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              About
            </a>
            <a
              href="/?home=1#work"
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Experience
            </a>
            <a
              href="/?home=1#skills"
              className="relative inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-amber-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Skills
            </a>
            <a
              href="/projects"
              className="relative inline-flex items-center text-sm font-bold text-neutral-950 transition-colors duration-[180ms] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2.5px] after:rounded-full after:bg-[#F59E0B] after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1.5 py-1"
            >
              Projects
            </a>
            <a
              href="/?home=1#contact"
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
            <a
              href="/?home=1#contact"
              className="text-xs font-bold px-4 py-2 rounded-xl bg-[#F59E0B] text-neutral-950 hover:bg-[#D97706] shadow-2xs hover:shadow-sm transition-all duration-150 cursor-pointer"
            >
              Let's Talk
            </a>
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
              href="/?home=1#home"
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Home
            </a>
            <a
              href="/?home=1#services"
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Services
            </a>
            <a
              href="/?home=1#about"
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              About
            </a>
            <a
              href="/?home=1#work"
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Experience
            </a>
            <a
              href="/?home=1#skills"
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Skills
            </a>
            <a
              href="/projects"
              className="text-base font-bold text-[#A75A00] py-1"
            >
              Projects
            </a>
            <a
              href="/?home=1#contact"
              className="text-base font-semibold text-neutral-800 hover:text-amber-600 py-1"
            >
              Contact
            </a>
            <div className="pt-2 flex items-center justify-between border-t border-amber-100">
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/Monil072718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-600 hover:text-neutral-900"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/monil072718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-600 hover:text-[#0A66C2]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <a
                href="/?home=1#contact"
                className="text-xs font-bold px-4 py-2 rounded-xl bg-[#F59E0B] text-neutral-950"
              >
                Let's Talk
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80">
            Portfolio Archive
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-3 text-neutral-900 tracking-tight">
            All Projects & Applications
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
            A comprehensive catalog of web applications, AI platforms, and enterprise solutions I have engineered.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: `All Projects (${counts.all})` },
              { id: "fullstack", label: `Full-Stack (${counts.fullstack})` },
              { id: "ai", label: `AI & Innovation (${counts.ai})` },
              { id: "web", label: `Web Portals (${counts.web})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#F59E0B] text-neutral-950 shadow-sm"
                    : "bg-white text-neutral-600 border border-amber-100 hover:border-amber-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, index) => (
            <Card
              key={index}
              className="bg-white rounded-3xl border border-amber-100/90 shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-48 bg-neutral-100 border-b border-amber-100/70">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{project.title}</h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-amber-200 bg-amber-50/70 text-amber-900 text-[11px] font-medium px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-neutral-300 hover:border-amber-400 hover:bg-amber-50 font-semibold rounded-xl"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2 text-amber-600" />
                  View Live Project
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-amber-100/70 bg-[#FAF8F5] text-center text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Monil Nakrani. All rights reserved.</p>
      </footer>
    </div>
  )
}
