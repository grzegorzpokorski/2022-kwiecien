import 'bootstrap';

window.addEventListener('scroll',(e)=>{
	const nav = document.querySelector('#menu');
	if(window.pageYOffset > 0){
		nav.classList.add("bg-white");
		nav.classList.add("shadow-sm");
		nav.classList.remove("py-md-2");
	}else{
		nav.classList.remove("bg-white");
		nav.classList.remove("shadow-sm");
		nav.classList.add("py-md-2");
	}
});