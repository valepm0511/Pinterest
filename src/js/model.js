window.model = {};
//llamando a la api de imagenes randomf
window.model.callApi = () => {
	fetch('https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=10&urls=true&httpsUrls=true')
	.then(res => res.json())
	.then(dogJSON => {
		dogPhoto = dogJSON;
		console.log(dogPhoto);
	});
	// let photo = document.getElementById('photo');
	const dogApi = (dogPhoto) =>{
		for (let i in dogPhoto){
			let dogi = dogPhoto[i].message;
		}
		console.log(dogi);
		return dogPhoto;
	}
};



