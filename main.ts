const projectForm = document.getElementById('project-form') as HTMLFormElement;
const projectNameInput = document.getElementById('project-name') as HTMLInputElement;
const projectDescriptionInput = document.getElementById('project-description') as HTMLTextAreaElement;
const projectList = document.getElementById('project-list') as HTMLElement;


const fetchProjects = async () => {
    const response = await fetch("http://localhost:6969/json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const result = await response.json();

    
    projectList.innerHTML = '';

  
    result.allprojects.forEach((project: { Title: string, Description: string }) => {
        appendProjectToList(project.Title, project.Description);
    });
};


projectForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const projectName = projectNameInput.value;
    const projectDescription = projectDescriptionInput.value;

 
    await fetch("http://localhost:6969/create-project", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Title: projectName,
            Description: projectDescription,
        }),
    });

    
    fetchProjects();

   
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


fetchProjects();
