fetch('navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar').innerHTML = data;
});

fetch('footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
});




const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;

function moveSlide(n) {
    counter += n;
    if (counter < 0) {
        counter = images.length - 1;  
    } else if (counter >= images.length) {
        counter = 0;  
    }
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}


// service page
// Alert when the user clicks on the quiz button
// document.querySelector('.quiz-btn').addEventListener('click', () => {
//     alert('Quiz functionality is under development!');
//   });
  
//   // Alert when joining a community
//   const joinButtons = document.querySelectorAll('.join-btn');
//   joinButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       alert('Thank you for joining!');
//     });
//   });

  
// Hamburger menu toggle

  
document.addEventListener('DOMContentLoaded', function () {
  
const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});




