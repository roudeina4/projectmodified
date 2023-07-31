var firstIndex=0;
function automaticSlide(){
    setTimeout(automaticSlide,3000)
    var pics;
    const img = document.getElementsByClassName('img-container');
    const titles = document.querySelectorAll('.title');
    for(pics=0; pics<img.length;pics++){
        img[pics].style.display="none";
        titles[pics].style.display="none";


    }
    firstIndex++;
    if(firstIndex > img.length) {
        firstIndex = 1
    }
    img[firstIndex -1].style.display="block"
    titles[firstIndex -1].style.display="block"

}

automaticSlide();