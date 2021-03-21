'use strict'
{

  // const footerBtn = document.getElementById("footer_btn");
  // const headerBtn = document.getElementById("header_btn");
  // const containerModal = document.getElementById("containre-modal");
  // const back = document.getElementById("back");

  // headerBtn.addEventListener( "click", () => {
  //   containerModal.classList.add("js-display-block");
  // });
  // footerBtn.addEventListener( "click", () => {
  //   containerModal.classList.add("js-display-block");
  // });

  // back.addEventListener( "click", () => {
  //   containerModal.classList.remove("js-display-block");
  // });


  // const modalBtn = document.getElementById("modal_btn");

  // const containerAwesome = document.getElementById("container_awesome");


  // modalBtn.addEventListener( "click", () => {
  //   containerAwesome.classList.add("js-display-block");
  //   // containreModal.classList.remove("js-display-block");
  // });


  // var modalBtn = document.querySelector(".modal-btn");
  // var modalBg = document.querySelector(".modal-bg");
  // var modalClose = document.querySelector(".modal-close");

  // modalBtn.addEventListener("click" , function() {
  //   modalBg.classList.add("bg-active");
  // });

  // modalClose.addEventListener("click",function() {
  //   modalBg.classList.remove("bg-active");

  // });












// モーダルカレンダー
  var $window = $(window);
var $year = $('#js-year');
var $month = $('#js-month');
var $tbody = $('#js-calendar-body');

var today = new Date();
var currentYear = today.getFullYear(),
    currentMonth = today.getMonth();

$window.on('load',function(){
  calendarHeading(currentYear, currentMonth);
  calendarBody(currentYear, currentMonth, today);
});

function calendarBody(year, month, today){
  var todayYMFlag = today.getFullYear() === year && today.getMonth() === month ? true : false; // 本日の年と月が表示されるカレンダーと同じか判定
  var startDate = new Date(year, month, 1); // その月の最初の日の情報
  var endDate  = new Date(year, month + 1 , 0); // その月の最後の日の情報
  var startDay = startDate.getDay();// その月の最初の日の曜日を取得
  var endDay = endDate.getDate();// その月の最後の日の曜日を取得
  var textSkip = true; // 日にちを埋める用のフラグ
  var textDate = 1; // 日付(これがカウントアップされます)
  var tableBody =''; // テーブルのHTMLを格納する変数

  for (var row = 0; row < 6; row++){
    var tr = '<tr>';

    for (var col = 0; col < 7; col++) {
      if (row === 0 && startDay === col){
        textSkip = false;
      }
      if (textDate > endDay) {
        textSkip = true;
      }
      var addClass = todayYMFlag && textDate === today.getDate() ? 'is-today' : '';
      var textTd = textSkip ? ' ' : textDate++;
      var td = '<td class="'+addClass+'">'+textTd+'</td>';
      tr += td;
    }
    tr += '</tr>';
    tableBody += tr;
  }
  $tbody.html(tableBody);
}

function calendarHeading(year, month){
  $year.text(year);
  $month.text(month + 1);
}





// modal loading

var bg = document.getElementById('loader-bg'),
loader = document.getElementById('loader');
let modalBtn = document.getElementById("modal_btn");
/* ロード画面の非表示を解除 */
modalBtn.addEventListener("click" , () => {
  bg.classList.remove('is-hide');
  loader.classList.remove('is-hide');
})

/* 読み込み完了 */
window.addEventListener('load', stopload);

/* 10秒経ったら強制的にロード画面を非表示にする */
setTimeout('stopload()',10000);

/* ロード画面を非表示にする処理 */
function stopload(){
  bg.classList.add('fadeout-bg');
  loader.classList.add('fadeout-loader');
}





// カレンダー
$(function() {
  //datepicker処理
  $('.datepicker').datepicker({
    buttonImage: "./common/img/calendar.png",  // カレンダーアイコン画像
    buttonText: "カレンダーから選択",  // アイコンホバー時の表示文言
    buttonImageOnly: true, // ボタンとして表示
    showOn: "both",  // アイコン、テキストボックスどちらをクリックでもカレンダー表示
    showButtonPanel: true, //閉じるボタンと今日ボタンを表示
    beforeShow: function (textbox, instance) {
      $('.appendDatepicker').append($('#ui-datepicker-div'));
    }
  });
  //カレンダーボタンをクリックしたらモーダルウィンドウを表示
  $('#dpTextbox, .ui-datepicker-trigger').on('click', function(){
    $('.appendDatepicker').addClass('open');
  });
});










}
