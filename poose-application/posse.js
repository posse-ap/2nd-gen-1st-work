'use strict'
var popup = document.getElementById('popup');
var blackBg = document.getElementById('js-black-bg');
var closeBtn = document.getElementById('js-close-btn');
var showBtn = document.getElementById('r_p_btn');


function popupImage() {
  if(!popup) return;


  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popupImage();

var inner=document.getElementById("popup_inner")

function r_p_done(){
  inner.innerHTML='<div class="close-btn" id="js-close-btn"><span class="fa-stack ">'+'<i class="fas fas-stack-2x fa-circle fa-4x" style="color:#F5F4F8"></i><i class="fas fa-stack-1x fa-times"></i></span></div>'+
  '<div class="done_inner">'+
      '<p class="awesome">AWESOME!</p>'+
      '<i class="fas fa-check-circle fa-5x checkmark_large" style="color:#BEE361"></i>'+
      
      '<p class="r_p_txt">記録・投稿'+
      '<br>完了しました</p>'+
  '</div>';
  
  var closeBtn = document.getElementById('js-close-btn');
  closePopUp(closeBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
      inner.innerHTML='<div class="popup_form">'+
      '<div class="close-btn" id="js-close-btn"><i class="fas fa-times"></i></div>'+
      '<div class="popup_left">'+
          '<h5>学習日</h5>'+
          '<input type="text" value="2020年10月27日">'+
          '<h5>学習コンテンツ（複数選択可）</h5>'+
          '<span><input type="checkbox"><span>N予備校</span></span>'+
          '<span><input type="checkbox"><span>ドットインストール</span></span>'+
          '<div><input type="checkbox"><span>POSSE課題</span></div>'+
          '<h5>学習言語（複数選択可）</h5>'+
          '<div class="kinds_lang_box_wrapper">'+
              '<div><input type="checkbox" name="" id=""><span></span>HTML</div>'+
              '<div><input type="checkbox" name="" id=""><span></span>CSS</div>'+
              '<div><input type="checkbox" name="" id=""><span></span>JavaScript</div>'+
              '<div><input type="checkbox" name="" id=""><span></span>PHP</div>'+
              '<div><input type="checkbox" name="" id=""><span></span>Laravel</div>'+
              '<div><input type="checkbox" name="" id=""><span></span>SQL</div>'+
              '<div><input type="checkbox" name="" id=""><span></span>SHELL</div>'+
              '<div><input type="checkbox" name="" id=""><span></span>情報システム基礎知識（その他）</div>'+
          '</div>'+
       '</div>'+
      '<div class="popup_right" >'+
          '<h5>学習時間</h5>'+
          '<input type="text">'+
          '<h5>Twitter用コメント</h5>'+
          '<input type="text" name="" id="">'+
          '<div><input type="checkbox" name="" id=""><span>Twitterに自動投稿する</span></div>'+
      '</div>'+
  '</div>'+
      '<i class="shadow-lg p-3 btn_submit_modal" id="r_p_done_btn">'+
          '記録・投稿'+
      '</i>'+
  '</div>';
    });
  }
}

var r_p_done_btn=document.getElementById('r_p_done_btn');
r_p_done_btn.onclick=function (){r_p_done()};