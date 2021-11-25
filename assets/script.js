// 스크롤탑
$("#top").click(function() {
$("html, body").animate({ scrollTop: 0 }, "slow");
return false;
});
// 구매하기 & 챗봇 버튼
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("btnWrap-goodsDetail").style.bottom = "0";
        document.getElementById("btnsBg").style.bottom = "-20px";
        document.getElementById('btnsBg').classList.add('btnsBgView');
    } else {
        document.getElementById("btnWrap-goodsDetail").style.bottom = "70px";
        document.getElementById("btnsBg").style.bottom = "60px";
        document.getElementById('btnsBg').classList.add('btnsBgView');
    }
    prevScrollpos = currentScrollPos;
}
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

// 카운트 어렵..
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

// 상품 탭
$(function(){
  $('.ring').eq(0).children('a').css({
    'border': '2px solid #ffb3b3',
    'background': '#ffebe8'
  });
  $('.ring').click(function(){
    var fz = $(this).children('a').css('fontSize');
    if(fz === '16px') {
      $(this).children('a').css('fontSize', '15px');
     $(this).children('a').css({
       'border': '2px solid #ffb3b3',
       'background': '#ffebe8'
     });
    } else {
        $(this).children('a').css('fontSize', '16px');
        $(this).children('a').css({
          'border': 'none',
          'background': '#fff'
        });
    }
  })
})
