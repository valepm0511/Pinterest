window.model = {};
// llamando a la api de imagenes
window.model.callApi = () => {
  fetch('src/js/photos.json')
  // fetch('http://estalista.cl/photos.json')
    .then(res => res.json())
    .then(photoJSON => {
      // console.log(photoJSON);
      window.view.viewPhoto(photoJSON);
    });
};


