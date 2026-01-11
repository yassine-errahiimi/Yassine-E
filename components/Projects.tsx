
import React from 'react';
import { ExternalLink, Github, Monitor, Phone } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "FlowKeys – Typing Platform",
      description: "A modern typing speed platform built using vibe coding principles. Includes typing tests, real-time WPM calculation, accuracy tracking, and a clean responsive UI.",
      image: "Capture d’écran 2026-01-11 à 22.36.46.png",
      tags: ["HTML", "CSS", "JavaScript", "Vibe Coding"],
      github: "#",
      live: "#"
    },
    {
      title: "Football Field Reservation Platform",
      description: "A web platform for reserving football fields online. Users can view available time slots, book reservations, and contact field owners easily.",
      image: "Capture d’écran 2026-01-11 à 22.42.35.png",
      tags: ["PHP", "MySQL", "JavaScript", "CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Yassine Errahimi – Portfolio",
      description: "My personal portfolio showcasing my skills, projects, and experience as a Full Stack Web Developer. Designed with a modern UI and responsive layout.",
      image: "Capture d’écran 2026-01-11 à 22.44.08.png",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      github: "#",
      live: "#"
    }
    
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
              A selection of projects where I've applied my Full Stack skills to solve real problems and create intuitive user experiences.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-700">
              <Monitor size={16} /> Desktop Ready
            </span>
            <span className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-700">
              <Phone size={16} /> Mobile Friendly
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <a href={project.github} className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <a href="#" className="inline-flex items-center font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors group/link">
                  View Project Details 
                  <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default Projects;
