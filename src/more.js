import arrow1 from './images/icon.svg';
import arrow2 from './images/icon2.svg';
const img1 = new Image();
img1.src = arrow1;

const img2 = new Image();
img2.src = arrow2;

const btn = document.querySelector(".about__more");

btn.addEventListener("click", btnClick);

const content = document.querySelector(".about__text");

const image = document.querySelector(".about__arrow");

function btnClick() { 
  
  content.classList.toggle('about__text--invisible');
  
  if (content.classList.contains("about__text--invisible")) {
    btn.textContent = "Читать далее";
    image.src = "images/icon.svg";
  } else {
    btn.textContent = "Скрыть";
    image.src = "images/icon2.svg";
  };
};


const btn2 = document.querySelector(".brands__more-button");

btn2.addEventListener("click", btn2Click);

const content2 = document.querySelector(".swiper-container");

const image2 = document.querySelector(".brands__more-arrows");

function btn2Click() { 
  
  content2.classList.toggle('brands__container--invisible');
  
  if (content2.classList.contains("brands__container--invisible")) {
    btn2.textContent = "Показать все";
    image2.src = "images/icon.svg";
  } else {
    btn2.textContent = "Скрыть";
    image2.src = "images/icon2.svg";
  };
};



const btn3 = document.querySelector(".types__more-button");

btn3.addEventListener("click", btn3Click);

const content3 = document.querySelector(".types__container");

const image3 = document.querySelector(".types__more-arrows");

function btn3Click() { 
  
  content3.classList.toggle('types__container--invisible');
  
  if (content3.classList.contains("types__container--invisible")) {
    btn3.textContent = "Показать все";
    image3.src = "images/icon.svg";
  } else {
    btn3.textContent = "Скрыть";
    image3.src = "images/icon2.svg";
  };
}

