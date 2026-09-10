// app/components/Experience.tsx
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Front-End Developer Intern",
      company: "BluLogix",
      date: "2026",
      description: [
        "Completed a structured web development internship program focusing on semantic HTML, CSS layout techniques, asynchronous JavaScript, and REST web services.",
        "Built responsive web interfaces and integrated RESTful APIs to fetch and display dynamic data seamlessly.",
        "Applied algorithms and problem-solving skills to optimize page interactions and component rendering.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-12">
          EXPERIENCE
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#1a1a1a] border border-gray-800 p-8 md:p-10 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-[#d4ff39] font-medium tracking-wide uppercase text-sm">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm font-medium border border-gray-700 px-4 py-2 rounded-full w-fit">
                  {exp.date}
                </span>
              </div>
              
              <ul className="space-y-3 text-gray-400">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-4">
                    <span className="text-[#d4ff39] mt-1.5 text-xs">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}