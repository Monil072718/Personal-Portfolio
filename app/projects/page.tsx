"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
  const allProjects = [
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
        "An educational platform providing resources for students, parents, and educators. The website showcases the school's vision, curriculum, and facilities.",
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
        "A professional website for GP Financial Services, showcasing a wide range of financial and insurance solutions tailored to clients' needs. The site features detailed service descriptions, including loans, investments, and insurance plans. Visitors can explore client testimonials and easily get in touch through the integrated contact form. Designed to build trust and support client inquiries efficiently.",
      image: "/gpfinance.webp",
      technologies: ["Next.js", "Figma", "Tailwind"],
      link: "https://gpfinservices.com/",
    },
    {
      title: "Marketplace NFT platform",
      description:
        "A next-generation NFT marketplace for artists, collectors, and traders. Features secure transactions, decentralized ownership, and an active community.",
      image: "/marketplace.webp",
      technologies: ["React.Js", "Figma", "Tailwind"],
      link: "https://nft-sepia-chi.vercel.app/",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">Monil Nakrani</div>
            <div className="hidden md:flex space-x-8">
              <a href="/#home" className="hover:text-accent transition-colors">
                Home
              </a>
              <a href="/#about" className="hover:text-accent transition-colors">
                About
              </a>
              <a href="/#work" className="hover:text-accent transition-colors">
                Work
              </a>
              <a href="/projects" className="text-accent">
                Projects
              </a>
              <a href="/#contact" className="hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Projects Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <Button
              variant="outline"
              className="mr-4 hover:bg-accent hover:text-accent-foreground bg-transparent"
              onClick={() => (window.location.href = "/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>

          <h1 className="text-5xl font-bold text-center mb-8 gradient-text">All Projects</h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Explore my complete portfolio of web applications, from AI-powered platforms to comprehensive management
            systems.
          </p>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card
                key={index}
                className="glass-effect hover:scale-105 transition-all duration-300 hover:animate-glow overflow-hidden"
              >
                <div className="relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-accent text-accent text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="border-muted text-muted-foreground text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full hover:bg-accent hover:text-accent-foreground bg-transparent"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </Card>
            ))}
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
