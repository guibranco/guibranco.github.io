import React from 'react';
import experienceData from '../../data/experience-years.json';
import SectionTitle from '../AboutMe/SectionTitle';

const calculateYears = (startDate: string, endDate: string = 'now'): number => {
  const start = new Date(startDate.split('/').reverse().join('-'));
  const end = endDate.toLowerCase() === 'now' ? new Date() : new Date(endDate.split('/').reverse().join('-'));

  let years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
  }

  return years;
};

const formatDate = (date: string): string => {
  const [month, year] = date.split('/');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
};

const ExperienceYearsTable = () => {
  const experiences = experienceData.experiences.map(exp => ({
    ...exp,
    years: calculateYears(exp.startDate)
  }));

  // Create rows based on screen size
  const createRows = React.useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    const itemsPerRow = isMobile ? 2 : 5;
    const rows = [];

    for (let i = 0; i < experiences.length; i += itemsPerRow) {
      rows.push(experiences.slice(i, i + itemsPerRow));
    }

    return rows;
  }, [experiences]);

  const [rows, setRows] = React.useState(createRows());

  React.useEffect(() => {
    const handleResize = () => {
      setRows(createRows());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [createRows]);

  return (
    <div>
      <SectionTitle
        title="Experience"
        color="#fbc02d"
      />
      <div className="w-full">
        <table className="w-full table-fixed">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((exp, colIndex) => (
                  <td key={colIndex} className="relative group p-4 text-center">
                    <span><strong>{exp.years}+</strong> {exp.title}</span>
                    <div className="invisible group-hover:visible absolute z-[9999] w-max px-3 py-2 text-sm font-medium text-white bg-black rounded-lg shadow-sm 
                      top-[calc(100%+0.25rem)] left-1/2 -translate-x-1/2 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-black">
                      Since {formatDate(exp.startDate)}
                    </div>
                  </td>
                ))}
                {window.innerWidth <= 768 ?
                  [...Array(2 - row.length)].map((_, i) => (
                    <td key={`empty-${i}`} className="p-4"></td>
                  )) :
                  [...Array(5 - row.length)].map((_, i) => (
                    <td key={`empty-${i}`} className="p-4"></td>
                  ))
                }
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-center text-sm mt-4 text-gray-300">* Values in years</p>
      </div>
    </div>
  );
};

export default ExperienceYearsTable;