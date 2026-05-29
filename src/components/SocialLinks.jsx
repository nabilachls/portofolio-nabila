import { useEffect } from "react";
import {
  Linkedin,
  Github,
  Instagram,
  ExternalLink,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import PresenceWidget from "./PresenceWidget";
import profileData from "../data/profile.json";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: profileData?.linkedin || "#",
    color: "#FFD166",
    gradient: "from-[#FFD166] to-[#FF66B2]",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@nabilachls",
    icon: Instagram,
    url: "https://bit.ly/nabilachls",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: profileData?.github || "",
    icon: Github,
    url: profileData?.github || "#",
    color: "#FF66B2",
    gradient: "from-[#FF66B2] to-[#FFD166]",
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);

  useEffect(() => {
    AOS.init({
      offset: 10,
     
    });
  }, []);

  return (
    <div className="w-full bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-500 hover:shadow-[#7dd3fc]/10 h-full flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-3 text-pink-600">
              Mari Terhubung
            </h2>
            <p className="text-gray-600">
              Kunjungi media sosial saya atau temukan proyek saya di platform lain.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* LinkedIn - Primary Row */}
          <a
            href={linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="100" 
          >
            {/* Hover Gradient Background */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              style={{ backgroundColor: linkedIn.color }}
            />

            {/* Content Container */}
            <div className="relative flex items-center gap-4">
              {/* Icon Container */}
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                                 group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: linkedIn.color }}
                />
                <div className="relative p-2 rounded-md">
                  <linkedIn.icon
                    className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                    style={{ color: linkedIn.color }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-slate-900 tracking-tight leading-none group-hover:text-black transition-colors duration-300">
                  {linkedIn.displayName}
                </span>
                <span className="text-sm text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                  {linkedIn.subText}
                </span>
              </div>
            </div>

            {/* External Link */}
            <ExternalLink
              className="relative w-5 h-5 text-gray-500 group-hover:text-white
                         opacity-0 group-hover:opacity-100 transition-all duration-300
                         transform group-hover:translate-x-0 -translate-x-1"
            />

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
              />
            </div>
          </a>

          {/* Other Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 p-4 rounded-xl 
                                 bg-white/5 border border-white/10 overflow-hidden
                                 hover:border-white/20 transition-all duration-500"
                data-aos="fade-up" 
                data-aos-delay={200 + index * 100} 
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  style={{ backgroundColor: link.color }}
                />

                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                                         group-hover:scale-125 group-hover:opacity-30"
                    style={{ backgroundColor: link.color }}
                  />
                  <div className="relative p-2 rounded-lg">
                    <link.icon
                      className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                      style={{ color: link.color }}
                    />
                  </div>
                </div>

                {/* Text Container */}
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-slate-900 group-hover:text-black transition-colors duration-300">
                    {link.displayName}
                  </span>
                  <span className="text-xs text-slate-700 truncate group-hover:text-slate-800 transition-colors duration-300">
                    {link.subText}
                  </span>
                </div>

                <ExternalLink
                  className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                         opacity-0 group-hover:opacity-100 transition-all duration-300
                                         transform group-hover:translate-x-0 -translate-x-2"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                  <div
                    className="absolute inset-0 bg-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Spotify & Discord Presence Widget at bottom */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <PresenceWidget />
      </div>
    </div>
  );
};

export default SocialLinks;