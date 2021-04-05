(function () {
  const modalArea = document.getElementById('modalArea');
  const openModal = document.getElementById('button');
  const closeModal = document.getElementById('closeModal');
  const modalBg = document.getElementById('modalBg');
  const toggle = [openModal,closeModal,modalBg];
  
  for(let i=0, len=toggle.length ; i<len ; i++){
    toggle[i].addEventListener('click',function(){
      modalArea.classList.toggle('is-show');
    },false);
  }
}());
function check(selection){
  var selection = document.getElementById(selection);
  selection.style.backgroundColor = '#e7f5ff';
}


flatpickr('.flatpickr');

google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Javascript', 11],
                ['Eat', 2],
                ['Commute', 2],

            ]);

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
        }
var options = { // タイトル
      'pieHole': 0.4,  // 円グラフをドーナツ型に指定'
      // '.position':bottom
      'legend.position':bottom,
      colors: ['#0740F5', '#0572C3', '#0AD2FF']  //色設定
      
};


google.charts.load("current", { packages: ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                [
                    {
                        "day": 1,
                        "time": 3
                    },
                    {
                        "day": 2,
                        "time": 4
                    },
                    {
                        "day": 3,
                        "time": 5
                    },
                    {
                        "day": 4,
                        "time": 3
                    },
                    {
                        "day": 5,
                        "time": 0
                    },
                    {
                        "day": 6,
                        "time": 0
                    },
                    {
                        "day": 7,
                        "time": 4
                    },
                    {
                        "day": 8,
                        "time": 2
                    },
                    {
                        "day": 9,
                        "time": 2
                    },
                    {
                        "day": 10,
                        "time": 8
                    },
                    {
                        "day": 11,
                        "time": 8
                    },
                    {
                        "day": 12,
                        "time": 2
                    },
                    {
                        "day": 13,
                        "time": 2
                    },
                    {
                        "day": 14,
                        "time": 1
                    },
                    {
                        "day": 15,
                        "time": 7
                    },
                    {
                        "day": 16,
                        "time": 4
                    },
                    {
                        "day": 17,
                        "time": 4
                    },
                    {
                        "day": 18,
                        "time": 3
                    },
                    {
                        "day": 19,
                        "time": 3
                    },
                    {
                        "day": 20,
                        "time": 3
                    },
                    {
                        "day": 21,
                        "time": 2
                    },
                    {
                        "day": 22,
                        "time": 2
                    },
                    {
                        "day": 23,
                        "time": 6
                    },
                    {
                        "day": 24,
                        "time": 2
                    },
                    {
                        "day": 25,
                        "time": 2
                    },
                    {
                        "day": 26,
                        "time": 1
                    },
                    {
                        "day": 27,
                        "time": 1
                    },
                    {
                        "day": 28,
                        "time": 1
                    },
                    {
                        "day": 29,
                        "time": 7
                    },
                    {
                        "day": 30,
                        "time": 8
                    }
                ]
            ]);

            var view = new google.visualization.DataView(data);
            view.setColumns([0, 1,
                {
                    calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation"
                },
                2]);

            var options = {
                title: "Density of Precious Metals, in g/cm^3",
                width: 600,
                height: 400,
                bar: { groupWidth: "95%" },
                legend: { position: "none" },
            };
            var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
            chart.draw(view, options);
        }



