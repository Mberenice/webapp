/**
 * 
 */
document.addEventListener('DOMContentLoaded', function() {
  // Function to handle the About click event
  document.getElementById('About').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    alert('This is the About section!'); 
  });

  // Function to handle the Contact click event
  document.getElementById('contact').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    alert('This is the Contact section!');
  });
});
