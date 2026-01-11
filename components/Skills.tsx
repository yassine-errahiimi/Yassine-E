
import React from 'react';
import { Layout, Server, Database, Code, Pencil, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-blue-500" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-indigo-500" />,
      skills: ["PHP", "Laravel", "Python"]
    },
    {
      title: "Database Management",
      icon: <Database className="text-green-500" />,
      skills: ["MySQL", "MongoDB", "NoSQL Concepts"]
    },
    {
      title: "Methodology & Tools",
      icon: <Users className="text-orange-500" />,
      skills: ["Agile/Scrum", "Git & GitHub", "Command Line"]
    },
    {
      title: "Design",
      icon: <Pencil className="text-pink-500" />,
      skills: ["Adobe Photoshop", "UI/UX Basics", "Responsive Design"]
    },
    {
      title: "Languages",
      icon: <Code className="text-purple-500" />,
      skills: ["Arabic (Native)", "French", "English"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            My technical arsenal is broad and constantly evolving, allowing me to tackle complex problems with modern solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {/* Fix: Added 'any' type to ReactElement to allow 'size' prop in cloneElement */}
                {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
