const loaderModals = () => {
  let loaderWindow = document.querySelector('.loader');
  let screenWidth = document.documentElement.clientWidth;
  let containerBlock = document.querySelector('.container__block');

  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      loaderWindow.classList.add('loader--none');
      setTimeout(function () {
        containerBlock.style.display = 'flex';
      }, 200);
    }
  });

  if (screenWidth <= 768) {
    document.addEventListener('click', function () {
      loaderWindow.classList.add('loader--none');
      containerBlock.style.display = 'flex';
    });
  }

};

export {loaderModals};
