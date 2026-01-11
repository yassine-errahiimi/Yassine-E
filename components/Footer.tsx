
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              YE.
            </span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              &copy; {currentYear} Yassine Errahimi. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-slate-500 hover:text-primary transition-colors font-medium">About</a>
            <a href="#projects" className="text-slate-500 hover:text-primary transition-colors font-medium">Projects</a>
            <a href="#contact" className="text-slate-500 hover:text-primary transition-colors font-medium">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
