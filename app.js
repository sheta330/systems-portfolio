const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const themeToggle = document.querySelector('.theme-toggle');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

if (localStorage.getItem('portfolio-theme') === 'dark') {
  document.body.classList.add('dark');
}

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => mainNav?.classList.remove('open'));
});

document.querySelectorAll('.filter').forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((button) => button.classList.remove('active'));
    filterButton.classList.add('active');
    const filter = filterButton.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener('click', () => {
    const email = link.getAttribute('href').replace('mailto:', '');
    if (navigator.clipboard) navigator.clipboard.writeText(email);
  });
});