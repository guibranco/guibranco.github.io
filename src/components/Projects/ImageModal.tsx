import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Globe, Github } from "lucide-react";
import { VisualProject } from "../../types";

interface ImageModalProps {
  project: VisualProject;
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onThumbnailClick: (index: number) => void;
}

const ImageModal = ({
  project,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  onThumbnailClick,
}: ImageModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleKeyNav = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onPrevious();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleKeyNav);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleKeyNav);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95" onClick={onClose}>
      <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
            onClick={(e) => e.stopPropagation()}
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
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            <span>View Code</span>
          </a>
        )}
        <button
          onClick={onClose}
          className="p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="relative max-w-[85vw] max-h-[70vh]" onClick={(e) => e.stopPropagation()}>
          <img
            src={project.screenshots[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-[70vh] object-contain"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-200 text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/10 text-white rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div
        className="flex justify-center gap-2 p-4 bg-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        {project.screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => onThumbnailClick(index)}
            className={`relative w-20 h-20 overflow-hidden rounded-lg transition-all duration-200 ${
              index === currentIndex ? "ring-2 ring-white scale-105" : "opacity-50 hover:opacity-75"
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={screenshot}
              alt={`${project.title} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageModal;
