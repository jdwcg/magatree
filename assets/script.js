// 찜하기
$(function(){
  $('.bi-heart-fill').css("display", "none");

  $('.bi-heart').click(function(){
  	if($(".bi-heart-fill").css("display") == "none"){
  		$(".bi-heart-fill").css("display", "inline-block");
  		$(".bi-heart").css("display", "none");
  	}
  })
  $('.bi-heart-fill').click(function(){
  	if($(".bi-heart-fill").css("display") == "inline-block"){
  		$(".bi-heart-fill").css("display", "none");
  		$(".bi-heart").css("display", "inline-block");
  	}
  })
})
var counterVal = 0;
function incrementClick() {
    updateDisplay(++counterVal);
}
function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}
function updateDisplay(val) {
    document.querySelector(".counter-label").innerHTML = val;
}


var close = document.querySelector('.bi-x-lg')
var seachBtn = document.querySelector('.bi-search')
var searchsection = document.querySelector('.searchsection')
close.style.display="none";
seachBtn.addEventListener('click', function(e){
   e.preventDefault();
      searchsection.classList.toggle("slideDown");
      if (seachBtn.style.display == "none") {
         close.style.display = "none";
         seachBtn.style.display = "block";
      }
      if (close.style.display == "none") {
         seachBtn.style.display = "none";
         close.style.display = "block";
      }
})
