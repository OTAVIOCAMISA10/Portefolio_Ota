const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

if (btnMenu && menu && overlay) {
  btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
  });

  const btnFechar = document.querySelector('.menu-mobile .btn-fechar');
  if (btnFechar) {
    btnFechar.addEventListener('click', () => {
      menu.classList.remove('abrir-menu');
    });
  }

  overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
  });
}
