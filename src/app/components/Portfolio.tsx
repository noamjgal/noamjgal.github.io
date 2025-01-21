import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first project",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "Description of your second project",
      technologies: ["Python", "Django", "PostgreSQL"],
      link: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 3",
      description: "Description of your third project",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "https://github.com/yourusername/project3"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Nav */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Your Name</h1>
            <div className="flex space-x-4">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#resume" className="hover:text-blue-600">Resume</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Your Name</h1>
          <p className="text-xl text-gray-600 mb-8">A brief description about yourself and what you do</p>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" className="p-2 hover:text-blue-600">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="p-2 hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="p-2 hover:text-blue-600">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Resume</h2>
          <div className="prose max-w-none">
            {/* Add your resume content here */}
            <h3>Experience</h3>
            <div className="mb-6">
              <h4>Company Name</h4>
              <p className="text-gray-600">Position • Date Range</p>
              <ul className="list-disc pl-5">
                <li>Achievement or responsibility</li>
                <li>Achievement or responsibility</li>
              </ul>
            </div>

            <h3>Education</h3>
            <div className="mb-6">
              <h4>University Name</h4>
              <p className="text-gray-600">Degree • Graduation Date</p>
            </div>

            <h3>Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-3 py-1 rounded-full">Skill 1</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">Skill 2</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">Skill 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;