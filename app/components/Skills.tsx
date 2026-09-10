// app/components/Skills.tsx
export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Tools & APIs",
      skills: ["REST APIs", "Git", "GitHub", "Vercel", "npm", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-24 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-12">
          TECHNICAL SKILLS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-2xl"
            >
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-transparent text-gray-300 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-700 hover:border-[#d4ff39] hover:text-[#d4ff39] transition-colors cursor-default"
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
}