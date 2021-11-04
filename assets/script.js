var openPop = document.getElementById('openPop');
var popup = document.getElementById('popup');
var popupBg = document.getElementById('popupBg');
popup.style.display="none";
popupBg.style.display="none";
openPop.addEventListener('click', function(){
  popup.style.display="block";
  popupBg.style.display="block";
});
}
