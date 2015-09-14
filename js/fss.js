(function(){
	var current = 0;
	var max = 0;
	var container;
	var interval;
	var width = window.innerWidth;


	document.addEventListener("DOMContentLoaded", init);
	window.addEventListener('resize', container_size);

	function init(){
		container = document.querySelector(".slide ul");
		max = container.children.length;

		// interval = setInterval(next, 3000);

// var sheet = document.createElement('style')
// 	sheet.innerHTML = 
// 	".slide ul.move_right{
// 		transform: translate( "+width+"px,0);
// 		-webkit-transform: translate( "+width+"px,0);
// 	}";
// 	document.body.appendChild(sheet);
	

		container_size();
		events();
	}

	function events(){
		document.querySelector(".prev_btn").addEventListener("click", prev);
		document.querySelector(".next_btn").addEventListener("click", next);
	}

	function prev(e){
		current--;
		if(current < 0) current = max-1;
	
		container.classList.add('move_right');
	 // container.style.transform = 'translate(' + xPosition + 'px, ' + yPosition + 'px)';

		animate(current);
	}

	function next(e){
		current++;
		if(current>max-1) current = 0;
		
		container.classList.add('move_left');
	
		animate(current);
	}

	function animate(cur){
		// var moveX = current * 1280;
		console.log(cur);

		// clearInterval(interval);
		// interval = setInterval(next, 3000);
	}

	function container_size() {
		// var width = window.innerWidth;
		var height = window.innerHeight;
		var triple_width = width * 3;

		container.style.width = width+"px";
		document.querySelector(".slide ul").style.width = triple_width+"px";
		
		for(var i=0; i<max; i++){
			document.querySelectorAll(".slide ul li img")[i].style.width = width+"px";
			document.querySelectorAll(".slide ul li img")[i].style.height = height+"px";
		}
	}
	
})();