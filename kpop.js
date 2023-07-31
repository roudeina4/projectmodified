const carsel = document.querySelector(".carsel")
const arrowIcons = document.querySelectorAll(".container span")
const firstImg = carsel.querySelectorAll("img")[0];




let isDragStart = false, prevPageX ,prevScrollLeft ,positionDiff
let firstImgWIdth = firstImg.clientWidth + 14
arrowIcons.forEach(icon => {
    icon.addEventListener("click" ,function(){
          carsel.scrollLeft += icon.id ==  "left"   ?  -firstImgWIdth :  firstImgWIdth  })
    
});
const autoSlide = () => {
    positionDiff = Math.abs(positionDiff);
    let firstImgWIdth = firstImg.clientWidth + 14;
    let valDiffrence = firstImgWIdth - positionDiff;
    if(carsel.scrollLeft > prevScrollLeft){
        return carsel.scrollLeft += positionDiff > firstImgWIdth / 3 ? valDiffrence :  -positionDiff;
    }    
carsel.scrollLeft += positionDiff > firstImgWIdth / 3 ? valDiffrence :  -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX  || e.touches[0].pageX;
    prevScrollLeft = carsel.scrollLeft;

}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    positionDiff =( e.pageX || e.touches[0].pageX) - prevPageX;
    carsel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    autoSlide();
}
carsel.addEventListener("mousedown" , dragStart)
carsel.addEventListener("touchstart" , dragStart)

carsel.addEventListener("mousemove" , dragging)
carsel.addEventListener("touchmove" , dragging)

carsel.addEventListener("mouseup" , dragStop)
carsel.addEventListener("mouseleave" , dragStop)
carsel.addEventListener("touchend" , dragStop)

/*

body.addEventListener("scroll", () => {
    if (!video.paused) {
      video.pause();
    }
  });*/

const video = document.querySelector("video");

video.muted=true;

trailer.addEventListener("scroll",function(){
    if(video.muted=false){
        video.muted=true;
    }
    else{
        video.muted = true;
    }
})



video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {

    video.pause();
  }
});

