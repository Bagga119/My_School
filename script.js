// Toggle navigation menu on small screens
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Learn More button action
function learnMore() {
  window.scrollTo({
      top: document.querySelector('.about').offsetTop,
      behavior: 'smooth',
  });
}

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
});