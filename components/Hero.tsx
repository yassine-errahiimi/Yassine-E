
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid text-slate-200 dark:text-slate-900/50 pointer-events-none -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary uppercase bg-primary/10 rounded-full">
              Available for Hire
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Yassine Errahimi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
              A passionate <span className="font-semibold text-slate-900 dark:text-white">Full Stack Web Developer</span> dedicated to building modern, high-performance, and user-centric web applications.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                View My Work
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6 text-slate-500 dark:text-slate-400">
              <a href="https://github.com/yassineerrahimi" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:yassine@example.com" className="hover:text-primary transition-colors"><Mail size={24} /></a>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex-1 relative">
            <div className="relative w-64 md:w-[380px] aspect-[3/4.2] mx-auto group">
              {/* Decorative shapes behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute -inset-4 bg-white dark:bg-slate-950 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-800 overflow-hidden shadow-2xl">
                <img
                  src="public/img/IMG_9323.png" 
                  alt="Yassine Errahimi"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "public/img/IMG_9323.png";
                  }}
                />
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute top-10 -left-10 w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center animate-float p-3 border border-slate-100 dark:border-slate-700">
                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="w-full h-full" />
              </div>
              <div className="absolute bottom-20 -right-10 w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center animate-float p-4 border border-slate-100 dark:border-slate-700" style={{ animationDelay: '1.5s' }}>
                <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" alt="Laravel" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-6 left-1/4 w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center animate-float p-3 border border-slate-100 dark:border-slate-700" style={{ animationDelay: '0.7s' }}>
                <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
