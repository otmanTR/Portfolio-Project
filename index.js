// document.getElementById('hamburger').onclick = () => {
//   document.getElementById('navulitems').classList.add('hamburger');
//   document.getElementById('hamburger').classList.add('hamx');
//   document.getElementById('x').classList.remove('hamx');
// };

// document.getElementById('x').onclick = () => {
//   document.getElementById('navulitems').classList.remove('hamburger');
//   document.getElementById('hamburger').classList.remove('hamx');
//   document.getElementById('x').classList.add('hamx');
// };

// document.getElementById('l1').onclick = () => {
//   document.getElementById('navulitems').classList.remove('hamburger');
//   document.getElementById('hamburger').classList.remove('hamx');
//   document.getElementById('x').classList.add('hamx');
// };

// document.getElementById('l2').onclick = () => {
//   document.getElementById('navulitems').classList.remove('hamburger');
//   document.getElementById('hamburger').classList.remove('hamx');
//   document.getElementById('x').classList.add('hamx');
// };

// document.getElementById('l3').onclick = () => {
//   document.getElementById('navulitems').classList.remove('hamburger');
//   document.getElementById('hamburger').classList.remove('hamx');
//   document.getElementById('x').classList.add('hamx');
// };
/* contact validation */
document.getElementById('contactForm').onsubmit = (e) => {
  const email = document.getElementById('formEmail').value;
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    document.getElementById('error-message').innerHTML = 'Email must be in lowercase';
  
};
}

// Fetch Projects
fetch("projects.json")
  .then(response => response.json())
  .then(data => renderProjects(data))
  .catch(error => console.error(error));

// Render Projects
function renderProjects(projects) {
  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((project, index) => {
    const projectCard = `
      <section class="cards">
        <div class="projects project${index + 1}">
          <img
            class="picture picture${index + 1}"
            src="${project.image}"
            alt="${project.name}"
          />
          <div class="project-info project-info${index + 1}">
            <h2 class="project-title">${project.name}</h2>
              <li class="year"><h3 >${project.year}</h3></li>
            <p class="project-details">${project.description}</p>
            <div class="project-button-below">
            <h2 class="built">Built With</h2>
              <ul class="dev-list">
                ${project.technologies
                  .map(tech => `<li><h3 class="html">${tech}</h3></li>`)
                  .join("")}
              </ul>
              <button class="project-button1 project-button" type="submit">
                Live Demo
              </button>
              <button class="project-button2 project-button" type="github">
                GitHub
              </button>
            </div>
        </div>
        </div>
      </section>
    `;

    projectsContainer.innerHTML += projectCard;
  });
}
