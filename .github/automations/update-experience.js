const fs = require('fs');
const chunk = require('chunk');
const calculateAge = require('calculate-age').default;
const fileName = 'experience.json';
const columns = 5;

const generateCell = (data) => `<td><strong>${calculateAge(data.since).getObject().years}+</strong> ${data.tech}</td>`;

const generateRow = (data) => {
    const cells = data.map((cell) => generateCell(cell));

    if (cells.length < columns) {
        cells.push('<td></td>'.repeat(columns - cells.length));
    }

    return `<tr>${cells.join('')}</tr>`;
}

async function main() {
    const data = fs.readFileSync(fileName, 'utf8');
    const json = JSON.parse(data);
    const rows = chunk(json, columns).map((row) => generateRow(row));
    const html = `<table width="100%"><thead><th colspan="5">Experience (in years)</th></thead><tbody>${rows.join('')}</tbody></table>`;

    let experienceTable = '<!-- START EXPERIENCE TABLE -->';
    experienceTable += html;
    experienceTable += '<!-- END EXPERIENCE TABLE -->';

    let indexHtml = fs.readFileSync('index.html', 'utf8');
    indexHtml = indexHtml.replace(/<!-- START EXPERIENCE TABLE -->.*<!-- END EXPERIENCE TABLE -->/s, experienceTable);

    fs.writeFileSync('index.html', indexHtml, 'utf8');
}

main();
