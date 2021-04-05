// twitter

function Check() {

  var comment = document.getElementById("comment");
  var inputValue = comment.value;
  console.log(inputValue);
  console.log(comment.value);
  
  document.addEventListener("DOMContentLoaded", function(){
    tInput.addEventListener('click',function(){
      if (this.checked) {
        goToTwitter.innerHTML = '<a href="http://twitter.com/share?url=https://harbors.anti-pattern.co.jp/&text=' + inputValue + '" target="_blank">記録・投稿</a>';
      } else {
        
      };
    });
  },false);
}





// ローディングと投稿完了
var timerId = null;

function gotoAwesome() {
  document.getElementById('modal').style.display="none";
  document.getElementById('modal-post').style.display="none";
  document.getElementById('loader').style.display="block";
  
  
  var goToTwitter = document.getElementById('goToTwitter');
  var tInput = document.getElementById('T-SCL-Input');
  
  function countUp() {
    document.getElementById('loader').style.display="none";
    document.getElementById('awesome-page').style.display="block";
  } 
  //5000ミリ秒後にcountUp関数を呼び出す
  timerId = setTimeout(countUp, 5000);
  
  
  
  
  
  
  
  
  
  //   const comment = document.getElementById("comment");
  // const inputValue = comment.value;
  // console.log(inputValue);
  
  // tInput.addEventListener('click',function(){
    //   if (this.checked) {
      //     goToTwitter.innerHTML = '<a href="http://twitter.com/share?url=https://harbors.anti-pattern.co.jp/&text=' + "aaa" + '" target="_blank">記録・投稿</a>';
      //   };
      // });
      
    }
    


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

      document.getElementById('awesome-page').style.display="none";
      document.getElementById('modal').style.display="flex";
      document.getElementById('modal-post').style.display="block";
      
      clearTimeout(timerId);
      document.getElementById('loader').style.display="none";

      
    });
  }

  
  // スマホ版対応
  closePopupSP(showBtnSP);
  function closePopupSP(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
      document.getElementById('awesome-page').style.display="none";
      document.getElementById('modal').style.display="block";
      document.getElementById('modal-post').style.display="block";

      clearTimeout(timerId);
    });
  }

}
popupImage();


// 学習コンテンツのチェックの時
function back(chkID) {
  
  var chkID = document.getElementById(chkID);
  if(chkID.checked == true){
    chkID.parentNode.style.backgroundColor = '#e7f5ff';
    }else{
      chkID.parentNode.style.backgroundColor = '#F5F5F8';
    }
    
};




// 棒グラフ
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(
  function() {
    var data = google.visualization.arrayToDataTable([
        [       '', 'time'],
        ['1',     3],
        ['2',     4],
        ['3',     5],
        ['4',     3],
        ['5',     0],
        ['6',     0],
        ['7',     4],
        ['8',     2],
        ['9',     2],
        ['10',     8],
        ['11',     8],
        ['12',     2],
        ['13',     2],
        ['14',     1],
        ['15',     7],
        ['16',     4],
        ['17',     4],
        ['18',     3],
        ['19',     3],
        ['20',     3],
        ['21',     2],
        ['22',     2],
        ['23',     6],
        ['24',     2],
        ['25',     2],
        ['26',     1],
        ['27',     1],
        ['28',     1],
        ['29',     7],
        ['30',     8],
        
      ]);
      
      var options = {
        lineWidth: 4, pointSize: 6,
        width: '100%',
        height: '100%',
        colors:['#3ccfff'],
        legend: { position: 'none'},

        hAxis:{
          minValue:0,
          gridlines:{color: 'none', count:10},
          baselineColor: 'none',
          textStyle:{color: 'deepskyblue'},
          maxTextLines:1,
          showTextEvery:2,
        },
        
        vAxis:{
          gridlines:{color: 'none', count:4},
          baselineColor: 'none',
          format: '#h',
          textStyle:{color: 'deepskyblue'},
        }
      }
      
      var chart = new google.visualization.ColumnChart(document.getElementById('gct_sample_column'));
      chart.draw(data,options);
    }
    );

    
// 学習言語の円グラフ
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(langDrawChart);

function langDrawChart() {

  var langData = google.visualization.arrayToDataTable([
    //グラフデータの指定
    ['Language', 'Hours'],
    ['JavaScript',  10],
    ['CSS',      20],
    ['PHP', 5],
    ['HTML',     30],
    ['Laravel',    5],
    ['SQL',    20],
    ['SHELL',    20],
    ['その他',    10]
  ]);

  var langOptions = {
    //オプションの指定
    legend: { position: 'none'},
    pieHole: 0.5,
    chartArea: {width: '90%', height: '90%'},
    colors:['#0345EC', '#0F71BD','#20BDDE','#3CCEFE','#B29EF3','#4A17EF','#3105C0','#190030'],
    
    hAxis:{
      textPosition: 'none',
    },
  };

  var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
  
  chart1.draw(langData, langOptions);
}

// 学習コンテンツのグラフ

google.setOnLoadCallback(contDrawChart);
function contDrawChart() {
  
  var contData = google.visualization.arrayToDataTable([
    //グラフデータの指定
    ['Contents', 'Hours'],
    ['ドットインストール',      20],
    ['N予備校',     40],
    ['課題',  40],
  ]);
  
  var contOptions = {
    //オプションの指定
    legend: { position: 'none'},
    pieHole: 0.5,
    chartArea: {width: '90%', height: '90%'},
    colors:['#0345EC', '#0F71BD','#20BDDE'],
    
    hAxis:{
      textPosition: 'none',
    },
  };
  
  var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
  
  //グラフを表示させる要素の指定
  chart2.draw(contData, contOptions);
}


// カレンダー
//「flatpickr」の読み込み
flatpickr('.flatpickr');


// 日付を表示
const calToday = new Date();

let calYear = calToday.getFullYear();
let calMonth = calToday.getMonth();
let calDate = calToday.getDate();

function dateText(year, month, date) {
  return `${year}-${month + 1}-${date}`;
}

document.getElementById('study-date').value = dateText(calYear, calMonth, calDate);






// Twitter

// Twitter本文取得
// const comment = document.getElementById("comment");
// const inputValue = comment.value;
// console.log(inputValue);

// var goToTwitter = document.getElementById('goToTwitter');
// var tInput = document.getElementById('T-SCL-Input');

// document.addEventListener("DOMContentLoaded", function(){
//   tInput.addEventListener('click',function(){
//     if (this.checked) {
//       goToTwitter.innerHTML = `<a href="http://twitter.com/share?url=https://harbors.anti-pattern.co.jp/&text=${inputValue}" target="_blank">記録・投稿</a>`;
//     };
//   });
// },false);





// カレンダーを表示
// function newPopupImage() {
//   var newPopup = document.getElementById('new-js-popup');
//   if(!newPopup) return;
  
//   var blackBg = document.getElementById('new-js-black-bg');
//   var closeBtn = document.getElementById('new-js-close-btn');
//   var showBtn = document.getElementById('study-date');
  
//   closePopUp(blackBg);
//   closePopUp(closeBtn);
//   closePopUp(showBtn);
//   function closePopUp(elem) {
//     if(!elem) return;
//     elem.addEventListener('click', function() {
//       newPopup.classList.toggle('is-show');
//       document.getElementById('modal').style.display="none";
//       document.getElementById('modal').classList.toggle('popupNone');

//       document.getElementById('awesome-page').classList.toggle('popupDisplay');
//     });
//   }
//   popup.style.display ="none";
//   popup.classList.add('popupNone');
// }
// newPopupImage();