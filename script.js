var next=document.querySelector('.next');
var previ=document.querySelector('.previ');
var outer=document.querySelector('.outer');
// var inner=document.querySelector('.inner');
var box=document.querySelectorAll('.outer .box');
var know=document.querySelectorAll('.outer span');

var extra_box=2;

function align(a){
	var list1=[['relative','visible'],['absolute','hidden']];
	var b=a+1;
	if(b > list1.length-1){
		b=0;
	}
	for(var i=0;i<extra_box;i++){
		box[box.length-1-i].style.position=list1[a][0];
		box[box.length-1-i].style.visibility=list1[a][1];;
		box[i].style.position=list1[b][0];
		box[i].style.visibility=list1[b][1];
	}		
}
function trans(a){
	var list2=[['translateX(0)',"visible"],['translateX(30px)',"hidden"]];
	var b=a+1;
	if(b > list2.length-1){
		b=0;
	}
	previ.style.transform=list2[a][0];
	previ.style.visibility=list2[a][1];
	next.style.transform=list2[b][0];
	next.style.visibility=list2[b][1];
}
next.addEventListener('click',() => {
	trans(0);
	align(0);
})
previ.addEventListener('click',() => {
	trans(1);
	align(1);
})

// function show_inner(){
// 	outer.style.visibility="hidden";
// 	outer.style.position="absolute";
// 	inner.style.visibility='visible';
// 	inner.style.position='relative';
// 	next.style.visibility='hidden';
// 	previ.style.visibility='hidden';
// 	for(var i=0;i<box.length;i++){
// 		box[i].style.position="absolute";
// 		box[i].style.visibility='hidden';
// 	}
// }
// for(var i=0;i<box.length;i++){
// 	box[i].addEventListener("click",show_inner);
// }
