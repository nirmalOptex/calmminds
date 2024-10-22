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


document.getElementById('quiz').addEventListener('click', function() {
  alert('Quiz is under development');
});
document.getElementById('learn').addEventListener('click', function() {
  alert('Resource page is under development');
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




//docctor page


function searchDoctor() {
  const searchQuery = document.getElementById('searchBar').value.toLowerCase();
  const doctorCards = document.querySelectorAll('.card');
  
  doctorCards.forEach(card => {
    const doctorName = card.querySelector('h3').innerText.toLowerCase();
    
    // If the doctor's name includes the search term, show the card; otherwise, hide it.
    if (doctorName.includes(searchQuery)) {
      card.style.display = "block"; // Show card
    } else {
      card.style.display = "none"; // Hide card
    }
  });
}



