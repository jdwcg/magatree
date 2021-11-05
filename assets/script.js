document.getElementById('popup').style.display='none';
document.getElementById('popupBg').style.display='none';
document.getElementById('openPop').addEventListener('click', function(){
   if(document.getElementById('popup').style.display==='none') {
      document.getElementById('popup').style.display='block';
      document.getElementById('popupBg').style.display='block';
   }
})
document.getElementById('closePop').addEventListener('click', function(){
   document.getElementById('popup').style.display='none';
   document.getElementById('popupBg').style.display='none';
})
document.getElementById('popCancel').addEventListener('click', function(){
   document.getElementById('popup').style.display='none';
   document.getElementById('popupBg').style.display='none';
})

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
