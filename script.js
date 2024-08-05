
	let a = document.querySelectorAll('nav a');
	let active = document.querySelector('.active');

	a.forEach(e=>{
		e.addEventListener('click',()=>{
			active.style.width= e.clientWidth +'px';
			active.style.left= e.offsetLeft +'px';
	
	})



		})
		active.style.width = a[0].clientWidth +'px';
		active.style.left= a[0].offsetLeft +'px';