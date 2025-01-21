"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Moon, Sun, Calendar, Building, GraduationCap, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', String(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  const projects: Project[] = [
    {
      title: "Beer Sheva Innovation District Analysis",
      description: "Developed urban simulation models and interactive 3D visualizations for optimizing infrastructure planning, serving 50,000+ users of the Beer Sheva Innovation District.",
      technologies: ["Python", "React", "JavaScript", "deck.gl", "ETL"],
      link: "https://negevurbanresearch.github.io/dataviz_pages/"
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
      link: "https://openreview.net/pdf?id=LXGhneskDs"
    },
    {
      title: "NYC Workforce Development Analytics",
      description: "Led analysis of municipal spending data and stakeholder surveys to create a comprehensive 4-year fiscal plan for over $300M in federal funds.",
      technologies: ["Data Analysis", "Policy Research", "Survey Analytics"],
      link: "https://dol.ny.gov/system/files/documents/2023/09/nyc-local-plan-py-23-24-mod.pdf"
    }
  ];

  const experiences = [
    {
      title: "Geospatial Data Scientist",
      company: "Negev Urban Research (MIT City Science Lab)",
      period: "July 2024 - Present",
      responsibilities: [
        "Developing urban simulation models for infrastructure planning optimization",
        "Building ETL pipelines for urban mobility data analysis",
        "Creating interactive 3D visualizations using React and deck.gl"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Hebrew University of Jerusalem",
      period: "October 2024 - Present",
      responsibilities: [
        "Teaching spatial statistics exercises to MA students in the Smart Cities & Urban Informatics program",
        "Covering advanced topics including spatial autocorrelation, spatial autoregressive models (SAR), and spatial error models (SEM)",
        "Providing hands-on guidance in Python to implement spatial analysis techniques and statistical modeling"
      ]
    },
    {
      title: "Research Scientist",
      company: "Hebrew University of Jerusalem",
      period: "January 2024 - July 2024",
      responsibilities: [
        "Designed ETL pipelines for geospatial, physiological, and digital usage data collected by studies in the Urban Vitality Laboratory",
        "Developed machine learning classification model for physiological data",
        "Collaborated with an international team of scholars from the Hebrew University of Jerusalem, Sorbonne University, and the University of Salzburg to analyze the spatial components of stress in urban environments"
      ]
    },
    {
      title: "Machine Learning Research Assistant",
      company: "Polymath Jr. (NSF REU)",
      period: "June 2022 - August 2022",
      responsibilities: [
        "Coauthored paper on generative flow for conditional sampling via optimal transport, presented at NeurIPS 2023",
        "Built Input Convex Neural Networks using PyTorch with custom loss function to provide current state of the art results for distribution mapping",
        "Implemented novel optimization algorithms for probability density mapping"
      ]
    },
    {
      title: "Communications and Data Analysis Intern",
      company: "NYC Mayor's Office of Workforce Development",
      period: "September 2021 - May 2022",
      responsibilities: [
        "Managed cross-departmental project to create data-driven insights for a 4-year fiscal plan to spend $300M+ federal funds",
        "Analyzed workforce development spending data for regulatory compliance that were submitted to the New York State Department of Labor",
        "Conducted and analyzed policy surveys to inform municipal and state policy, which were successfully used to obtain a spending cap waiver from the US Department of Labor"
      ]
    }
  ];

  const education = [
    {
      school: "Hebrew University of Jerusalem",
      degree: "MA in Smart Cities and Urban Informatics",
      period: "Class of 2024",
      achievements: ["Fulbright Scholar", "GPA: 96/100"]
    },
    {
      school: "Macaulay Honors College at Baruch College",
      degree: "BS in Mathematics",
      period: "Class of 2022",
      achievements: ["GPA: 3.98/4.0", "Summa Cum Laude", "Portz Interdisciplinary Research Fellow"]
    }
  ];

  const skills = [
    "Python",
    "JavaScript",
    "SQL",
    "ML",
    "Data Viz",
    "ETL",
    "GIS",
    "Spatial Analytics",
    "Remote Sensing",
    "Git",
    "Docker",
    "React",
    "PyTorch",
    "Geopandas",
    "Pandas",
    "Scikit-Learn",
    "Hugging Face",
    "Flask",
    "Django",
    "Next.js",
    "Tailwind",
    "PostgreSQL",
    "PostGIS",
    "QGIS"
  ];

  const themeClasses = {
    background: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    secondaryText: darkMode ? 'text-gray-300' : 'text-gray-600',
    card: darkMode ? 'bg-gray-800' : 'bg-white',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    hover: darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
    icon: darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300',
    skill: darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600',
    cardHover: darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50',
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} transition-colors duration-200`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${themeClasses.card}/90 backdrop-blur-md shadow-sm z-50`}>
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold tracking-tight">Noam J Gal</h1>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6 text-sm font-medium">
                <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
                <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
                <a href="#resume" className="hover:text-blue-500 transition-colors">Resume</a>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${themeClasses.icon} transition-colors`}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 ${themeClasses.border}`}>
              <Image
                src="/Hat-Pic.jpeg"
                alt="Noam J Gal"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Hi, I&apos;m Noam</h1>
              <p className={`text-base md:text-lg mb-6 leading-relaxed max-w-2xl ${themeClasses.secondaryText}`}>
                A Geospatial Data Scientist specializing in urban analytics and machine learning. 
                Currently working on smart city solutions at MIT City Science&apos;s Negev Urban Research Laboratory.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: <Github size={20} />, href: "https://github.com/noamjgal", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/noam-gal/", label: "LinkedIn" },
              { icon: <Mail size={20} />, href: "mailto:noamjgal@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`p-2.5 rounded-full ${themeClasses.icon} transition-all duration-200 hover:scale-105`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${themeClasses.card} rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl ${themeClasses.cardHover}`}
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className={`mb-4 text-sm leading-relaxed ${themeClasses.secondaryText}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${themeClasses.skill}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 text-sm font-medium group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ExternalLink className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="resume" className={`py-16 px-4 ${themeClasses.card}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative pl-6 ${themeClasses.cardHover} rounded-lg p-4 transition-all duration-200`}>
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-full" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-bold">{exp.title}</h4>
                  <div className={`flex items-center text-sm ${themeClasses.secondaryText}`}>
                    <Building size={16} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className={`flex items-center text-sm ${themeClasses.secondaryText} mb-3`}>
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
                <ul className={`space-y-2 text-sm ${themeClasses.secondaryText}`}>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className={`${themeClasses.cardHover} rounded-lg p-4 transition-all duration-200`}>
                  <div className="flex items-start space-x-3">
                    <GraduationCap size={24} className="text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold">{edu.school}</h3>
                      <p className={`text-sm ${themeClasses.secondaryText} mb-2`}>{edu.degree}</p>
                      <p className={`text-sm ${themeClasses.secondaryText} mb-2`}>{edu.period}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className={`text-xs px-2 py-1 rounded-full ${themeClasses.skill}`}
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${themeClasses.skill} transition-colors`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${themeClasses.card} py-6 border-t ${themeClasses.border}`}>
        <div className="max-w-5xl mx-auto px-4 text-center text-sm">
          <p className={`font-medium ${themeClasses.secondaryText}`}>
            © {new Date().getFullYear()} Noam J Gal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;