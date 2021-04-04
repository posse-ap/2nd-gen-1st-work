'use strict';
//↓棒グラフ
var ctx = document.getElementById("bargraph").getContext("2d");
    var myBar = new Chart(ctx, {
        type: 'bar',                           //◆棒グラフ
        // lineWidth: 100,
        data: {                                //◆データ
            labels: ['2','4','6','8','10','12','14','16','18','20','22','24','26','28','30'],     //ラベル名
            datasets: [{                       //データ設定
                data: [2,3,4,4,1,5,6,5,4,4,3,2,3,7,4],          //データ内容
                backgroundColor: '#2aaae4'   //背景色
            },
            {
                data: [2,3,6,7,8,3,2,4,5,4,4,3,4,8,2],
                backgroundColor: '#2aaae4'
            },
          ],
        },
        options: {                             //◆オプション
            responsive: true,                  //グラフ自動設定
            legend: {                          //凡例設定
                display: false                 //表示設定
           },
            // title: {                           //タイトル設定
            //     display: true,                 //表示設定
            //     fontSize: 18,                  //フォントサイズ
            //     text: 'タイトル'                //ラベル
            // },
            scales: {                          //軸設定
                yAxes: [{                      //y軸設定
                    display: true,             //表示設定
                    scaleLabel: {              //軸ラベル設定
                       display: true,          //表示設定
                      //  labelString: '縦軸ラベル',  //ラベル
                      //  fontSize: 18               //フォントサイズ
                    },
                    ticks: {                      //最大値最小値設定
                        min: 0,                   //最小値
                        max: 8,                  //最大値
                        // fontSize: 18,             //フォントサイズ
                        stepSize: 2,               //軸間隔
                    },
                }],
                xAxes: [{                         //x軸設定
                  　
                    display: true,                //表示設定
                    scaleLabel: {
                      display: true,
                    },
                    barPercentage: 0.5,           //棒グラフ幅
                    categoryPercentage: 0.8,      //棒グラフ幅
                    // scaleLabel: {                 //軸ラベル設定
                    //    display: true,             //表示設定
                      //  labelString: '横軸ラベル',  //ラベル
                    //   //  fontSize: 18               //フォントサイズ
                    // },
                    ticks: {
                      min: 2,
                      max: 30,
                      stepSize: 2
                        // fontSize: 18             //フォントサイズ
                    },
                }],
            },
        },
      });

//↓円グラフ１
var ctx1 = document.getElementById("piechart1");
var piechart1= new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: { //データ項目のラベル
      display: false
    },
    datasets: [{
        backgroundColor: [
            "#1754ef",
            "#2171bd",
            "#4dbdde",
            "#54cef9",
            "#b29ef3",
            "#6d46ec",
            "#4f45ef",
            "#3636c1",
            "#1754ef",
            "#2171bd",
            "#4dbdde"
        ],
        data: [42,18,10,8,7,5,3,2] //グラフのデータ
    }]
  },
  options: {
    title: {
      display: false,
      //グラフタイトル
    }
  }
});

//↓円グラフ２
var ctx2 = document.getElementById("piechart2");
var piechart2= new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: { //データ項目のラベル 
      display: false 
    },
    datasets: [{
        backgroundColor: [
            "#1754ef",
            "#2171bd",
            "#4dbdde",
        ],
        data: [42,33,25] //グラフのデータ
    }]
  },
  options: {
    title: {
      display: false,
      //グラフタイトル
    }
  }
});