const projectForm = document.getElementById('project-form');
const projectNameInput = document.getElementById('project-name');
const projectDescriptionInput = document.getElementById('project-description');
const projectList = document.getElementById('project-list');

// Load existing projects from localStorage
function loadProjects() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        const projects = JSON.parse(storedProjects);
        projects.forEach(project => {
            appendProjectToList(project.Title, project.Description);
        });
    }
}

// Handle form submission
projectForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const projectName = projectNameInput.value;
    const projectDescription = projectDescriptionInput.value;

    // Create a new project object
    const newProject = {
        Id: Date.now(), // Generate a unique ID using timestamp
        Title: projectName,
        Description: projectDescription
    };

    // Append the new project to the list in the DOM
    appendProjectToList(newProject.Title, newProject.Description);

    // Save the new project to localStorage
    const storedProjects = localStorage.getItem('projects');
    const projects = storedProjects ? JSON.parse(storedProjects) : [];
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));

    // Reset the form after submission
    projectForm.reset();
});

// Function to append a project to the project list as an article
function appendProjectToList(projectName, projectDescription) {
    const article = document.createElement('article');
    article.innerHTML = `
        <h3>${projectName}</h3>
        <p>${projectDescription}</p>
    `;
    projectList.appendChild(article);
}

// Initial load of projects
loadProjects();
