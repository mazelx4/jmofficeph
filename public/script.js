document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded.');

  // Example: Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Example: Responsive navigation menu (if needed)
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});

// script.js

// Wait until the page is fully loaded
window.addEventListener('load', function () {
  // Set a timeout to hide the flashing screen after 3 seconds
  setTimeout(function () {
    document.getElementById('flashing-screen').style.display = 'none';
  }, 3000); // 5000 milliseconds = 5 seconds
});
// script.js

// Wait until the page is fully loaded
window.addEventListener('load', function () {
  // Set a timeout to hide the flashing screen after 5 seconds
  setTimeout(function () {
    document.getElementById('flashing-screen').style.display = 'none';
  }, 9000); // 5000 milliseconds = 5 seconds
});
