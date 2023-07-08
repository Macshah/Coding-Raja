var slideIndex=1;
showSlide(slideIndex);

function pluSide(n){
    showSlide(slideIndex+=n);
}
function showSlide(n){
    var i;
    var x=document.getElementsByClassName("window");
    if(n>x.length){slideIndex=1}
    if(n<1){slideIndex=x.length}
    for(i=0;i<x.length ;i++){
        x[i].style.display="none";
    }
    x[slideIndex-1].style.display="block";
    setTimeout(showSlide, 3000); 

}