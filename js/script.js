

fetch('navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar').innerHTML = data;
});

// fetch('footer.htmlfetch('navbar.html')
// .then(response => response.text())
// .then(data => {
//   document.getElementById('navbar').innerHTML = data;
// });

fetch('footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
});

document.getElementById('learn').addEventListener('click', function() {
  alert('Resource page is under development');
});
document.getElementById('sharenow').addEventListener('click', function() {
  alert('Resource is under development');
});



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


function searchCommunities() {
  const searchQuery = document.getElementById('searchBar-section').value.toLowerCase();
  const CommunityCards = document.querySelectorAll('.card');
  
  CommunityCards.forEach(card => {
    const communityName = card.querySelector('h3').innerText.toLowerCase();
    
  
    if (communityName.includes(searchQuery)) {
      card.style.display = "block"; 
    } else {
      card.style.display = "none"; 
    }
  });
};

function searchquicklinks() {
  const searchlinks = document.getElementById('quicklinks-search').value.toLowerCase();
  const quickCards = document.querySelectorAll('.card');
  
  quickCards.forEach(card => {
    const quickName = card.querySelector('h3').innerText.toLowerCase();
    
  
    if (quickName.includes(searchlinks)) {
      card.style.display = ""; 
    } else {
      card.style.display = "none"; 
    }
  });
};





document.getElementById('quiz').addEventListener('click', function() {
  alert('Quiz is under development');
});
document.getElementById('learn').addEventListener('click', function() {
  alert('Resource page is under development');
});


document.getElementById('book').addEventListener('click', function() {
  alert('Quiz is under development');
});
document.getElementById('doc-learn').addEventListener('click', function() {
  alert('Resource page is under development');
});




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


function searchCommunities() {
  const searchQuery = document.getElementById('searchBar-section').value.toLowerCase();
  const CommunityCards = document.querySelectorAll('.card');
  
  CommunityCards.forEach(card => {
    const communityName = card.querySelector('h3').innerText.toLowerCase();
    
  
    if (communityName.includes(searchQuery)) {
      card.style.display = "block"; 
    } else {
      card.style.display = "none"; 
    }
  });
};

//quiz 
function calculateScore() {
  const form = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');

  // Initialize total score
  let totalScore = 0;

  // Get answers
  const answers = form.querySelectorAll('input[type="radio"]:checked');
  
  if (answers.length < 3) {  // Make sure all questions are answered
      resultDiv.textContent = "Please answer all the questions.";
      return;
  }

  // Calculate the score based on the selected values
  answers.forEach(answer => {
      totalScore += parseInt(answer.value);
  });

  // Provide feedback based on the score
  let feedback = '';
  if (totalScore <= 6) {
      feedback = "You seem to be doing well, but keep an eye on your mental health.";
  } else if (totalScore <= 9) {
      feedback = "You may be experiencing some stress or anxiety. Consider taking time to relax.";
  } else {
      feedback = "You seem to be experiencing significant mental health challenges. It might be helpful to seek support.";
  }

  resultDiv.textContent = `Your total score is: ${totalScore}. ${feedback}`;
}

