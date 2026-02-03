import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code,
  Database,
  Globe,
  Terminal,
  GitBranch,
  Layers,
  Zap,
  Cpu,
} from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const techStack = [
    { name: 'React.js', icon: Code, color: 'text-blue-400' },
    { name: 'Next.js', icon: Globe, color: 'text-white' },
    { name: 'JavaScript', icon: Terminal, color: 'text-yellow-400' },
    { name: 'Python', icon: Cpu, color: 'text-green-400' },
    { name: 'MongoDB', icon: Database, color: 'text-emerald-400' },
    { name: 'MySQL', icon: Database, color: 'text-blue-500' },
    { name: 'PostgreSQL', icon: Database, color: 'text-cyan-400' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-400' },
    { name: 'Docker', icon: Layers, color: 'text-blue-300' },
    { name: 'RESTful APIs', icon: Zap, color: 'text-purple-400' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="about"
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
            About Me
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-cyan-400 mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-4">Who I Am</h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            I'm a Junior Computer Science graduate from Wolayta Sodo University, passionate about
            building scalable web applications and AI-powered systems. With real-world internship
            experience at INSA, I've developed expertise in React, Next.js, and micro-frontend
            architectures.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg">
            I recently built an AI-driven budgeting and finance platform focused on intelligent
            transaction classification and usability. My approach combines technical excellence
            with a strong focus on user experience and performance.
          </p>
          <div className="pt-6 space-y-3">
            <div className="flex items-center text-slate-300">
              <span className="font-semibold mr-2">Location:</span>
              <span className="text-slate-400">Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex items-center text-slate-300">
              <span className="font-semibold mr-2">Education:</span>
              <span className="text-slate-400">BSc in Computer Science (2022-2026)</span>
            </div>
            <div className="flex items-center text-slate-300">
              <span className="font-semibold mr-2">Experience:</span>
              <span className="text-slate-400">Frontend Developer Intern at INSA</span>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-8">Tech Stack</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass p-4 rounded-lg text-center group cursor-pointer"
                >
                  <Icon
                    className={`w-8 h-8 mx-auto mb-2 ${tech.color} group-hover:scale-110 transition-transform`}
                  />
                  <p className="text-sm text-slate-300 font-medium">{tech.name}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="glass p-8 rounded-xl"
      >
        <h3 className="text-2xl font-semibold text-slate-200 mb-6">Work Experience</h3>
        <div className="space-y-6">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h4 className="text-xl font-semibold text-accent">
                Frontend Developer Intern
              </h4>
              <span className="text-slate-400 text-sm">June - August</span>
            </div>
            <p className="text-slate-300 font-medium mb-2">
              Information Network Security Administration (INSA) – Addis Ababa, Ethiopia
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 ml-4">
              <li>
                Developed and maintained user interfaces for the Inventory Information Management
                System, a core module of INSA's ERP platform
              </li>
              <li>
                Built responsive and reusable UI components using React.js and Material UI,
                following a component-based architecture
              </li>
              <li>
                Integrated frontend components with backend RESTful APIs, handling data fetching,
                form validation, and state management
              </li>
              <li>
                Collaborated with backend developers to ensure seamless data flow, usability, and
                consistency across the ERP system
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About


