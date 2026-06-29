// Mobile menu toggle
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('open');
  }
}

// Close menu when link clicked
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu) mobileMenu.classList.remove('open');
    });
  });
});

// Contact form submission
function submitForm(e) {
  e.preventDefault();
  const msg = document.getElementById('successMsg');
  if (msg) {
    msg.style.display = 'block';
    e.target.reset();
  }
}
