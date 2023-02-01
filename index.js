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

/* pop-up-starts */
/* Array */

const workCards = [
  {
    title: 'To Do List',
    featured: ['CANOPY', 'Front End Dev', '2023'],
    description: 'It is a program which you could make checklist for your daily program and clear your list efficiently.',
    image: 'do list.png',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'otmantr.github.io/To-Do-List/dist',
    linkSource: 'git@github.com:otmanTR/To-Do-List.git',
  },
  {
    title: 'Multi-Post Stories',
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'destopimage.png',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://otmantr.github.io/Portfolio-Project/',
    linkSource: 'https://github.com/otmanTR/Portfolio-Project',
  },
  {
    title: 'Tonic',
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'tonicmobileimage1.png',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://otmantr.github.io/Portfolio-Project/',
    linkSource: 'https://github.com/otmanTR/Portfolio-Project',
  },
  {
    title: 'Multi-Post Stories',
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'multimobileimage1.png',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://otmantr.github.io/Portfolio-Project/',
    linkSource: 'https://github.com/otmanTR/Portfolio-Project',
  },
];

document.getElementById('btn').onclick = () => {
  document.getElementById('card-container').classList.add('star');

  document.getElementById('headerliner').classList.add('blur');

  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('cardL1').innerText = workCards[0].technologies[0];
  document.getElementById('cardL2').innerHTML = workCards[0].technologies[1];
  document.getElementById('cardL3').innerHTML = workCards[0].technologies[2];
  document.getElementById('mobiletonic').src = workCards[0].image;
  document.getElementById('site').href = workCards[0].linkLive;
  document.getElementById('source').href = workCards[0].linkSource;
};

document.getElementById('tonicx').onclick = () => {
  document.getElementById('card-container').classList.remove('star');

  document.getElementById('headerliner').classList.remove('blur');

  // document.getElementById('body').classList.remove('blur');

  document.getElementById('Portfolio').classList.remove('blur');
  document.getElementById('About').classList.remove('blur');
  document.getElementById('Contact').classList.remove('blur');
};

document.getElementById('btn1').onclick = () => {
  document.getElementById('card-container').classList.add('star');

  document.getElementById('headerliner').classList.add('blur');

  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('cardL1').innerHTML = workCards[1].technologies[0];
  document.getElementById('cardL2').innerHTML = workCards[1].technologies[1];
  document.getElementById('cardL3').innerHTML = workCards[1].technologies[2];
  document.getElementById('mobiletonic').src = workCards[1].image;
  document.getElementById('site').href = workCards[1].linkLive;
  document.getElementById('source').href = workCards[1].linkSource;
};

document.getElementById('btn2').onclick = () => {
  document.getElementById('card-container').classList.add('star');

  document.getElementById('headerliner').classList.add('blur');

  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('cardL1').innerHTML = workCards[2].technologies[0];
  document.getElementById('cardL2').innerHTML = workCards[2].technologies[1];
  document.getElementById('cardL3').innerHTML = workCards[2].technologies[2];
  document.getElementById('mobiletonic').src = workCards[2].image;
  document.getElementById('site').href = workCards[2].linkLive;
  document.getElementById('source').href = workCards[2].linkSource;
};

document.getElementById('btn3').onclick = () => {
  document.getElementById('card-container').classList.add('star');

  document.getElementById('headerliner').classList.add('blur');

  document.getElementById('Portfolio').classList.add('blur');
  document.getElementById('About').classList.add('blur');
  document.getElementById('Contact').classList.add('blur');
  document.getElementById('cardL1').innerHTML = workCards[1].technologies[0];
  document.getElementById('cardL2').innerHTML = workCards[1].technologies[1];
  document.getElementById('cardL3').innerHTML = workCards[1].technologies[2];
  document.getElementById('mobiletonic').src = workCards[3].image;
  document.getElementById('site').href = workCards[1].linkLive;
  document.getElementById('source').href = workCards[1].linkSource;
};
/* contact validation */
document.getElementById('contactForm').onsubmit = (e) => {
  const email = document.getElementById('formEmail').value;
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    document.getElementById('error-message').innerHTML = 'Email must be in lowercase';
  
};
}