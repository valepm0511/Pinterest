window.model = {};
//llamando a la api de imagenes random
window.onload = () => {
	fetch('src/js/photos.json')
	.then(res => res.json())
	.then(photoJSON => {
		// console.log(photoJSON);
		window.view.viewPhoto(photoJSON);
	});
};






