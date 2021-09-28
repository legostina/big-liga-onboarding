const headerModals = () => {
  let bodyHidden = document.querySelector ('body');
  let navMain = document.querySelector('.header__wrapper');
  let headerNav = document.querySelector('.header__nav');
  let containerBlock = document.querySelector('.container');
  let navToggle = document.querySelector('.main-nav__toggle');
  let popupBlue = document.querySelector ('.popup__blue');


  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.add('main-nav--opened');
      delClassClick();
    } else {
      navMain.classList.remove('main-nav--opened');
      addClassClick();
    }
  });

  function delClassClick() {
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.remove('toggle-closed');
    headerNav.classList.remove('nav-mobile');
    containerBlock.classList.remove('container-none');
    popupBlue.classList.remove('popup__blue--show');
    bodyHidden.classList.remove('body__scroll--hidden');
  }

  function addClassClick() {
    navMain.classList.add('main-nav--closed');
    navToggle.classList.add('toggle-closed');
    headerNav.classList.add('nav-mobile');
    containerBlock.classList.add('container-none');
    bodyHidden.classList.add('body__scroll--hidden');
  }
};

export {headerModals};
