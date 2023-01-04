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

const workCards = [
  { 
    title:'Tonic';
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';   
    image: '.tonicmobileimage.png';
    technologies: ['html', 'css', 'javascript'];
    linkLive:'https://otmantr.github.io/Portfolio-Project/';
    linkSource:'https://github.com/otmanTR/Portfolio-Project';
  }
]

document.querySelector('.btn1').onclick = () => {

}

