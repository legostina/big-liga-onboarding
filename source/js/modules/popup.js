const popupModals = () => {
  let screenWidth = window.screen.width;
  let popupBlue = document.querySelector('.popup__blue');
  let containerWindow = document.querySelector('.container');

  if (screenWidth <= 768) {
    containerWindow.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupBlue.classList.toggle('popup__blue--show');
      containerWindow.classList.add('container-none');
    });

    popupBlue.addEventListener('click', function () {
      popupBlue.classList.remove('popup__blue--show');
      setTimeout(function () {
        containerWindow.classList.remove('container-none');
      }, 500);

    });
  }
};

export {popupModals};
