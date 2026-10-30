const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
const phone = '254792112045';
document.querySelectorAll('.wa-book').forEach(link => {
  const packageName = link.dataset.package;
  const message = `Hello Rhonda Spirit Tours, I am interested in ${packageName}. Please share availability and booking details.`;
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener';
});
document.getElementById('year').textContent = new Date().getFullYear();
