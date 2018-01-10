var navbar,pages,searchbox;
		
function on_search(){
	if(searchbox.value==""){
		window.alert("Enter something!");
		return false;
	}
	return true;
}
function active(navind){
	for(i=0;i<navbar.children.length-1;i++){
		navbar.children[i].classList.remove("active");
	}
	navbar.children[navind].classList.add("active");
}
function hide(e){
	e.style.display="none";
}
function show(e){
	e.style.display="block";
}
function hideAll(){
	for(i=0;i<pages.children.length;i++){
		hide(pages.children[i]);
	}
}
function init(){
	console.log("It seems like you are interested in our website's source. You may join us to improve our website!\n\tTravor Liu\t<travor_lzh@outlook.com>");
	navbar=document.getElementsByClassName("navleft")[0];
	pages=document.getElementById("pages");
	searchbox=document.getElementById("search");
	switch_page(0);
}
function switch_page(ind){
	hideAll();
	show(pages.children[ind]);
	active(ind);
}