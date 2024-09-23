document.addEventListener('DOMContentLoaded', function() {
  fetch('experiences.json')
    .then(response => response.json())
    .then(data => {
      const experienceContainer = document.getElementById('experience-cards');
      data.forEach(experience => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'item';
        experienceItem.innerHTML = `
          <h3>${experience.title}</h3>
          <p>${experience.company}</p>
          <p>${experience.duration}</p>
          <p>${experience.description}</p>
        `;
        experienceContainer.appendChild(experienceItem);
      });
    });
});