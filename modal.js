(function() {
  'use strict';

  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var modal = document.getElementById('modal');
  var mask = document.getElementById('mask');
  // var loading = document.getElementById('loading');

  open.addEventListener('click', function() {
    modal.className = '';
    mask.className = '';
  });

  close.addEventListener('click', function() {
    modal.className = 'hidden';
    mask.className = 'hidden';
    // loading.className = 'hidden';
  });

  mask.addEventListener('click', function() {
    // modal.className = 'hidden';
    // mask.className = 'hidden';
    // loading.className = 'hidden';
    close.click();
  });
})();

// カレンダー表示
$(function () {
  $('.gakushubi').on('click', () => {
      $('#calendar').toggle(); //toggle←要素を表示なら非表示に、非表示なら表示に切り替える
  });
});

//ローディング画面
$(function () {
  $('.buttonposition').on('click', () => {
      $('#loading').show(); 
      $('#modal').hide(); 
  });
});

$(function () {
  $('#mask').on('click', () => {
      $('#loading').hide();
  });
});