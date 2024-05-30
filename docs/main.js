const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

// Add a class for better styling control
menu.classList.add('hidden'); // Assuming the hidden class hides the menu

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('hidden'); // Toggle between hidden and visible states
});

