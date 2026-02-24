const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#menu11');

  hamburgerMenu.onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
  };

  
  
  document.addEventListener('click', function(e) {
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    };
  });