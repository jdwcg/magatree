$(function(){
  $('.popup, .popupBg').hide();
  $('#popupBtn, #saveBtn').click(function(e){
    e.preventDefault();
    $('.popup, .popupBg').show();
  })
  $('#cancelBtn, .bi-x-lg, .popupBg').click(function(e){
    e.preventDefault();
    $('.popup, .popupBg').hide();
  })
})

document.getElementById('pushOff').style.display="block";
document.getElementById('pushOn').style.display="none";
document.getElementById('pushOff').addEventListener('click', function(){
  document.getElementById('pushOff').style.display="none";
  document.getElementById('pushOn').style.display="block";
})
document.getElementById('pushOn').addEventListener('click', function(){
  document.getElementById('pushOn').style.display="none";
  document.getElementById('pushOff').style.display="block";
})
