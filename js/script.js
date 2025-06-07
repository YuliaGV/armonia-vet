  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('mainNav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });