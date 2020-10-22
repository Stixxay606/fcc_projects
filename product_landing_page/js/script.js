const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');

// toggle open class
function toggle() {
  menuBtn.classList.toggle('open');
  menuItems.classList.toggle('open');
}

// main toggle
menuBtn.addEventListener('click', () => {
  toggle();
});

// toggle on item check if open
menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    if (menuBtn.classList.contains('open')) {
      toggle();
    }
  });
});
