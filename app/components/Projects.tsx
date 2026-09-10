// app/components/Projects.tsx
import { ArrowUpRight } from "lucide-react";

// Simple inline SVG for the GitHub icon
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "Weather App",
      description: "A responsive weather application that allows users to search for cities, detect current location, toggle between Celsius and Fahrenheit, and save their last searched city using localStorage.",
      role: "Front-end Developer",
      year: "2026",
      demoUrl: "https://amer-weather-app.netlify.app/", 
      githubUrl: "https://github.com/amermustafa12/weather-app", 
      image: "/weather.png", 
    },
    {
      title: "University Journal Approval System",
      description: "A web-based system designed to automate and manage the university journal approval workflow with administrative stages. Built with HTML, CSS, JavaScript, PHP, and MySQL.",
      role: "Full-stack Developer",
      year: "2026",
      
      image: "/journal.png",
    },
    {
      title: "Resto Restaurant Website",
      description: "A modern, responsive restaurant web application built with Next.js, TypeScript, and Tailwind CSS, featuring dynamic menu filtering, a table reservation workflow, dark mode support, and dedicated authentication routing.",
      role: "Front-end Developer",
      year: "2026",
      demoUrl: "https://resto-website1.netlify.app/", 
      githubUrl: "https://github.com/amermustafa12/Resto", 
      image: "/resto.png",
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
            FEATURED PROJECTS
          </h2>
          <p className="text-gray-400">
            Here are some of the selected projects that showcase my passion for front-end development.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              {/* Left Side: Mockup Box */}
              <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-2xl aspect-[4/3] flex items-center justify-center border border-gray-800">
                <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col relative">
                  
                  {/* Fake Browser Bar for aesthetics */}
                  <div className="h-6 border-b border-gray-200 flex items-center px-3 gap-1.5 bg-gray-50 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  
                  {/* Single Image Area */}
                  <div className="flex-1 bg-gray-900 relative">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`} 
                      className="w-full h-full object-contain absolute inset-0"
                      /* Fallback style just in case the image hasn't been added yet */
                      style={{ backgroundColor: '#f3f4f6' }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Project Details */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Info Table */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                    Project Info
                  </h4>
                  <div className="border-t border-gray-800 py-4 flex justify-between items-center text-sm">
                    <span className="text-gray-400">Year</span>
                    <span className="text-white">{project.year}</span>
                  </div>
                  <div className="border-t border-b border-gray-800 py-4 flex justify-between items-center text-sm">
                    <span className="text-gray-400">Role</span>
                    <span className="text-white">{project.role}</span>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#d4ff39] hover:text-[#c2ed2c] text-xs font-bold uppercase tracking-widest flex items-center gap-1 transition-colors border-b border-transparent hover:border-[#d4ff39] pb-0.5"
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#d4ff39] hover:text-[#c2ed2c] text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors border-b border-transparent hover:border-[#d4ff39] pb-0.5"
                  >
                    See On GitHub <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}