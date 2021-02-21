let menu = document.getElementById("menu");
let contNav = document.getElementById("contNav")
let contador = 0;

menu.addEventListener("click",function(){
	if (contador==0) {
		contNav.className = ('contNav dos');
		contador=1;
	}else{
		contNav.classList.remove('dos');
		contNav.className = ('contNav uno');
		contador=0;
	}
})