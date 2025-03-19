import React from 'react';

const Languages = () => {
  return (
    <div className="block-holder white">
      <div className="anchor" id="languages"></div>
      <h2 className="bordered">LANGUAGES</h2>
      <ul className="lang-list">
        <li>
          <span className="level">NATIVE</span>
          <div className="c100">
            <span>PT</span>
          </div>
        </li>
        <li className="red">
          <span className="level">FLUENT</span>
          <div className="c100">
            <span>EN</span>
          </div>
        </li>
        <li className="blue">
          <span className="level">INTERMEDIATE</span>
          <div className="c100">
            <span>ES</span>
          </div>
        </li>
      </ul>
      <ul className="lang-desc">
        <li>Portuguese - Native Proficiency.</li>
        <li>English - Full Professional Proficiency.</li>
        <li>Spanish - Limited Working Proficiency.</li>
      </ul>
    </div>
  );
};

export default Languages;