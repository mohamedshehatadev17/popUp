var myImages=Array.from(document.querySelectorAll(".item img"));
// var lightBoxContainer= document.getElementById("light-box");
var lightBoxContainer=document.querySelector(".light-box-container");
var prev =document.getElementById("previous");
var close=document.getElementById("close");
var next=document.getElementById("next");
var cursor=document.getElementById("cusor");
var currentIndex=0;
for(var i=0;i<myImages.length;i++){
    myImages[i].addEventListener("click",showBox);
}
function showBox(e){
        var imgSrc = e.target.src;
        lightBoxContainer.style.display="flex";
        lightBoxContainer.firstElementChild.style.backgroundImage="url("+imgSrc+")";
        currentIndex=myImages.indexOf(e.target);
    }
close.addEventListener("click",hideShow);
next.addEventListener("click",goNext);
prev.addEventListener("click",goBack);
document.addEventListener("keydown",addEventKeyBoard);
document.addEventListener("mousemove",cursorBody);

function hideShow(){
    lightBoxContainer.style.display="none";
}
function goNext(){
    currentIndex++;
    if(currentIndex==myImages.length){
        currentIndex=0;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage="url("+myImages[currentIndex].src+")";
    console.log(currentIndex)
}
function goBack(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=myImages.length-1;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage="url("+myImages[currentIndex].src+")";
    console.log(currentIndex)
}
function addEventKeyBoard(e){
    if(e.key=="ArrowRight"){
        goNext();
    }else if(e.key=="ArrowLeft"){
        goBack();
    }else if(e.key ==" "){
        hideShow();
    }
}
function cursorBody(e){
    console.log(e);
    var x=e.clientX;
    var y=e.clientY;
    cursor.style.left=x+"px";
    cursor.style.top=y+"px";
}