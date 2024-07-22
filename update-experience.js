const fs = require('fs');

const experienceData = JSON.parse(fs.readFileSync('experience.json', 'utf8'));

let experienceTable = '<!-- START EXPERIENCE TABLE -->';
experienceTable += '<table>';
experienceData.forEach(item => {
  experienceTable += `<tr><td>${item.role}</td><td>${item.company}</td><td>${item.duration}</td></tr>`;
});
experienceTable += '</table>';
experienceTable += '<!-- END EXPERIENCE TABLE -->';

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/<!-- START EXPERIENCE TABLE -->.*<!-- END EXPERIENCE TABLE -->/s, experienceTable);

fs.writeFileSync('index.html', indexHtml, 'utf8');

console.log('Experience table updated successfully.');