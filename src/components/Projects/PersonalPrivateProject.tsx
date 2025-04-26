import React, { useState } from "react";
import { Github, Globe, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { VisualProject as VisualProjectType } from "../../types";
import ImageModal from "./ImageModal";

interface PersonalPrivateProjectProps {
  project: VisualProjectType;
}

const PersonalPrivateProject = ({ project }: PersonalPrivateProjectProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-up">
      <div className="aspect-video w-full overflow-hidden relative group">
        <img
          src={project.screenshots[currentImageIndex]}
          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-transform duration-200 transform hover:scale-110"
            aria-label="Zoom image"
          >
            <ZoomIn size={24} />
          </button>
        </div>

        {project.screenshots.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {project.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <span className="text-sm font-medium text-gray-500">{project.year}</span>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Globe size={16} />
              <span>Visit Site</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>

      {isModalOpen && (
        <ImageModal
          project={project}
          currentIndex={currentImageIndex}
          onClose={() => setIsModalOpen(false)}
          onPrevious={previousImage}
          onNext={nextImage}
          onThumbnailClick={setCurrentImageIndex}
        />
      )}
    </div>
  );
};

export default PersonalPrivateProject;
