document.getElementById('popupBg').style.display='none';
document.getElementById('popup').style.display='none';
document.getElementById('openPop').addEventListener('click', function(){
   document.getElementById('popup').style.display='block';
   document.getElementById('popupBg').style.display='block';
})
document.getElementById('closePop').addEventListener('click', function(){
   document.getElementById('popup').style.display='none';
   document.getElementById('popupBg').style.display='none';
})
