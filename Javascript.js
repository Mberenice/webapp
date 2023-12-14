





document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Your slideshow functions here...
  function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Check for index boundaries
  if (n > slides.length) { 
    slideIndex = 1;
  }
  if (n < 1) { 
    slideIndex = slides.length;
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide and set dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to move to the next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Automatic slideshow
function autoSlide() {
  showSlides(slideIndex++);
}

// Initial call to start slideshow
showSlides(slideIndex);

// Set interval for auto-sliding, change 3000 to your desired time in milliseconds
setInterval(autoSlide, 3000);



  // Handle form submission
  let loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;

      
     
        // Simulated validation - assuming a correct login for this example
        // Replace this with your actual validation logic using AJAX or other methods
        if (email === 'bmigisha@cub.uca.edu' && password === 'Nikita250!') {
          // Redirect to Home.html
         window.location.replace('Home.html');
        } else {
          alert('Invalid email or password. Please try again.');
          // Or handle the error in a different way, like showing an error message on the page
        }
    });
  }
});