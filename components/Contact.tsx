
import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg">
              Have a project in mind or looking to hire a dedicated Full Stack developer? I'm always open to discussing new opportunities and challenges.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Email Me</p>
                  <a href="mailto:yassinrahimi91@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">yassinrahimi91@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Call Me</p>
                  <p className="text-lg font-bold">+212 617 98 70 57</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Location</p>
                  <p className="text-lg font-bold">Agadir, Morocco</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Follow Me</p>
              <div className="flex gap-4">
                {[
                  { icon: <Github />, label: 'Github' },
                  { icon: <Linkedin />, label: 'Linkedin' },
                  { icon: <Twitter />, label: 'Twitter' },
                  { icon: <Instagram />, label: 'Instagram' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="https://github.com/yassine-errahiimi"
                    href="https://www.linkedin.com/in/yassine-errahimi-5ba73726a/"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    {/* Fix: Added 'any' type to ReactElement to allow 'size' prop in cloneElement */}
                    {React.cloneElement(social.icon as React.ReactElement<any>, { size: 20 })}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl">
            <form className="space-y-6"
            action="https://formspree.io/f/mgooewyg"
            method="POST"
          >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input
                    name = "text"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input
                  name="text"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  name="textarea"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold py-5 rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 group"
               >
               

                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
            </form >
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
