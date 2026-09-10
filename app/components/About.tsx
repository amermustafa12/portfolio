// app/components/About.tsx
import { GraduationCap, Code2, Monitor, MapPin } from "lucide-react";

export default function About() {
  const infoCards = [
    {
      icon: <GraduationCap className="text-[#d4ff39] mb-3" size={28} />,
      title: "Education",
      description: "Computer Science",
    },
    {
      icon: <Code2 className="text-[#d4ff39] mb-3" size={28} />,
      title: "Role",
      description: "Front-End Developer",
    },
    {
      icon: <Monitor className="text-[#d4ff39] mb-3" size={28} />,
      title: "Specialty",
      description: "React Developer",
    },
    {
      icon: <MapPin className="text-[#d4ff39] mb-3" size={28} />,
      title: "Location",
      description: "Amman, Jordan",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-12">
          ABOUT ME
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="text-gray-400 leading-relaxed space-y-6 text-lg">
            <p>
              I'm a Computer Science graduate and Front-End Developer focused on building responsive and user-friendly web applications.
            </p>
            <p>
              I have hands-on experience with React, TypeScript, JavaScript, REST APIs, and modern frontend development. I'm currently expanding my skills with Next.js and Tailwind CSS.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {infoCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-2xl flex flex-col items-start hover:border-[#d4ff39]/50 transition-colors"
              >
                {card.icon}
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}