import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Portfolio - Your Name</title>
        <meta name="description" content="Modern portfolio website inspired by Figma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm border-b border-fg-tertiary border-opacity-10 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-fg-primary">Your Name</h1>
            <div className="flex gap-8">
              <Link href="#projects" className="text-fg-secondary hover:text-fg-primary transition-colors">Projects</Link>
              <Link href="#about" className="text-fg-secondary hover:text-fg-primary transition-colors">About</Link>
              <Link href="#skills" className="text-fg-secondary hover:text-fg-primary transition-colors">Skills</Link>
              <Link href="#contact" className="text-fg-secondary hover:text-fg-primary transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
          <div
            className="transform transition-all duration-300"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-fg-primary mb-6 leading-tight">
              Build beautiful
              <br />
              things on the web
            </h2>
            <p className="text-xl text-fg-secondary max-w-2xl mb-12 leading-relaxed">
              Designer and developer crafting modern, intuitive digital experiences. Inspired by clean design principles and Figma's collaborative approach.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-accent-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-fg-primary text-fg-primary rounded-lg font-medium hover:bg-fg-primary hover:text-white transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-fg-primary mb-4">Selected Work</h3>
            <p className="text-fg-secondary mb-16">A selection of projects that showcase my design and development skills.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((project) => (
                <div
                  key={project}
                  className="group bg-white rounded-lg overflow-hidden border border-bg-tertiary hover:border-accent-primary transition-all hover:shadow-lg cursor-pointer"
                >
                  <div className="aspect-video bg-bg-tertiary flex items-center justify-center overflow-hidden">
                    <div className="text-6xl font-bold text-bg-tertiary group-hover:scale-110 transition-transform duration-300">
                      {project}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-fg-primary mb-2">Project Title {project}</h4>
                    <p className="text-fg-secondary mb-4">Brief description of your project and the technologies used.</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-bg-secondary text-sm text-fg-secondary rounded-full">React</span>
                      <span className="px-3 py-1 bg-bg-secondary text-sm text-fg-secondary rounded-full">TypeScript</span>
                      <span className="px-3 py-1 bg-bg-secondary text-sm text-fg-secondary rounded-full">Design</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-4xl font-bold text-fg-primary mb-6">About Me</h3>
                <div className="space-y-4 text-fg-secondary leading-relaxed">
                  <p>
                    I'm a designer and developer passionate about creating beautiful, functional digital experiences. My work is inspired by the collaborative and minimalist design principles I admire in tools like Figma.
                  </p>
                  <p>
                    With a background in both design and development, I bridge the gap between aesthetics and functionality. I believe great digital products come from thoughtful design and clean code.
                  </p>
                  <p>
                    When I'm not designing or coding, you'll find me exploring new design tools, contributing to open-source projects, or sharing my knowledge with the community.
                  </p>
                </div>
              </div>
              <div className="bg-bg-secondary rounded-lg p-8 flex items-center justify-center min-h-80">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-bg-tertiary mx-auto mb-4"></div>
                  <p className="text-fg-secondary">Your photo here</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-fg-primary mb-16">Skills & Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Design',
                  skills: ['UI/UX Design', 'Figma', 'Design Systems', 'Prototyping', 'Wireframing'],
                },
                {
                  title: 'Frontend Development',
                  skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript'],
                },
                {
                  title: 'Tools & Others',
                  skills: ['Git', 'Node.js', 'REST APIs', 'Problem Solving', 'Collaboration'],
                },
              ].map((category) => (
                <div key={category.title} className="bg-white rounded-lg p-8 border border-bg-tertiary hover:border-accent-primary transition-colors">
                  <h4 className="text-xl font-semibold text-fg-primary mb-4">{category.title}</h4>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-fg-secondary flex items-center">
                        <span className="w-2 h-2 bg-accent-primary rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-fg-primary mb-6">Let's Connect</h3>
            <p className="text-lg text-fg-secondary mb-12">
              I'm always interested in hearing about interesting projects and opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="px-8 py-3 bg-accent-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
              >
                Send an Email
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-fg-primary text-fg-primary rounded-lg font-medium hover:bg-fg-primary hover:text-white transition-all"
              >
                Follow on Twitter
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center mt-12">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-fg-secondary hover:text-accent-primary transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-bg-secondary border-t border-bg-tertiary">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-fg-secondary text-sm">
              © 2024 Your Name. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
