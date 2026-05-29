import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { toSlug } from "../utils/slug";

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id, Github, Type }) => {
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Detail proyek tidak tersedia");
    }
  };

  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-xl bg-white/95 backdrop-blur-lg border border-gray-100 shadow-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,102,178,0.08)]">
        <div className="absolute inset-0 bg-yellow-50 opacity-60 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover aspect-[16/8] transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl font-semibold text-pink-600 flex-1">
                {Title}
              </h3>
              {Type && (
                <span className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium ${
                  Type === "Proyek Pribadi"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-blue-100 text-blue-700"
                }`}>
                  {Type}
                </span>
              )}
            </div>

            <p className="text-slate-700/90 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>

            <div className="pt-4 flex items-center justify-between gap-2">
              <div className="flex gap-2">
                {Github && (
                  <a
                    href={Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {id ? (
                <Link
                  to={`/project/${toSlug(Title)}`}
                  onClick={handleDetails}
                  className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-yellow-50 text-slate-900 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-100 text-sm"
                >
                  <span>Detail</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-gray-500 text-sm">
                  Detail Tidak Tersedia
                </span>
              )}
            </div>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
