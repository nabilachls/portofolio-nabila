import React, { useEffect, memo } from 'react';
import { GraduationCap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = memo(() => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="py-16 px-[5%] sm:px-[5%] lg:px-[10%] bg-white" id="Education">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-4" 
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          Pendidikan
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto" />
      </div>

      {/* Education Content */}
      <div className="max-w-3xl mx-auto">
        <div 
          className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Timeline dot */}
          <div className="absolute -left-6 top-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>

          <div className="pl-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
              <h3 className="text-2xl font-bold text-gray-900">
                Universitas Lampung
              </h3>
              <span className="text-pink-600 font-semibold text-lg">2024 – Sekarang</span>
            </div>
            
            <p className="text-lg text-purple-600 font-semibold mb-4">
              S1 Teknik Informatika
            </p>

            <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-gray-900 font-medium">
                IPK: <span className="text-pink-600">3.90 / 4.00</span>
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Fokus Pembelajaran:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                <li>Mempelajari pemrograman, struktur data, basis data, sistem operasi, dan rekayasa perangkat lunak</li>
                <li>Mengembangkan kemampuan pembuatan aplikasi dan sistem informasi berbasis web melalui proyek perkuliahan</li>
                <li>Meningkatkan kemampuan problem solving dan analisis sistem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Education.displayName = 'Education';

export default Education;
