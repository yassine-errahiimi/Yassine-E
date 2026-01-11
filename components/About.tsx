
import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              My Journey
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a passionate Full Stack Web Developer. My journey into the world of digital creation started with a deep curiosity about how things work on the internet. I obtained my Baccalaureate in 2024 and immediately pursued my passion for technology.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I specialize in building modern, responsive, and high-performance web applications that provide real value to users. I love the balance between crafting beautiful user interfaces and architecting robust backend systems.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Location</p>
                <p className="font-semibold flex items-center gap-2"><MapPin size={16} className="text-primary"/> Mirleft, Morocco</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Education</p>
                <p className="font-semibold flex items-center gap-2"><GraduationCap size={16} className="text-primary"/> ISTA Mirleft</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <h3 className="text-2xl font-bold mb-8">Education Timeline</h3>
            <div className="space-y-8">
              {[
                {
                  year: "2025 – 2026",
                  title: "Digital Web Full Stack Development",
                  location: "ISTA Mirleft",
                  description: "Specialized training focusing on advanced full-stack architectures, modern frameworks, and cloud deployment."
                },
                {
                  year: "2024 – 2025",
                  title: "Digital Development (1st Year)",
                  location: "ISTA Mirleft",
                  description: "Foundational year covering core programming concepts, algorithms, and web development basics."
                },
                {
                  year: "2024",
                  title: "Baccalaureate",
                  location: "Local Institution",
                  description: "Successful completion of high school education with a focus on scientific/technical subjects."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 group-hover:scale-125 transition-transform"></div>
                    {idx !== 2 && <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-700 mt-2"></div>}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary flex items-center gap-1 mb-1">
                      <Calendar size={14} /> {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm font-medium text-slate-500 mb-2">{item.location}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
