function open_menu(){
	var m=document.getElementById("sidemenu");
	m.classList.remove("hidden");
}
function close_menu(){
	var m=document.getElementById("sidemenu");
	m.style.animation="sidehide 1s";
	setTimeout(function(){
		m.style="";
		m.classList.add("hidden");
	},1000);
}