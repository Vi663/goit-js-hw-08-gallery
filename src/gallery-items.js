export default [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
import myExport from "./gallery-items.js";

const galleryList = document.querySelector('.js-gallery');
const modalWindow = document.querySelector('.js-lightbox');
const modalWindowCloseBtnEl = document.querySelector('.lightbox__button');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
const bigImage = document.querySelector('.lightbox__image');

function createList() {
  myExport.map((image) => {
    const listItemEl = document.createElement('li');
    const linkEl = document.createElement('a');
    const imgEl = document.createElement('img');
    listItemEl.classList.add('gallery__item');
    linkEl.classList.add('gallery__link');
    linkEl.href = image.original;
    imgEl.classList.add('gallery__image');
    imgEl.src = image.preview;
    imgEl.alt = image.description;
  
    linkEl.appendChild(imgEl);
    listItemEl.appendChild(linkEl);
    galleryList.appendChild(listItemEl);
  });
};
createList()
console.log(galleryList);

function stopDefAction(event) {
  event.preventDefault();
  // console.log(linkElInList);
}
// const linkElInList = document.querySelectorAll('.gallery__link');
  galleryList.addEventListener(
    'click', stopDefAction
);

function onImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  modalWindow.classList.add('is-open');
  bigImage.src = event.target.closest('.gallery__link').href;
  bigImage.alt = event.target.alt;
  console.log(modalWindow);
  console.log(event.target);
  console.log(bigImage);
};
galleryList.addEventListener("click", onImageClick);

function closeTheOverlay(event) {
  event.target.closest('.js-lightbox').classList.remove('is-open');
  bigImage.src = '';
  console.log(bigImage);
};
lightboxOverlay.addEventListener("click", closeTheOverlay);
modalWindowCloseBtnEl.addEventListener("click", closeTheOverlay);
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && modalWindow.classList.contains('is-open')) {
    modalWindow.classList.remove('is-open');
    bigImage.src = '';
  }
  // console.log(e.key);
});
document.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowLeft' && modalWindow.classList.contains('is-open')) {
    bigImage.src = e.currentTarget.previousElementSibling.currentSrc;
    console.log(bigImage.previousSibling);
  } else if (e.key == 'ArrowRight' && modalWindow.classList.contains('is-open')) {
      bigImage.src = bigImage.nextElementSibling.currentSrc;
    }
});
