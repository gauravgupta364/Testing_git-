// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form submission
document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.style.color = '#ffdd57';
    status.textContent =
      'Thanks for your message, I will get back to you soon!';
    this.reset();
  });
