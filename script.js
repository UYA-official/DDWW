const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');
if (toggle && navList) {
  toggle.addEventListener('click', () => navList.classList.toggle('open'));
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({top, behavior:'smooth'});
      navList && navList.classList.remove('open');
    }
  });
});
