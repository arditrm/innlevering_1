var projectForm = document.getElementById('project-form');
var projectNameInput = document.getElementById('project-name');
var projectDescriptionInput = document.getElementById('project-description');
var projectList = document.getElementById('project-list');
// Load existing projects from localStorage
function loadProjects() {
    var storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        var projects = JSON.parse(storedProjects);
        projects.forEach(function (project) {
            appendProjectToList(project.Title, project.Description);
        });
    }
}
// Handle form submission
projectForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var projectName = projectNameInput.value;
    var projectDescription = projectDescriptionInput.value;
    // Create a new project object
    var newProject = {
        Id: Date.now(), // Generate a unique ID using timestamp
        Title: projectName,
        Description: projectDescription
    };
    // Append the new project to the list in the DOM
    appendProjectToList(newProject.Title, newProject.Description);
    // Save the new project to localStorage
    var storedProjects = localStorage.getItem('projects');
    var projects = storedProjects ? JSON.parse(storedProjects) : [];
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
    // Reset the form after submission
    projectForm.reset();
});
// Function to append a project to the project list as an article
function appendProjectToList(projectName, projectDescription) {
    var article = document.createElement('article');
    article.innerHTML = "\n        <h3>".concat(projectName, "</h3>\n        <p>").concat(projectDescription, "</p>\n    ");
    projectList.appendChild(article);
}
// Initial load of projects
loadProjects();
