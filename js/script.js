// Get the slider element
var slider = document.querySelector('.slider');

// Get all the slides
var slides = document.querySelectorAll('.slide');

// Set the initial slide index
var currentSlide = 0;

// Show the first slide
slides[currentSlide].classList.add('active');

// Function to show the next slide
function nextSlide() {
  // Remove the active class from the current slide
  slides[currentSlide].classList.remove('active');

  // Increment the slide index
  currentSlide++;

  // Wrap around to the first slide if at the end
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Add the active class to the next slide
  slides[currentSlide].classList.add('active');
}

// Automatically show the next slide every 3 seconds
setInterval(nextSlide, 3000);
