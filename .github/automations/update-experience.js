const fs = require('fs');
const chunk = require('chunk');
const calculateAge = require('calculate-age').default;
const fileName = 'experience.json';
const columns = 5;

/**
 * Generates an HTML table cell element containing the age and technology information.
 *
 * This function takes an object containing a 'since' property and a 'tech' property,
 * calculates the age based on the 'since' value, and formats it into a table cell.
 *
 * @param {Object} data - The data object containing technology information.
 * @param {number} data.since - The year since the technology has been in use.
 * @param {string} data.tech - The name of the technology.
 * @returns {string} An HTML string representing a table cell with the age and technology name.
 *
 * @example
 * const cell = generateCell({ since: 2010, tech: 'JavaScript' });
 * // Returns: '<td><strong>13+</strong> JavaScript</td>'
 *
 * @throws {TypeError} Throws an error if 'data' is not an object or if required properties are missing.
 */
const generateCell = (data) => `<td><strong>${calculateAge(data.since).getObject().years}+</strong> ${data.tech}</td>`;

/**
 * Generates an HTML table row (`<tr>`) from an array of data.
 *
 * This function takes an array of data, processes each item to create table cells,
 * and ensures that the row contains a specified number of columns. If the number of
 * cells generated is less than the required columns, empty cells will be added to
 * fill the row.
 *
 * @param {Array} data - An array of data items to be converted into table cells.
 *                       Each item in the array will be passed to the `generateCell`
 *                       function to create the corresponding cell.
 * @returns {string} A string representing an HTML table row containing the generated
 *                  cells.
 *
 * @throws {Error} Throws an error if `data` is not an array.
 *
 * @example
 * const row = generateRow(['Cell 1', 'Cell 2', 'Cell 3']);
 * // Returns: '<tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr>'
 *
 * @example
 * const row = generateRow(['Cell 1']);
 * // If columns is set to 3, returns: '<tr><td>Cell 1</td><td></td><td></td></tr>'
 */
const generateRow = (data) => {
    const cells = data.map((cell) => generateCell(cell));

    if (cells.length < columns) {
        cells.push('<td></td>'.repeat(columns - cells.length));
    }

    return `<tr>${cells.join('')}</tr>`;
}

/**
 * Asynchronously processes a JSON file to generate an HTML table 
 * representing experience in years, and updates an existing HTML file 
 * with the generated table.
 *
 * This function reads a JSON file, parses its content, chunks the data 
 * into rows, generates HTML for each row, and constructs a complete 
 * HTML table. It then reads an existing HTML file, replaces a specific 
 * section with the new table, and writes the updated content back to the 
 * file.
 *
 * @async
 * @throws {Error} Throws an error if reading or writing files fails.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 *
 * @example
 * main()
 *   .then(() => console.log('HTML table updated successfully.'))
 *   .catch((error) => console.error('Error updating HTML table:', error));
 */
async function main() {
    const data = fs.readFileSync(fileName, 'utf8');
    const json = JSON.parse(data);
    const rows = chunk(json, columns).map((row) => generateRow(row));

    let experienceTable = '';
    experienceTable += '<!--START_SECTION:experience-table-->';
    experienceTable += rows.join('');
    experienceTable += '<!--END_SECTION:experience-table-->';

    let indexHtml = fs.readFileSync('index.html', 'utf8');
    indexHtml = indexHtml.replace(/<!--START_SECTION:experience-table-->.*<!--END_SECTION:experience-table-->/s, experienceTable);

    fs.writeFileSync('index.html', indexHtml, 'utf8');
}

main();
