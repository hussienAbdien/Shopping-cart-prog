var imgList=Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer=document.querySelector(".lightbox-container");
var lightBoxItem=document.querySelector(".lightbox-item");
var leftIcon=document.getElementById("left");
var prvIcon=document.getElementById("right");
var closei=document.getElementById("closeBtn");

var currentIndex=0;

for(var i=0;i<imgList.length;i++){
 imgList[i].addEventListener("click",function(eventInfo){

    currentIndex=imgList.indexOf(eventInfo.target)

     var imgSrc=eventInfo.target.getAttribute("src");
     lightBoxItem.style.backgroundImage=`url(${imgSrc})` ;
     lightBoxContainer.style.display="flex";    
 })
}

function nextSlide(){
    currentIndex++;
    if(currentIndex==imgList.length-1){
        currentIndex=0;
    }
    var imgSrc=imgList[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage=`url(${imgSrc})` ;

}
function prvSlide(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgList.length-1;
    }
    var imgSrc=imgList[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage=`url(${imgSrc})` ;

}

function close(){
    lightBoxContainer.style.display="none"
}
leftIcon.addEventListener("click",nextSlide);
prvIcon.addEventListener("click",prvSlide);
closei.addEventListener("click",close);

document.addEventListener("keydown",function(e){
    if(e.code=="ArrowLeft"){
        nextSlide()
    }
   // console.log(e)
})