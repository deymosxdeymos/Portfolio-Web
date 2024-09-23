document.addEventListener('DOMContentLoaded', function () {
  // Dropdown Menu Toggle
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (dropbtn && dropdownContent) {
    dropbtn.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
      dropdownContent.classList.toggle('show');
    });

    // Close Dropdown if Clicked Outside
    document.addEventListener('click', function (event) {
      if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
        dropdownContent.classList.remove('show');
      }
    });
  }

  // Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const menuButtons = document.querySelector('.menu-buttons-wrapper');

  if (hamburger && menuButtons) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      menuButtons.classList.toggle('active');
    });

    // Close Hamburger Menu when a link is clicked
    const menuLinks = menuButtons.querySelectorAll('a');
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) { // Only on mobile
          menuButtons.classList.remove('active');
          hamburger.classList.remove('active');
        }
      });
    });
  }

  // Close menus on window resize (in case user switches from mobile to desktop view)
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      if (menuButtons) menuButtons.classList.remove('active');
      if (hamburger) hamburger.classList.remove('active');
      if (dropdownContent) dropdownContent.classList.remove('show');
    }
  });
});
