var item=document.getElementsByClassName('item-slid');
var pr=document.getElementById('prop');
var x=0;
var a;
var t=(item.length-1)*300
for(i=0;i<item.length;i++){
	item[i].style.backgroundImage='url(img/'+i+".jpg)"
}
document.onkeydown=function(){
	a=event.keyCode;
	if(a==39){
		if(x!=0){
			x=x+300;
			pr.style.marginLeft=x+"px";
			console.log(x);
		}
		
	}

if(a==37){
		if(x!=-t)
	// if(x!=-1200)
	{
		x=x-300;
		pr.style.marginLeft=x+'px';
		console.log(x);
	}
		
}
}