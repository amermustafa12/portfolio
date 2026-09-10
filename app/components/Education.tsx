// app/components/Education.tsx
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-12">
          EDUCATION
        </h2>

        <div className="bg-[#1a1a1a] border border-gray-800 p-8 md:p-10 rounded-2xl max-w-3xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-4">
              <GraduationCap size={32} className="text-[#d4ff39]" />
              Bachelor of Computer Science
            </h3>
            <span className="text-gray-400 text-sm font-medium border border-gray-700 px-4 py-2 rounded-full w-fit whitespace-nowrap">
              2022 – 2026
            </span>
          </div>
          <p className="text-[#d4ff39] font-medium md:pl-12 uppercase text-sm tracking-wide">
            The World Islamic Sciences & Education University
          </p>
        </div>
      </div>
    </section>
  );
}