import React, { useEffect, memo } from 'react';
import { Code2, Users } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = memo(() => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const softSkills = [
    "Komunikasi",
    "Kerja sama tim",
    "Manajemen waktu",
    "Adaptasi",
    "Problem solving",
    "Kepemimpinan"
  ];

  const hardSkills = [
    "HTML, CSS, JavaScript",
    "PHP & Laravel Dasar",
    "MySQL",
    "UI/UX Design",
    "Microsoft Office",
    "Cisco Packet Tracer",
    "Pemrograman C++ & Python",
    "Jaringan Komputer"
  ];

  return (
    <div className="py-16 px-[5%] sm:px-[5%] lg:px-[10%] bg-white" id="Skills">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-4" 
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          Keterampilan
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto" />
      </div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Soft Skills */}
        <div 
          className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Soft Skill</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-[#7dd3fc]/20 to-[#ff66b2]/20 border border-pink-300/50 text-gray-700 rounded-full font-medium text-sm hover:from-[#7dd3fc]/30 hover:to-[#ff66b2]/30 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hard Skills */}
        <div 
          className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Hard Skill</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {hardSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-[#7dd3fc]/20 to-[#ff66b2]/20 border border-pink-300/50 text-gray-700 rounded-full font-medium text-sm hover:from-[#7dd3fc]/30 hover:to-[#ff66b2]/30 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Skills.displayName = 'Skills';

export default Skills;
