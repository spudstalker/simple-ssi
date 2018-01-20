// Link highlighting
var navLinks=document.getElementsByClassName("navLink");
for(i=0;i<navLinks.length;i++){
	if(navLinks[i].href==document.URL){
		navLinks[i].className="hilite"
	}
}

// Render math with katex.
document.body.onload=function(){
	var mathTags=document.getElementsByClassName("math");
	for(var i=0;i<mathTags.length;i++){
		mathTags[i].innerHTML=katex.renderToString(mathTags[i].innerHTML.replace(/\&amp\;/g,"&"))
	}
}
