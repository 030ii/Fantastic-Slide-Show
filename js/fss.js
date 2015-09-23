(function(){
	var current = 0;
	var max = 0;
	var container;
	var interval;
	var width = window.innerWidth;

	// var styleEl = document.createElement('style');
	// var styleSheet;

	// document.head.appendChild(styleEl);
	// styleSheet = styleEl.sheet;

	// styleSheet.insertRule("
	// 	@keyframes slidy {
 //    		0% { left: 0%; }
 //    		20% { left: 0%; }
 //    		25% { left: -100%; }
 //    		45% { left: -100%; }
 //    		50% { left: -200%; }
 //    		70% { left: -200%; }
 //    		75% { left: -300%; }
 //    		95% { left: -300%; }
 //    		100% { left: -400%; }
	// 	}");	

// var sheet = (function() {
// 	var style = document.createElement("style");
// 	style.appendChild(document.createTextNode(""));
// 	document.head.appendChild(style);
// 	return style.sheet;
// })();

// sheet.insertRule("
// 		@keyframes slidy {
//     		0% { left: 0%; }
//     		20% { left: 0%; }
//     		25% { left: -100%; }
//     		45% { left: -100%; }
//     		50% { left: -200%; }
//     		70% { left: -200%; }
//     		75% { left: -300%; }
//     		95% { left: -300%; }
//     		100% { left: -400%; }
// 		}", 1);



	document.addEventListener("DOMContentLoaded", init);

	function init(){
		container = document.querySelector("figure");
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

//		container.style.transform = "translate("+width*current+"px , 0)";

		animate(current);
	}

	function next(e){
		current++;
		if(current>max-2) current = 0;

		container.style.transform = "translate(-"+width*current+"px , 0)";
		
		animate(current);
	}

	function animate(cur){
		var moveX = current * width;

		console.log(cur);

		clearInterval(interval);
		interval = setInterval(function(){ container.classList.add('auto'); }, 3000);

	}
	
})();