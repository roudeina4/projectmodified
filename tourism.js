const slider = document.querySelector('.slider')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const carsel = document.querySelector(".carsel")
const arrowIcons = document.querySelectorAll(".wrapper span")
const firstImg = carsel.querySelectorAll("img")[0];

//most visited spots





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






//first slider


const indicatorParents = document.querySelector('.controls ul')
var sectionIndex = 0;
document.querySelectorAll('.controls li').forEach(function(indicator , Ind){
    indicator.addEventListener('click',function(){
        sectionIndex = Ind;
        document.querySelector('.controls .selected').classList.remove('selected')
        indicator.classList.add('selected');
        slider.style.transform ='translate(' +(sectionIndex) * -25 + '%)' ;      
    
   
    });
})


rightArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    document.querySelector('.controls .selected').classList.remove('selected')

    indicatorParents.children[sectionIndex].classList.add('selected');

    slider.style.transform ='translate(' +(sectionIndex)* -25 + '%)' ;
})
leftArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected')

    indicatorParents.children[sectionIndex].classList.add('selected');

    slider.style.transform ='translate(' +(sectionIndex) * -25 + '%)' ;
})



