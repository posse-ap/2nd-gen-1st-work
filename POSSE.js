// PCのポップアップ
function popupImage() {
  var popup = document.getElementById('js-popup');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg');
  var closeBtn = document.getElementById('js-close-btn');
  var showBtn = document.getElementById('post');
  var showBtnSP = document.getElementById('postSP');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
  
  
  // スマホ版対応
  closePopupSP(showBtnSP);
  function closePopupSP(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popupImage();




function newPopupImage() {
  var newPopup = document.getElementById('new-js-popup');
  if(!newPopup) return;
  
  var blackBg = document.getElementById('new-js-black-bg');
  var closeBtn = document.getElementById('new-js-close-btn');
  var showBtn = document.getElementById('modal-post');
  
  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      newPopup.classList.toggle('is-show');
    });
  }
  // popup.style.display ="none";
  // popup.classList.add('popupNone');
}
newPopupImage();