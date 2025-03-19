import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { 
  faMapMarkerAlt, 
  faBirthdayCake, 
  faEnvelope,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp, 
  faWordpressSimple,
  faGithub,
  faLinkedin,
  faStackOverflow 
} from '@fortawesome/free-brands-svg-icons';

interface ContactProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Contact = ({ collapsed, onToggle }: ContactProps) => {
  return (
    <section className={`widget ${collapsed ? 'collapsed' : ''}`}>
      <div className="anchor" id="contact"></div>
      <header className="widget-head" onClick={onToggle}>
        <div className="wrap flex items-center justify-between w-full px-4">
          <strong className="title">CONTACT</strong>
          {collapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </div>
      </header>
      <div className="widget-body style">
        <ul className="widget-list">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <address className="flex items-center">
              Dublin 
              <img 
                src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/ie.svg" 
                alt="Ireland flag" 
                className="w-4 h-4 ml-2 inline-block"
              />
            </address>
          </li>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faBirthdayCake} />
            </span>
            December, 1991
          </li>
          <li>
            <a href="https://wa.me/353871471762" target="_blank" rel="noopener" className="flex items-center">
              <span className="icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span className="flex items-center">
                +353 87 147 1762
                <img 
                  src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/ie.svg" 
                  alt="Ireland flag" 
                  className="w-4 h-4 ml-2 inline-block"
                />
              </span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/5511972659788" target="_blank" rel="noopener" className="flex items-center">
              <span className="icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span className="flex items-center">
                +55 11 97265 9788
                <img 
                  src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/br.svg" 
                  alt="Brazil flag" 
                  className="w-4 h-4 ml-2 inline-block"
                />
              </span>
            </a>
          </li>
          <li>
            <a href="https://blog.guilhermebranco.com.br" target="_blank" rel="noopener">
              <span className="icon">
                <FontAwesomeIcon icon={faWordpressSimple} />
              </span>
              Blog
            </a>
          </li>
          <li>
            <a href="mailto:&#103;&#117;&#105;&#108;&#104;&#101;&#114;&#109;&#101;&#064;&#103;&#117;&#105;&#108;&#104;&#101;&#114;&#109;&#101;&#098;&#114;&#097;&#110;&#099;&#111;&#046;&#099;&#111;&#109;&#046;&#098;&#114;" target="_blank" rel="noopener">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              Email address
            </a>
          </li>
          <li>
            <a href="https://github.com/guibranco" target="_blank" rel="noopener">
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/guilhermestracini/" target="_blank" rel="noopener">
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/1890220/guilherme-branco-stracini" target="_blank" rel="noopener">
              <span className="icon">
                <FontAwesomeIcon icon={faStackOverflow} />
              </span>
              Stack Overflow
            </a>
          </li>
          <li>
            <a href="https://guibranco.github.io/curriculum-vitae-guilherme-stracini.pdf" target="_blank" rel="noopener">
              <span className="icon">
                <FontAwesomeIcon icon={faFilePdf} />
              </span>
              Curriculum Vitae (PDF)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;