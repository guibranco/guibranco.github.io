import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-8 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <a
          href="https://github.com/guibranco/guibranco.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          <span className="text-sm">View source on GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
