(function(){
	var current = 0;
	var max = 0;
	var container;
	var dots;
	var interval;
	var width = window.innerWidth;


	document.addEventListener("DOMContentLoaded", init);

	function init(){
		container = document.querySelector("figure");
		dots = document.querySelector(".nav_dots");
		max = container.children.length;

		console.log("init");

		interval = setInterval(function(){ container.classList.add('auto'); }, 3000);
		
		events();
	}

	function events(){
		document.querySelector(".prev_btn").addEventListener("click", prev);
		document.querySelector(".next_btn").addEventListener("click", next);
	}

	function prev(e){
		current--;
		if(current < 0) current = max-2; // 마지막 사진이 첫사진과 같으니까 -1이 아니라 -2로 한다. 

		moving(current);
	}

	function next(e){
		current++;
		if(current>max-2) current = 0;
		
		moving(current);
	}

	function moving(cur){		
		var prevDots = document.querySelector(".dot_current");

		prevDots.className = "";
		dots.children[cur].classList.add('dot_current');

		container.style.transform = "translate(-"+width*current+"px , 0)";

		clearInterval(interval);
		interval = setInterval(function(){ container.classList.add('auto'); }, 3000);
	}

})();