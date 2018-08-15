window.model = {};
//llamando a la api de imagenes randomf
window.onload = () => {
	fetch('src/js/photos.json')
	.then(res => res.json())
	.then(photoJSON => {
		// console.log(photoJSON);
		window.view.viewPhoto(photoJSON);
	});
};






