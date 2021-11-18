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
