import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Sparkles } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'AI-Driven Automated Budgeting and Finance Platform',
      description:
        'A full-stack web-based platform for tracking income and expense transactions. Features a custom-trained AI model to automatically predict transaction category and type (income or expense), enabling intelligent financial analysis and reporting.',
      tools: ['Next.js', 'SQLite', 'Tailwind CSS', 'Prisma', 'Inngest', 'ArcJet', 'Shadcn UI'],
      github: 'https://github.com/kal-maker',
      type: 'Final Year Project',
      icon: Sparkles,
    },
    {
      title: 'Agriculture Information Android Application',
      description:
        'An Android application that provides practical agricultural information for farmers and agriculture enthusiasts. Includes a crop guide module detailing crop types, growing seasons, and cultivation duration, plus a pest control feature for identifying and managing common agricultural pests.',
      tools: ['Java', 'Android SDK', 'Retrofit', 'Glide', 'Android'],
      github: 'https://github.com/kal-maker',
      type: 'Mobile Application',
      icon: Code,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-cyan-400 mx-auto"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => {
          const Icon = project.icon
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-xl group cursor-pointer relative overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 glass rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs text-accent font-semibold px-3 py-1 glass rounded-full">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="text-xs px-3 py-1 glass rounded-full text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-slate-300 hover:text-accent transition-colors"
                  >
                    <Github size={20} />
                    <span className="font-medium">View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Projects

