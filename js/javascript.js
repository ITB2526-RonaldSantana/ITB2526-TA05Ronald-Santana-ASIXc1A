// ARRAY DE PROYECTOS (datos dinámicos)
const projectLink = document.getElementById("project-link");
const projects = [
    {
        title: "Inventory Manager",
        description: "Robust Java application with MySQL for real-time stock control.",
        image: "../images/inventory.png",
        link: "./project1.html"
    },
    {
        title: "ToDo App",
        description: "Task manager with dynamic task creation and deletion.",
        image: "../images/todoap.png",
        link: "./project2.html"
    },
    {
        title: "Weather App",
        description: "Weather application using JavaScript and APIs.",
        image: "../images/wheatherap.png",
        link: "./project3.html"
    },
    {
        title: "Recipe Finder",
        description: "An app to search for recipes based on ingredients.",
        image: "../images/recipefinder.png",
        link: "./project4.html"
    },
    {
        title: "Currency Converter",
        description: "Convert between different currencies in real-time.",
        image: "../images/converter.png",
        link: "./project5.html"
    },
    {
        title: "Quiz Game",
        description: "A fun interactive quiz game on various topics.",
        image: "../images/quizmaster.png",
        link: "./project6.html"
    }
];


// ELEMENTOS DEL DOM
const img = document.getElementById("project-img");
const title = document.getElementById("project-title");
const desc = document.getElementById("project-desc");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentProject = 0;

// FUNCIÓN PARA MOSTRAR PROYECTO
function showProject(index) {
    const card = document.querySelector(".project-card");

    card.style.opacity = 0;
    card.style.transform = "translateY(30px) scale(0.95)";

    setTimeout(() => {
        img.src = projects[index].image;
        title.textContent = projects[index].title;
        desc.textContent = projects[index].description;
        projectLink.href = projects[index].link;

        card.style.opacity = 1;
        card.style.transform = "translateY(0) scale(1)";
    }, 400);
}



// BOTÓN SIGUIENTE
nextBtn.addEventListener("click", () => {
    currentProject++;
    if (currentProject >= projects.length) {
        currentProject = 0;
    }
    showProject(currentProject);
});

// BOTÓN ANTERIOR
prevBtn.addEventListener("click", () => {
    currentProject--;
    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }
    showProject(currentProject);
});

// CARGA INICIAL
showProject(currentProject);
