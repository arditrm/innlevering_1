var projectForm = document.getElementById('project-form');
var projectNameInput = document.getElementById('project-name');
var projectDescriptionInput = document.getElementById('project-description');
var projectList = document.getElementById('project-list');
projectForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var projectName = projectNameInput.value;
    var projectDescription = projectDescriptionInput.value;
    appendProjectToList(projectName, projectDescription);
    projectForm.reset();
});
function appendProjectToList(projectName, projectDescription) {
    var article = document.createElement('article');
    article.innerHTML = "\n        <h3>".concat(projectName, "</h3>\n        <p>").concat(projectDescription, "</p>\n    ");
    projectList.appendChild(article);
}
