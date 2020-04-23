const gear = document.getElementById('preferences-gear');
const menus = document.querySelectorAll('.menu');
const pref = document.getElementsByClassName('pref');

function hideMenus() {
  menus.forEach((menu) => {
    menu.classList.add('hidden');
  });
}

gear.addEventListener('click', (event) => {
  event.stopPropagation();
  pref[0].classList.toggle('hidden');
});

document.addEventListener('click', hideMenus);
