// document.getElementById('popup').style.display='none';
// document.getElementById('popupBg').style.display='none';
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

// 찜하기
$(function(){
  $('.bi-heart-fill').css("display", "none");
  $('.bi-heart').click(function(){
  	if($(".bi-heart-fill").css("display") == "none"){
  		$(".bi-heart-fill").css("display", "block");
      // $('.bi-heart').hide();
  	}else{
  		$(".bi-heart").css("display", "none");
      // $('.bi-heart').show();
  	}
  })



})
