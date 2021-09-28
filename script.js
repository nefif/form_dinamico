const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const nextBtnSec = document.querySelector(".next-1");
const nextBtnThird = document.querySelector(".next-2");
const submitBtn = document.querySelector(".submit");
const progressText = [...document.querySelectorAll(".step p")];
const progressCheck = [...document.querySelectorAll(".step .check")];
const bullet = [...document.querySelectorAll(".step .bullet")];
let max = 4;
let current = 1;

nextBtnFirst.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";
  
});
nextBtnSec.addEventListener("click", function(){
  slidePage.style.marginLeft = "-50%";

});
nextBtnThird.addEventListener("click", function(){
  slidePage.style.marginLeft = "-75%";

});
submitBtn.addEventListener("click", function(){
    alert("Your Form Successfully Signed up");
    
});



