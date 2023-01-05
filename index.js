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

/* pop-up-starts*/

const workCards = [
  { 
    title:'Tonic';
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';   
    image: '.tonicmobileimage.png';
    technologies: ['html', 'css', 'javascript'];
    linkLive:'https://otmantr.github.io/Portfolio-Project/';
    linkSource:'https://github.com/otmanTR/Portfolio-Project';
  }.
  { 
    title:'Multi-Post Stories';
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';   
    image: '.multimobileimage.png';
    technologies: ['html', 'css', 'javascript'];
    linkLive:'https://otmantr.github.io/Portfolio-Project/';
    linkSource:'https://github.com/otmanTR/Portfolio-Project';
  }.
  { 
    title:'Tonic';
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';   
    image: '.tonicmobileimage1.png';
    technologies: ['html', 'css', 'javascript'];
    linkLive:'https://otmantr.github.io/Portfolio-Project/';
    linkSource:'https://github.com/otmanTR/Portfolio-Project';
  }.
  { 
    title:'Multi-Post Stories';
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';   
    image: '.multimobileimage1.png';
    technologies: ['html', 'css', 'javascript'];
    linkLive:'https://otmantr.github.io/Portfolio-Project/';
    linkSource:'https://github.com/otmanTR/Portfolio-Project';
  }
]

// document.querySelector('.btn1').onclick = () => {
// document.querySelector('.card-container').classList.add('star');
// document.querySelector('.card-container-title').innerHTML = workCards[0].title[0];
// document.querySelector('.card__content--item1').classList.add('star');
// document.querySelectorAll('.card__item--heading').innerHTML = workcCards[0].featured[0,1,2];
// document.querySelector('.mobiletonic').innerHTML = workCards[0].image[0];
// document.querySelector('.card__content--desc').innerHTML = workCards[0].description[0];
// document.querySelector('.card__content--item2').classList.add('star');
// document.querySelectorAll('.tech__btn').innerHTML = workCards[0].technologies[0,1,2];
// document.querySelector('.bcontainer').classList.add('star');
// document.querySelector('.btncontainer1').innerHTML =workCards[0].linkLive[0];
// document.querySelector('.btncontainer2').innerHTML= workCards[0].linkSource[0];
// }

