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
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Noam Gal</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium">About</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 font-medium">Projects</a>
              <a href="#resume" className="text-slate-600 hover:text-blue-600 font-medium">Resume</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold mb-6 text-slate-800">Hi, I'm Noam Gal</h1>
          <p className="text-xl text-slate-700 mb-8 max-w-3xl">
            Geospatial Data Scientist specializing in urban analytics and machine learning. 
            Currently working on smart city solutions at MIT City Science's Negev Urban Research Laboratory, 
            with a background in mathematics and urban informatics.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/noamjgal" 
               className="p-2 text-slate-600 hover:text-blue-600 transition-colors" 
               target="_blank" 
               rel="noopener noreferrer">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/noam-gal/" 
               className="p-2 text-slate-600 hover:text-blue-600 transition-colors" 
               target="_blank" 
               rel="noopener noreferrer">
              <Linkedin size={28} />
            </a>
            <a href="mailto:noamjgal@gmail.com" 
               className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-slate-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-slate-800">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
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

      <section id="resume" className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-slate-800">Experience</h2>
          <div className="prose max-w-none">
            <div className="mb-12">
              <h4 className="text-xl font-bold text-slate-800">Geospatial Data Scientist</h4>
              <p className="text-slate-600 mb-4">Negev Urban Research (MIT City Science Lab) • July 2024 - Present</p>
              <ul className="list-disc pl-5 text-slate-600">
                <li className="mb-2">Developing urban simulation models for infrastructure planning optimization</li>
                <li className="mb-2">Building ETL pipelines for urban mobility data analysis</li>
                <li className="mb-2">Creating interactive 3D visualizations using React and deck.gl</li>
              </ul>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-slate-800">Research Scientist</h4>
              <p className="text-slate-600 mb-4">Hebrew University of Jerusalem • January 2024 - July 2024</p>
              <ul className="list-disc pl-5 text-slate-600">
                <li className="mb-2">Led research on health and smart city environment interactions</li>
                <li className="mb-2">Developed machine learning models for geospatial and physiological data</li>
              </ul>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-slate-800">Machine Learning Research Assistant</h4>
              <p className="text-slate-600 mb-4">Polymath Jr. (NSF REU) • June 2022 - August 2022</p>
              <ul className="list-disc pl-5 text-slate-600">
                <li className="mb-2">Coauthored paper on generative flow for conditional sampling via optimal transport, presented at NeurIPS 2023</li>
                <li className="mb-2">Built an Input Convex Neural Network using PyTorch with custom loss function for optimal distribution mapping</li>
              </ul>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-slate-800">Communications and Data Analysis Intern</h4>
              <p className="text-slate-600 mb-4">NYC Mayor's Office of Workforce Development • September 2021 - May 2022</p>
              <ul className="list-disc pl-5 text-slate-600">
                <li className="mb-2">Managed cross-departmental project to create 4-year fiscal plan for $300M+ federal funds</li>
                <li className="mb-2">Analyzed workforce development spending data for regulatory compliance</li>
                <li className="mb-2">Conducted and analyzed policy surveys to inform municipal spending decisions</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-slate-800">Education</h3>
            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-800">Hebrew University of Jerusalem</h4>
              <p className="text-slate-600">MA in Smart Cities and Urban Informatics • Class of 2024</p>
              <p className="text-blue-600 font-medium">Fulbright Scholar</p>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-slate-800">Macaulay Honors College at Baruch College</h4>
              <p className="text-slate-600">BS in Mathematics • Class of 2022</p>
              <p className="text-blue-600 font-medium">GPA: 3.98/4.0 • Summa Cum Laude</p>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-slate-800">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['Python', 'JavaScript', 'SQL', 'React', 'Machine Learning', 'ETL Pipelines', 
                'Spatial Analytics', 'Data Visualization', 'Docker', 'Git', 'PostgreSQL'].map((skill, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Noam Gal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;