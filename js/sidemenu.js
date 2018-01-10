function open_menu(){
	var m=document.getElementById("sidemenu");
	m.className="";
}
function close_menu(){
	var m=document.getElementById("sidemenu");
	m.style.animation="sidehide 1s";
	setTimeout(function(){
		m.style="";
		m.className="hidden";
	},1000);
}