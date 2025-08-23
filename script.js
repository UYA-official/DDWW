
// ===== script.js : 인터랙션 =====
const drawer = document.getElementById('mobile-drawer');
const toggleBtn = document.querySelector('.menu-toggle');
const backdrop = drawer?.querySelector('.backdrop');
const closers = drawer?.querySelectorAll('[data-close="drawer"]');

function openDrawer(){
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  toggleBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeDrawer(){
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  toggleBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

toggleBtn?.addEventListener('click', ()=>{
  if(drawer.classList.contains('open')) closeDrawer(); else openDrawer();
});
backdrop?.addEventListener('click', closeDrawer);
closers?.forEach(a => a.addEventListener('click', closeDrawer));

// ESC to close
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
});

// 현재 연도
document.getElementById('year').textContent = new Date().getFullYear();
