
var popup = document.getElementById('popup')
var popupBg = document.getElementById('popupBg')
var openPop = document.getElementById('openPop')
var closePop = document.getElementById('closePop')
var popCancel = document.getElementById('popCancel')
popup.style.display='none';
popupBg.style.display='none';
openPop.addEventListener('click', function(){
   if(document.getElementById('popup').style.display==='none') {
      document.getElementById('popup').style.display='block';
      document.getElementById('popupBg').style.display='block';
   }
})
closePop.addEventListener('click', function(){
   document.getElementById('popup').style.display='none';
   document.getElementById('popupBg').style.display='none';
})
popCancel.addEventListener('click', function(){
   document.getElementById('popup').style.display='none';
   document.getElementById('popupBg').style.display='none';
})
