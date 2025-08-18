"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Vermillion Tech",
      period: "2022 - 2024",
      description: "Leading full-stack development projects and mentoring junior developers.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Full Stack Developer",
      company: "Swiftrut Technologies",
      period: "2024 - 2025",
      description: "Built scalable web applications using React, Node.js, and cloud technologies.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Full Stack Developer",
      company: "Infero Infotech",
      period: "2025 - Present",
      description: "Built and maintained scalable full-stack applications, enhancing functionality and performance.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Freelance Web Developer",
      company: "Upwork",
      period: "2025 - Present",
      description: "Delivered tailored web solutions to clients, ensuring quality, responsiveness, and timely delivery.",
      icon: <Database className="w-6 h-6" />,
    },
  ]

  const projects = [
    {
      title: "Hospital Management System",
      description:
        "A full-stack hospital management system with React, Node.js, and MongoDB. Features include patient registration, appointment scheduling, and medical record management.",
      image: "/hms.png",
      technologies: ["React", "Node.js", "MongoDB", "Paypal", "Tailwind", "Socket.io"],
      link: "https://patient-management-system-gules-eight.vercel.app/",
    },
    {
      title: "Invoice Management System",
      description:
        "A comprehensive invoice management system with features for creating, sending, and tracking invoices.",
      image: "/inovice.png",
      technologies: ["React.js", "MongoDB", "Tailwind", "Node.js"],
      link: "https://invoice-rouge-kappa.vercel.app/",
    },
    {
      title: "Wisume - AI-Driven Resume Builder",
      description:
        "An AI-powered resume platform built with MERN Stack that checks the ATS (Applicant Tracking System) score when a resume is uploaded. The platform provides detailed insights on how to improve the score, and with the help of AI, generates highly optimized content for resumes. Users can also select themes to generate professional resumes with high ATS compatibility.",
      image: "/wisum.jpg",
      technologies: ["React.js", "MongoDB", "Tailwind", "Node.js"],
      link: "https://wisume-one.vercel.app/",
    },
    {
      title: "Interview With AI",
      description:
        "An AI-powered platform that simulates real interview scenarios, providing users with a unique opportunity to practice and improve their interview skills.",
      image: "/Interviewai.webp",
      technologies: ["React.js", "MongoDB", "Tailwind", "Node.js", "MongoDB"],
      link: "https://interview-ai-xi-one.vercel.app/",
    },
    {
      title: "Seven Step School",
      description:
        "An educational platform providing resources for students, parents, and educators. The website showcases the school’s vision, curriculum, and facilities.",
      image: "/sevenstep.webp",
      technologies: ["React.js", "Figma", "Tailwind"],
      link: "https://seven-step-school.vercel.app/",
    },
    {
      title: "Voranty – Expense, Warranty & Reminder Management System",
      description:
        "The application offers a comprehensive suite of features to streamline user and data management. It includes secure user login with token-based authentication to ensure data privacy and integrity. Users can efficiently manage their expenses through full CRUD (Create, Read, Update, Delete) operations, as well as define and apply custom rules. The system also supports robust warranty management, enabling users to track and maintain warranty records with ease.",
      image: "/voranty.webp",
      technologies: ["React.js", "MongoDB", "Tailwind", "Node.js", "MongoDB"],
      link: "https://voranty-delta.vercel.app/",
    },
    {
      title: "GP Financial Services",
      description:
        "A professional website for GP Financial Services, showcasing a wide range of financial and insurance solutions tailored to clients’ needs. The site features detailed service descriptions, including loans, investments, and insurance plans. Visitors can explore client testimonials and easily get in touch through the integrated contact form. Designed to build trust and support client inquiries efficiently.",
      image: "/gpfinance.webp",
      technologies: ["Next.js", "Figma", "Tailwind"],
      link: "https://gpfinservices.com/",
    },
    {
      title: "Marketplace NFT platform",
      description:
        "A next-generation NFT marketplace for artists, collectors, and traders. Features secure transactions, decentralized ownership, and an active community.",
      image: "/marketplace.webp",
      technologies: ["React.Js",  "Figma", "Tailwind"],
      link: "https://nft-sepia-chi.vercel.app/",
    },
  ]

  const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      {
        name: "React",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-12 -11 24 22"
            className="w-10 h-10 text-brand"
            fill="none"
            aria-hidden="true"
          >
            <g stroke="currentColor" strokeWidth="0.9" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
            <circle cx="0" cy="0" r="1.8" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: "Bootstrap",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 118 94"
            width="40"
            height="32"
            className="w-10 h-10"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
            />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            aria-hidden="true"
          >
            {/* Simplified two-wave Tailwind mark (brand-like color) */}
            <path
              d="M2 12c3-2 6-2 9 0 3-2 6-2 11 0v6c-6-3-10-3-14 0-3-2-6-2-6-6z"
              fill="#06B6D4"
            />
            <path
              d="M2 7c3-1.5 6-1.5 9 0 3-1.5 6-1.5 11 0v2c-6-2.5-10-2.5-14 0-3-1.5-6-1.5-6-2z"
              fill="#38BDF8"
            />
          </svg>
        ),
      },
      {
        name: "Sass",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-8 h-8"
            aria-hidden="true"
          >
            {/* A clean stylized "S" mark for Sass (pink) */}
            <path
              d="M32 6c-8 0-12 6-12 12 0 8 10 6 10 12s-8 8-8 14 6 10 12 10c9 0 14-7 14-14 0-10-12-8-12-16 0-6 6-8 10-8 3 0 5 2 6 4"
              fill="#CC6699"
            />
          </svg>
        ),
      },
      {
        name: "Material UI",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            aria-hidden="true"
          >
            {/* Simplified MUI cube/hex mark */}
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#0073E6" />
            <path
              d="M6 7.5L12 11 18 7.5V16.5L12 20 6 16.5V7.5Z"
              fill="white"
              opacity="0.95"
            />
          </svg>
        ),
      },
      {
        name: "Redux",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            aria-hidden="true"
          >
            {/* Simplified redux atom: three orbits + center */}
            <circle cx="12" cy="12" r="1.4" fill="#764ABC" />
            <g stroke="#764ABC" strokeWidth="1.1" fill="none">
              <ellipse cx="12" cy="12" rx="6.8" ry="3.2" transform="rotate(0 12 12)" />
              <ellipse cx="12" cy="12" rx="6.8" ry="3.2" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="6.8" ry="3.2" transform="rotate(120 12 12)" />
            </g>
          </svg>
        ),
      },
      {
        name: "Next.js",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            aria-hidden="true"
          >
            {/* Minimal, bold 'N' mark for Next-like icon */}
            <rect width="24" height="24" rx="3" fill="#000" />
            <path
              d="M7 17V7h3l6 10h-3l-6-10"
              fill="white"
              transform="translate(0,0)"
            />
          </svg>
        ),
      },
    ],
  },

  {
    title: "Backend Technologies",
    skills: [
      {
        name: "Node.js",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-8 h-8"
            aria-hidden="true"
          >
            {/* Hexagon + "node" feel (green) */}
            <polygon points="128,8 232,72 232,184 128,248 24,184 24,72" fill="#3C873A" />
            <text x="50%" y="58%" textAnchor="middle" fontSize="60" fill="white" fontFamily="Arial" dy="0.18em">node</text>
          </svg>
        ),
      },
      {
        name: "MongoDB",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            aria-hidden="true"
          >
            {/* Stylized Mongo leaf */}
            <path
              d="M12 2s5 3 6 6c1 3-1 6-4 8-3 2-4 4-4 4s-1-2-4-4c-3-2-5-5-4-8C3 5 8 2 12 2z"
              fill="#47A248"
            />
          </svg>
        ),
      },
      {
        name: "Express.js",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 100"
            className="w-8 h-8"
            aria-hidden="true"
          >
            {/* Express is primarily typographic; simplified pill */}
            <rect x="0" y="20" width="300" height="60" rx="30" fill="#000" />
            <text x="50%" y="60%" fill="white" fontSize="40" fontFamily="Arial" textAnchor="middle" dy="0.15em">express</text>
          </svg>
        ),
      },
      {
        name: "Redis",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-8 h-8"
            aria-hidden="true"
          >
            {/* Redis-style cylinder stack (red) */}
            <ellipse cx="32" cy="10" rx="20" ry="6" fill="#DC382D" />
            <rect x="12" y="10" width="40" height="10" fill="#DC382D" />
            <rect x="12" y="22" width="40" height="10" fill="#C23028" />
            <rect x="12" y="34" width="40" height="10" fill="#A82220" />
            <ellipse cx="32" cy="46" rx="20" ry="6" fill="#8A1A1B" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <rect width="24" height="24" rx="3" fill="#3178C6" />
            <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="white" fontFamily="Arial" fontWeight="700">TS</text>
          </svg>
        ),
      },
    ],
  },

  {
    title: "DevOps",
    skills: [
      {
        name: "AWS",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-8 h-8" aria-hidden="true">
            {/* Simplified aws text + smile */}
            <path d="M8 40c8-6 16-6 24 0 8-6 16-6 24 0v6H8v-6z" fill="#FF9900"/>
            <text x="8" y="18" fontSize="10" fill="#222" fontFamily="Arial">amazon</text>
            <text x="8" y="30" fontSize="10" fill="#222" fontFamily="Arial">web services</text>
          </svg>
        ),
      },
      {
        name: "Kubernetes",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            {/* Helm wheel simplified */}
            <circle cx="12" cy="12" r="9" fill="#326CE5"/>
            <g fill="white">
              <circle cx="12" cy="12" r="2.2"/>
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
        ),
      },
      {
        name: "Docker",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-8 h-8" aria-hidden="true">
            {/* Simplified whale with containers */}
            <rect x="6" y="30" width="52" height="16" rx="2" fill="#2496ED"/>
            <rect x="10" y="22" width="8" height="8" fill="#6fbaf5"/>
            <rect x="22" y="18" width="8" height="12" fill="#6fbaf5"/>
            <rect x="34" y="22" width="8" height="8" fill="#6fbaf5"/>
            <path d="M8 34c6 6 14 8 24 8s18-2 24-8" fill="#1E88D1"/>
            <circle cx="44" cy="20" r="2" fill="#1976D2"/>
          </svg>
        ),
      },
      {
        name: "GitLab",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            {/* Simplified GitLab fox-triangle mark */}
            <polygon points="12,3 21,11 16,20 8,20 3,11" fill="#FC6D26"/>
            <polygon points="12,3 16,11 12,15 8,11" fill="#E24329" opacity="0.9"/>
          </svg>
        ),
      },
    ],
  },

  {
    title: "Version Control Tools",
    skills: [
      {
        name: "Bitbucket",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            <rect width="24" height="24" rx="3" fill="#0052CC"/>
            <path d="M6 7v10l6 3 6-3V7H6z" fill="white" opacity="0.98"/>
          </svg>
        ),
      },
      {
        name: "GitHub",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            {/* simplified octocat silhouette (circle + ears) */}
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <path d="M8 15c1-1 2-1 4-1s3 0 4 1c0 0 0-3-2-4 0 0 1-1 2-2-1 0-2 1-4 1-1 0-2 0-3-1-2 1-3 2-3 2 1 1 2 2 2 4z" fill="white" />
          </svg>
        ),
      },
      {
        name: "Slack",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            {/* simplified Slack hash with 4 colors */}
            <g>
              <rect x="4" y="2" width="3" height="10" rx="1.5" transform="rotate(15 4 2)" fill="#611F69"/>
              <rect x="8" y="2" width="3" height="10" rx="1.5" fill="#E01E5A" transform="rotate(-30 8 2)"/>
              <rect x="12" y="2" width="3" height="10" rx="1.5" fill="#ECB22E"/>
              <rect x="16" y="2" width="3" height="10" rx="1.5" fill="#2EB67D"/>
            </g>
          </svg>
        ),
      },
      {
        name: "Figma",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            <rect x="6" y="3" width="6" height="6" rx="3" fill="#F24E1E"/>
            <rect x="6" y="11" width="6" height="6" rx="3" fill="#A259FF"/>
            <rect x="12" y="3" width="6" height="6" rx="3" fill="#FF7262"/>
            <rect x="12" y="11" width="6" height="6" rx="3" fill="#1ABCFE"/>
            {/* simplified stacked representation */}
          </svg>
        ),
      },
    ],
  },

  {
    title: "Testing",
    skills: [
      {
        name: "Jest",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            <rect width="24" height="24" rx="4" fill="#C21325"/>
            <path d="M7 14s3-3 5-3 5 3 5 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <circle cx="9.5" cy="10.5" r="0.9" fill="white"/>
          </svg>
        ),
      },
      {
        name: "Mocha",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            {/* coffee-cup inspired mark */}
            <rect x="3" y="7" width="14" height="10" rx="2" fill="#8D6748"/>
            <path d="M17 9a3 3 0 010 6" stroke="#6b4f36" strokeWidth="1.4" fill="none" />
            <circle cx="7" cy="12" r="1.2" fill="#fff" opacity="0.12" />
          </svg>
        ),
      },
    ],
  },

  {
    title: "Agile Methodologies",
    skills: [
      {
        name: "Scrum",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            <circle cx="12" cy="12" r="9" fill="#0052CC"/>
            <path d="M7 12h10M12 7v10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        name: "Jira",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            <path d="M3 21l6-10 8-6 4 6-8 10H3z" fill="#0052CC"/>
          </svg>
        ),
      },
      {
        name: "Trello",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" fill="#0079BF"/>
            <rect x="6" y="6" width="4" height="12" rx="1" fill="white"/>
            <rect x="12" y="6" width="6" height="8" rx="1" fill="white" opacity="0.95"/>
          </svg>
        ),
      },
      {
        name: "Asana",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            <circle cx="12" cy="6.2" r="2.6" fill="#F06A6A" />
            <circle cx="8" cy="15.2" r="2.6" fill="#F06A6A" />
            <circle cx="16" cy="15.2" r="2.6" fill="#F06A6A" />
          </svg>
        ),
      },
    ],
  },

  {
    title: "Payment Gateway Integration",
    skills: [
      {
        name: "Razorpay",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            <rect width="24" height="24" rx="4" fill="#3395FF"/>
            <path d="M6 8h12v8H6z" fill="white" opacity="0.06"/>
            <path d="M7 12h10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "PhonePe",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            <rect width="24" height="24" rx="4" fill="#5F259F"/>
            <text x="50%" y="55%" textAnchor="middle" fontSize="9" fill="white" fontFamily="Arial" fontWeight="700">pp</text>
          </svg>
        ),
      },
      {
        name: "Paytm",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30" className="w-8 h-8" aria-hidden="true">
            <rect width="120" height="30" rx="5" fill="#00BAF2"/>
            <text x="20" y="20" fontSize="14" fill="white" fontFamily="Arial" fontWeight="700">paytm</text>
          </svg>
        ),
      },
      {
        name: "Google Pay",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            {/* GPay colored G + P simplified */}
            <rect width="24" height="24" rx="4" fill="white" />
            <path d="M6 8h6v2H8v6H6V8z" fill="#4285F4"/>
            <path d="M12 8h6v2h-6z" fill="#34A853"/>
            <path d="M12 12h6v2h-6z" fill="#FBBC05"/>
            <path d="M12 16h6v2h-6z" fill="#EA4335"/>
          </svg>
        ),
      },
      {
        name: "Stripe",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 24" className="w-8 h-8" aria-hidden="true">
            <rect width="64" height="24" rx="4" fill="#635BFF"/>
            <text x="50%" y="60%" textAnchor="middle" fontSize="10" fill="white" fontFamily="Arial" fontWeight="700">stripe</text>
          </svg>
        ),
      },
      {
        name: "PayPal",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 24" className="w-8 h-8" aria-hidden="true">
            <rect width="64" height="24" rx="4" fill="#00457C"/>
            <text x="50%" y="60%" textAnchor="middle" fontSize="10" fill="white" fontFamily="Arial" fontWeight="700">PayPal</text>
          </svg>
        ),
      },
      {
        name: "CCAvenue",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 24" className="w-8 h-8" aria-hidden="true">
            <rect width="64" height="24" rx="4" fill="#FF6600"/>
            <text x="50%" y="60%" textAnchor="middle" fontSize="9" fill="white" fontFamily="Arial" fontWeight="700">CCAvenue</text>
          </svg>
        ),
      },
      {
        name: "Apple Pay",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
            <rect width="24" height="24" rx="4" fill="black" />
            <path d="M15 7c-.6-.8-1.4-1.3-2.5-1.3-1 0-2 .6-2.6 1.3-.6.7-1 1.6-1 2.6 0 1.8 1 3.2 2.6 4.1 1.1.6 2.1 1 3.4 1 1 0 2-.4 2.6-1 1-1 1.5-2.5 1-3.9-.3-1-1.1-2-2.5-2.9z" fill="white"/>
          </svg>
        ),
      },
      {
        name: "Afterpay",
        logo: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 24" className="w-8 h-8" aria-hidden="true">
            <rect width="64" height="24" rx="4" fill="#B2FCE4"/>
            <text x="50%" y="60%" textAnchor="middle" fontSize="9" fill="#004" fontFamily="Arial" fontWeight="700">afterpay</text>
          </svg>
        ),
      },
    ],
  },
];


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">Monil Nakrani</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-accent transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-accent transition-colors">
                About
              </a>
              <a href="#work" className="hover:text-accent transition-colors">
                Work
              </a>
              <a href="#projects" className="hover:text-accent transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="mb-8 animate-float">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-4xl font-bold animate-glow">
                👨‍💻
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">Monil Nakrani</h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">I'm a Web Developer</p>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences through clean code, innovative solutions, and
              cutting-edge technologies.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center animate-float">
                  <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-6xl font-bold animate-glow">
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/30 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-primary/30 animate-pulse delay-1000"></div>
              </div>
            </div>
            <div className="animate-slide-in-right space-y-6">
              <Card className="p-6 glass-effect hover:animate-glow transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Hello, I'm a Web Developer</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  I’m a result-driven Full-Stack Web Developer with 𝟑+ 𝐲𝐞𝐚𝐫𝐬 of proven success building high-performance 𝐰𝐞𝐛 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬,𝐒𝐚𝐚𝐒 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦𝐬, 𝐚𝐝𝐦𝐢𝐧 𝐝𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝𝐬,𝐂𝐑𝐌/𝐂𝐌𝐒 𝐩𝐨𝐫𝐭𝐚𝐥𝐬, 𝐩𝐚𝐲𝐦𝐞𝐧𝐭 𝐬𝐲𝐬𝐭𝐞𝐦𝐬, and 𝐫𝐞𝐚𝐥-𝐭𝐢𝐦𝐞 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬 for startups and scaling businesses. I specialize in 𝐌𝐄𝐑𝐍 stack (MongoDB, Express.js, React.js, Node.js) with a modern twist: TypeScript, GraphQL, Prisma, CI/CD, Docker, Stripe, and AI API integrations.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Do you have an idea that feels impossible to ship? That "almost there" version you're scared to launch? That’s exactly what I help bring to life—fast, scalable, and production-ready.
                </p>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 glass-effect hover:scale-105 transition-all duration-300 hover:animate-glow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-accent/20 text-accent">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">3+ Years</h4>
                      <p className="text-sm text-muted-foreground">Experience</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 glass-effect hover:scale-105 transition-all duration-300 hover:animate-glow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">20+ Projects</h4>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 glass-effect hover:scale-105 transition-all duration-300 hover:animate-glow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-accent/20 text-accent">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Full-Stack</h4>
                      <p className="text-sm text-muted-foreground">Developer</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 glass-effect hover:scale-105 transition-all duration-300 hover:animate-glow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Responsive</h4>
                      <p className="text-sm text-muted-foreground">Design</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Work Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workExperience.map((job, index) => (
              <Card
                key={index}
                className={`p-6 glass-effect hover:scale-105 transition-all duration-300 hover:animate-glow ${index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
                  }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-accent/20 text-accent">{job.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-accent mb-2">{job.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{job.period}</p>
                    <p className="text-sm">{job.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Technologies & Skills</h2>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <h3 className="text-3xl font-bold text-center text-accent">{category.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <Card
                      key={skillIndex}
                      className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300 hover:animate-glow group cursor-pointer"
                    >
                      <div className="flex flex-col items-center justify-center space-y-3 text-center">
                        <div className="group-hover:scale-110 transition-transform duration-300">{skill.logo}</div>
                        <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                <div className="flex-1 animate-slide-in-left">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-accent text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.link}
                  </Button>
                </div>
                <div className="flex-1 animate-slide-in-right">
                  <div className="relative group">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-12">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" variant="outline" className="hover:bg-accent hover:text-accent-foreground bg-transparent">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-accent hover:text-accent-foreground bg-transparent">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button size="lg" className="animate-glow">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Portfolio. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
