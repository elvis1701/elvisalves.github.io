fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('project-list');
    data.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><strong>Tecnologias:</strong> ${project.technologies.join(', ')}</p>
        <a href="${project.url}" target="_blank">Ver no GitHub</a>
      `;
      container.appendChild(card);
    });
  });
