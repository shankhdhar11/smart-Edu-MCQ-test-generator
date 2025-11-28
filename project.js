function openpage() {
    window.location.href = "secondpage.html"
}
function openpage2() {
    window.location.href = "thirdpage.html";
}
function openpage5() {
    window.location.href = "fifthpage.html";
}
function loader(){
    
}

let index = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  index++;
  if (index > slides.length) { index = 1 }

  slides[index-1].style.display = "block";

  setTimeout(showSlides, 2000); 
}

showSlides();

function openpage6(){
    window.location.href="sixthpage.html";
}






