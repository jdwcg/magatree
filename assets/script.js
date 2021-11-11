// 찜하기
$(function(){
  $('.bi-heart-fill').css("display", "none");

  $('.mark').click(function(){
    if($(".bi-heart-fill").css("display") == "none"){
      $(this).children('.bi-heart').hide();
      $(this).children('.bi-heart-fill').show();
    }else{
      $(this).children('.bi-heart').show();
      $(this).children('.bi-heart-fill').hide();
    }
  })

})

// 카운트
// var counterVal = 0;
// function incrementClick() {
//     updateDisplay(++counterVal);
// }
// function resetCounter() {
//     counterVal = 0;
//     updateDisplay(counterVal);
// }
// function updateDisplay(val) {
//     document.querySelector(".counter-label").innerHTML = val;
// }

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
