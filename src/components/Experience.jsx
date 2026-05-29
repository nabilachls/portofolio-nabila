import React, { useEffect, memo } from 'react';
import { Briefcase } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = memo(() => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Coordinator Kesekretariatan",
      company: "Visitasi Perusahaan Himatro Unila",
      year: "2025",
      description: "Pada Program Kerja Visper sebagai Coordinator Kesekretariatan, saya mengelola 50 surat dan dokumen resmi kegiatan. Memimpin 10 anggota, mengelola pendataan peserta, absensi, dan administrasi kegiatan secara terstruktur."
    },
    {
      id: 2,
      title: "Coordinator Kesekretariatan",
      company: "Engineering Career Expo BEM FT Unila",
      year: "2026",
      description: "Pada Program Kerja ECE sebagai Coordinator Kesekretariatan, saya mengelur atur administrasi kegiatan dan mengelola distribusi informasi dan dokumen kegiatan berjalan efektif pada tepat waktu."
    }
  ];

  return (
    <div className="py-16 px-[5%] sm:px-[5%] lg:px-[10%] bg-white" id="Experience">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-4" 
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          Pengalaman
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto" />
      </div>

      {/* Experience Content */}
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id}
            className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-duration={800 + index * 200}
          >
            {/* Timeline dot */}
            <div className="absolute -left-6 top-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>

            <div className="pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-purple-600 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-pink-600 font-semibold text-lg">
                  {exp.year}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mt-4">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Experience.displayName = 'Experience';

export default Experience;
