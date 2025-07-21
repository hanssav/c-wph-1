const toggleBtn = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

let isOpen = false;

const updateMenuState = () => {
  if (isOpen) {
    mobileMenu.classList.remove('hidden');
    menuIcon.src = './assets/icons/x-close.png'; // icon "X"
    document.body.classList.add('no-scroll');
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.src = './assets/icons/menu-icon.png'; // hamburger
    document.body.classList.remove('no-scroll');
  }
};

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  updateMenuState();
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && isOpen) {
    isOpen = false;
    updateMenuState();
  }
});
