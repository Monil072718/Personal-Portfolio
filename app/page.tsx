"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"
import Image from "next/image";

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
      technologies: ["React.Js", "Figma", "Tailwind"],
      link: "https://nft-sepia-chi.vercel.app/",
    },
  ]

  const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React", logo: "/skills/react.png" },
      { name: "Next.js", logo: "/skills/nextjs.png" },
      { name: "TypeScript", logo: "/skills/typescript.png" },
      { name: "JavaScript", logo: "/skills/javascript.png" },
      { name: "Bootstrap", logo: "/skills/bootstrap.png" },
      { name: "Tailwind CSS", logo: "/skills/tailwind.png" },
      { name: "Jquery", logo: "/skills/tailwind.png" },
      { name: "Sass", logo: "/skills/tailwind.png" },
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", logo: "/skills/node.png" },
      { name: "Express.js", logo: "/skills/express.png" },
      { name: "GraphQL", logo: "/skills/graphql.png" },
      { name: "REST API", logo: "/skills/api.png" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", logo: "/skills/mongodb.png" },
      { name: "MySQL", logo: "/skills/mysql.png" },
      { name: "PostgreSQL", logo: "/skills/postgresql.png" },
      { name: "Firebase", logo: "/skills/firebase.png" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", logo: "/skills/docker.png" },
      { name: "Kubernetes", logo: "/skills/kubernetes.png" },
      { name: "AWS", logo: "/skills/aws.png" },
      { name: "Vercel", logo: "/skills/vercel.png" },
      { name: "Netlify", logo: "/skills/netlify.png" },
      { name: "Heroku", logo: "/skills/heroku.png" },
    ],
  },
  {
    title: "Version Control & Tools",
    skills: [
      { name: "Git", logo: "/skills/git.png" },
      { name: "GitHub", logo: "/skills/github.png" },
      { name: "GitLab", logo: "/skills/gitlab.png" },
      { name: "Bitbucket", logo: "/skills/bitbucket.png" },
      { name: "Postman", logo: "/skills/postman.png" },
      { name: "VS Code", logo: "/skills/vscode.png" },
      { name: "Figma", logo: "/skills/figma.png" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest", logo: "/skills/jest.png" },
      { name: "Cypress", logo: "/skills/cypress.png" },
      { name: "Mocha", logo: "/skills/mocha.png" },
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
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Technologies & Skills
          </h2>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <h3 className="text-3xl font-bold text-center text-accent">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <Card
                      key={skillIndex}
                      className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300 hover:animate-glow group cursor-pointer"
                    >
                      <div className="flex flex-col items-center justify-center space-y-3 text-center">
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
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
