// DOM VARIABLES
// NAVBAR ALL HTML FILES
let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.hamburger');
let linkDisplay = document.querySelector('.link-display');
// DOM VARIABLES INDEX HTML FILE 
let firstImage = document.querySelector('.slide-image-one');
let firstText = document.querySelector('.slide-text-one');
let secondImage = document.querySelector('.slide-image-two');
let secondText = document.querySelector('.slide-text-two');
let thirdImage = document.querySelector('.slide-image-three');
let thirdText = document.querySelector('.slide-text-three');


// DOM VARIABLES FOR MINI CONTACT FORM - EVERY PAGE
let pencilBubble = document.querySelector('.pencil-bubble');
let exitBubble = document.querySelector('.exit-bubble');
let miniForm = document.querySelector('.extra-contact')


// EVENT LISTENERS
hamburger.addEventListener('click', () => {
  linkDisplay.classList.contains('hide') ? linkDisplay.classList.remove('hide') : linkDisplay.classList.add('hide');
})

pencilBubble.addEventListener('click', () => {
  pencilBubble.classList.add('hide');
  exitBubble.classList.remove('hide');
  miniForm.classList.remove('hide');
})

exitBubble.addEventListener('click', () => {
  exitBubble.classList.add('hide');
  pencilBubble.classList.remove('hide');
  miniForm.classList.add('hide');
})

window.addEventListener("scroll", () => {
  // NAVBAR SCROLL EVENT
  window.scrollY > 35 ? navbar.classList.add('darken') : navbar.classList.remove('darken');

  // GRID SET ONE ANIMATION
  if (window.scrollY > 500) {
    firstImage.classList.add('slider-from-left');
    firstImage.classList.remove('opacity');
    firstText.classList.add('slider-from-right');
    firstText.classList.remove('opacity');
  } else if (window.scrollY < 20) {
    firstImage.classList.remove('slider-from-left');
    firstImage.classList.add('opacity');
    firstText.classList.remove('slider-from-right');
    firstText.classList.add('opacity');
  }

  // GRID SET TWO ANIMATION
  if (window.scrollY > 1000) {
    secondImage.classList.add('slider-from-right');
    secondImage.classList.remove('opacity');
    secondText.classList.add('slider-from-left');
    secondText.classList.remove('opacity');
  } else if (window.scrollY < 20) {
    secondImage.classList.remove('slider-from-right');
    secondImage.classList.add('opacity');
    secondText.classList.remove('slider-from-left');
    secondText.classList.add('opacity');
  }

  // GRID SET THREE ANIMATION
  if (window.scrollY > 1700) {
    thirdImage.classList.add('slider-from-left');
    thirdImage.classList.remove('opacity');
    thirdText.classList.add('slider-from-right');
    thirdText.classList.remove('opacity');
  } else if (window.scrollY < 20) {
    thirdImage.classList.remove('slider-from-left');
    thirdImage.classList.add('opacity');
    thirdText.classList.remove('slider-from-right');
    thirdText.classList.add('opacity');
  }


})

// OUR SERVICES HTML DOM VARIABLES
const mainSection = document.querySelector('.services-main');
const choiceOne = document.querySelector('.gi-one');
const choiceTwo = document.querySelector('.gi-two');
const choiceThree = document.querySelector('.gi-three');
const choiceFour = document.querySelector('.gi-four');
const leftArr = document.querySelector('.left-arr')
const rightArr = document.querySelector('.right-arr')


choiceOne.addEventListener('click', () => {
  num = 0;
  updateDisplay('finacc');
});

choiceTwo.addEventListener('click', () => {
  num = 1;
  updateDisplay('itser');
});

choiceThree.addEventListener('click', () => {
  num = 2;
  updateDisplay('indus');
});
choiceFour.addEventListener('click', () => {
  num = 3;
  updateDisplay('offad');
});


// FUNCTION FOR SWITCHING BETWEEN HTML CONTENT
function updateDisplay(serviceType) {
  let i, servcontent;
  servcontent = document.getElementsByClassName("servicescontent");
  for (i = 0; i < servcontent.length; i++) {
    servcontent[i].style.display = "none";
  }
  document.getElementById(serviceType).style.display = "block";
}

// ON PAGE LOAD SHOW FINANCE 6 ACCOUNTING SERVICES HTML CONTENT
updateDisplay('finacc');

let serviceArr = ['finacc', 'itser', 'indus', 'offad'];

let num = 0;
rightArr.addEventListener('click', () => {
  if (num >= 3) {
    num = 3;

  } else {
    num++;
    updateDisplay(serviceArr[num])
  }
})

leftArr.addEventListener('click', () => {
  if (num <= 0) {
    num = 0;

  } else {
    num--;
    updateDisplay(serviceArr[num])
  }
})