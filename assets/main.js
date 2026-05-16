const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const toTop = document.querySelector('.to-top');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const syncTopButton = () => {
  if (!toTop) return;
  toTop.hidden = window.scrollY <= 500;
};

window.addEventListener('scroll', syncTopButton, { passive: true });
syncTopButton();
