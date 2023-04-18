/* eslint-disable prefer-destructuring */
document.getElementById('hamburger').onclick = () => {
  document.getElementById('navulitems').classList.add('hamburger');
  document.getElementById('hamburger').classList.add('hamx');
  document.getElementById('x').classList.remove('hamx');
};

document.getElementById('x').onclick = () => {
  document.getElementById('navulitems').classList.remove('hamburger');
  document.getElementById('hamburger').classList.remove('hamx');
  document.getElementById('x').classList.add('hamx');
};

document.getElementById('l1').onclick = () => {
  document.getElementById('navulitems').classList.remove('hamburger');
  document.getElementById('hamburger').classList.remove('hamx');
  document.getElementById('x').classList.add('hamx');
};

document.getElementById('l2').onclick = () => {
  document.getElementById('navulitems').classList.remove('hamburger');
  document.getElementById('hamburger').classList.remove('hamx');
  document.getElementById('x').classList.add('hamx');
};

document.getElementById('l3').onclick = () => {
  document.getElementById('navulitems').classList.remove('hamburger');
  document.getElementById('hamburger').classList.remove('hamx');
  document.getElementById('x').classList.add('hamx');
};

/* contact validation */
document.getElementById('contactForm').onsubmit = (e) => {
  const email = document.getElementById('formEmail').value;
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    document.getElementById('error-message').innerHTML = 'Email must be in lowercase';
  
};
}