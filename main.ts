const projectForm = document.getElementById('project-form') as HTMLFormElement;
const projectNameInput = document.getElementById('project-name') as HTMLInputElement;
const projectDescriptionInput = document.getElementById('project-description') as HTMLTextAreaElement;
const projectList = document.getElementById('project-list') as HTMLElement;


projectForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const projectName = projectNameInput.value;
    const projectDescription = projectDescriptionInput.value;


    appendProjectToList(projectName, projectDescription);

 
    projectForm.reset();
});


function appendProjectToList(projectName: string, projectDescription: string) {
    const article = document.createElement('article');
    article.innerHTML = `
        <h3>${projectName}</h3>
        <p>${projectDescription}</p>
    `;
    projectList.appendChild(article);
}

