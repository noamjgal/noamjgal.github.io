import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Beer Sheva Innovation District Analysis",
      description: "Developed urban simulation models and interactive 3D visualizations for optimizing infrastructure planning, serving 50,000+ users of the Beer Sheva Innovation District.",
      technologies: ["Python", "React", "deck.gl", "ETL"],
      link: "https://github.com/noamjgal"
    },
    {
      title: "Urban Vitality Laboratory Research",
      description: "Built ETL pipeline and supervised learning models for analyzing geospatial, physiological, and digital usage data in smart city environments.",
      technologies: ["Python", "Machine Learning", "Spatial Analytics"],
      link: "https://github.com/noamjgal"
    },
    {
      title: "Optimal Transport Neural Network",
      description: "Implemented an Input Convex Neural Network for probability density mapping, contributing to research presented at NeurIPS 2023.",
      technologies: ["PyTorch", "Python", "Machine Learning"],
      link: "https://github.com/noamjgal"
    },
    {
      title: "NYC Workforce Development Analytics",
      description: "Led analysis of municipal spending data and stakeholder surveys to create a comprehensive 4-year fiscal plan for over $300M in federal funds.",
      technologies: ["Data Analysis", "Policy Research", "Survey Analytics"],
      link: "https://github.com/noamjgal"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Noam J Gal</h1>
            <div className="flex space-x-4">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#resume" className="hover:text-blue-600">Resume</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Noam</h1>
          <p className="text-xl text-gray-600 mb-8">
            Geospatial Data Scientist specializing in urban analytics and machine learning. 
            Currently working on smart city solutions at MIT City Science&apos;s Negev Urban Research Laboratory, 
            with a background in mathematics and urban informatics.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/noamjgal" className="p-2 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/noam-gal/" className="p-2 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:noamjgal@gmail.com" className="p-2 hover:text-blue-600">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

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

      <section id="resume" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="prose max-w-none">
            <div className="mb-6">
              <h4 className="text-xl font-bold">Geospatial Data Scientist</h4>
              <p className="text-gray-600">Negev Urban Research (MIT City Science Lab) • July 2024 - Present</p>
              <ul className="list-disc pl-5">
                <li>Developing urban simulation models for infrastructure planning optimization</li>
                <li>Building ETL pipelines for urban mobility data analysis</li>
                <li>Creating interactive 3D visualizations using React and deck.gl</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold">Research Scientist</h4>
              <p className="text-gray-600">Hebrew University of Jerusalem • January 2024 - July 2024</p>
              <ul className="list-disc pl-5">
                <li>Led research on health and smart city environment interactions</li>
                <li>Developed machine learning models for geospatial and physiological data</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold">Machine Learning Research Assistant</h4>
              <p className="text-gray-600">Polymath Jr. (NSF REU) • June 2022 - August 2022</p>
              <ul className="list-disc pl-5">
                <li>Coauthored paper on generative flow for conditional sampling via optimal transport, presented at NeurIPS 2023</li>
                <li>Built an Input Convex Neural Network using PyTorch with custom loss function for optimal distribution mapping</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold">Communications and Data Analysis Intern</h4>
              <p className="text-gray-600">NYC Mayor&apos;s Office of Workforce Development • September 2021 - May 2022</p>
              <ul className="list-disc pl-5">
                <li>Managed cross-departmental project to create 4-year fiscal plan for $300M+ federal funds</li>
                <li>Analyzed workforce development spending data for regulatory compliance</li>
                <li>Conducted and analyzed policy surveys to inform municipal spending decisions</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Education</h3>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Hebrew University of Jerusalem</h4>
              <p className="text-gray-600">MA in Smart Cities and Urban Informatics • Class of 2024</p>
              <p className="text-gray-600">Fulbright Scholar</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Macaulay Honors College at Baruch College</h4>
              <p className="text-gray-600">BS in Mathematics • Class of 2022</p>
              <p className="text-gray-600">GPA: 3.98/4.0 • Summa Cum Laude</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'SQL', 'React', 'Machine Learning', 'ETL Pipelines', 
                'Spatial Analytics', 'Data Visualization', 'Docker', 'Git'].map((skill, index) => (
                <span key={index} className="bg-gray-200 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Noam J Gal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;