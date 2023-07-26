// /* eslint-disable prefer-destructuring */
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
  }
};

// Render Projects
function renderProjects(projects) {
  const projectsContainer = document.querySelector('.projects-container');

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
            <div class="project-type-year">
            <li class="year"><h3 >${project.type}</h3></li>
              <li class="year"><h3 >${project.year}</h3></li>
              </div>
            <p class="project-details">${project.description}</p>
            <div class="project-button-below">
              <ul class="dev-list">
                ${project.technologies
    .map((tech) => `<li><p class="html">${tech}</p></li>`)
    .join('')}
              </ul>
              
        <div class="button-container">
              <a class="project-link btn"  href="${project.liveLink}"> Live Demo </a> 
              <a class="project-link btn"  href="${project.githubLink}">  GitHub </a>
              </div>
            </div>
        </div>
        </div>
      </section>
    `;

    projectsContainer.innerHTML += projectCard;
  });
}

// Fetch Projects
fetch('projects.json')
  .then((response) => response.json())
  .then((data) => renderProjects(data));

// Get all the skill_header elements
const skillHeaders = document.querySelectorAll('.skill_header');

// Add click event listener to each header
skillHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    // Get the corresponding collapsible ul element
    const collapsibleList = header.nextElementSibling;

    // Toggle the visibility of the collapsible ul element
    collapsibleList.classList.toggle('collapsed');
  });
});

// Download Resume //
/* eslint-disable-next-line no-unused-vars */
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1DN2jyYaZdvrX-ucgdBwRsh1COB9PJdqD/view?usp=drive_link';
  link.download = 'Recep_Burak_Otman_Resume.pdf';

  // Trigger the download by programmatically clicking the link
  link.dispatchEvent(new MouseEvent('click'));
}
