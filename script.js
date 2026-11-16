const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu() {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}
menu.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(opened));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  projects.forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.type !== button.dataset.filter;
  });
}));
