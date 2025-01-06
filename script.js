
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}


function learnMore() {
  window.scrollTo({
      top: document.querySelector('.about').offsetTop,
      behavior: 'smooth',
  });
}


document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
});
