const projectForm = document.getElementById('project-form');
const projectNameInput = document.getElementById('project-name');
const projectDescriptionInput = document.getElementById('project-description');
const projectList = document.getElementById('project-list');


function loadProjects() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        const projects = JSON.parse(storedProjects);
        projects.forEach(project => {
            appendProjectToList(project.Title, project.Description);
        });
    }
}


projectForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const projectName = projectNameInput.value;
    const projectDescription = projectDescriptionInput.value;

   
    const newProject = {
        Id: Date.now(), 
        Title: projectName,
        Description: projectDescription
    };

   
    appendProjectToList(newProject.Title, newProject.Description);

   
    const storedProjects = localStorage.getItem('projects');
    const projects = storedProjects ? JSON.parse(storedProjects) : [];
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));

   
    projectForm.reset();
});


function appendProjectToList(projectName, projectDescription) {
    const article = document.createElement('article');
    article.innerHTML = `
        <h3>${projectName}</h3>
        <p>${projectDescription}</p>
    `;
    projectList.appendChild(article);
}


loadProjects();
