const loaderModals = () => {
  let loaderWindow = document.querySelector('.loader');
  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      loaderWindow.classList.add('loader--none');
    }
  });
};

export {loaderModals};
