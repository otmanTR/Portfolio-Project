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

const workCards = [
  {
    title: 'Tonic',
    featured: ['CANOPY', 'Back End Dev', '2022'],
    description: 'Lorem Ipsum is ',
    image: '.tonicmobileimage.png',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://otmantr.github.io/Portfolio-Project/',
    linkSource: 'https://github.com/otmanTR/Portfolio-Project',
  },
];
// {
//   title:'Multi-Post Stories';
//   featured: ['CANOPY', 'Back End Dev', '2022'],
//   description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
//   image: '.multimobileimage.png';
//   technologies: ['html', 'css', 'javascript'];
//   linkLive:'https://otmantr.github.io/Portfolio-Project/';
//   linkSource:'https://github.com/otmanTR/Portfolio-Project';
// }.
// {
//   title:'Tonic';
//   featured: ['CANOPY', 'Back End Dev', '2022'],
//   description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
//   image: '.tonicmobileimage1.png';
//   technologies: ['html', 'css', 'javascript'];
//   linkLive:'https://otmantr.github.io/Portfolio-Project/';
//   linkSource:'https://github.com/otmanTR/Portfolio-Project';
// }.
// {
//   title:'Multi-Post Stories';
//   featured: ['CANOPY', 'Back End Dev', '2022'],
//   description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
//   image: '.multimobileimage1.png';
//   technologies: ['html', 'css', 'javascript'];
//   linkLive:'https://otmantr.github.io/Portfolio-Project/';
//   linkSource:'https://github.com/otmanTR/Portfolio-Project';
// }

// const cardBtn = document.querySelector('.btn');
// const popUp = document.querySelector('.popUp1');
// const cardImage = document.createElement('div');
// const cardContent = document.createElement('div');
// const title = document.createElement('h2');
// title.classList.add('.card-container-title');
// const cardContainer = document.createElement('div');
// cardContainer.classList.add('.card-container');
// cardContainer.appendChild(title);
// popUp.appendChild(cardContainer);
// const cardContainerItem = document.createElement('ul');
// cardContainerItem.classList.add('.card__content--item1');
// cardContainer.appendChild(cardContainerItem);
// const cardItemHeading = document.createElement('li');



// cardBtn.onclick = () => {
//   if (cardBtn.id === '0') {
//     title.innerHTML = workCards[0].title;
//     popUp.appendChild(title);


//   }
// };

document.querySelector('btn1').onclick = () => {
  document.getElementById('card-container').classList.add('star');
  document.getElementById('body').classList.add('blur');
  // document.getElementById('Portfolio').classList.add('blur');
  // document.getElementById('About').classList.add('blur');
  // document.getElementById('Contact').classList.add('blur');
  document.getElementById('l1').innerHTML = workCards[0].technologies[0];
  // eslint-disable-next-line prefer-destructuring
  document.getElementById('l2').innerHTML = workCards[0].technologies[1];
  document.getElementById('l3').innerHTML = workCards[0].technologies[2];
  document.getElementById('mobiletonic').src = workCards[0].URL;
  // document.getElementById('h2').innerHTML = workCards[0].name;
  document.getElementById('site').href = workCards[0].linkLive;
  document.getElementById('source').href = workCards[0].linkSource;
};

document.getElementById('tonicx').onclick = () => {
  document.getElementById('card-container').classList.remove('star');
  document.getElementById('body').classList.remove('blur');
  // document.getElementById('Portfolio').classList.remove('blur');
  // document.getElementById('About').classList.remove('blur');
  // document.getElementById('Contact').classList.remove('blur');
};