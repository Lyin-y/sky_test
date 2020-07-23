window.onload = function(){
  console.log("123");
  var banner = document.querySelector(".banner");
  var wrap = document.querySelector(".wrap");
  var dot = document.querySelector(".dot")
  var pre = document.querySelector(".pre");
  var next = document.querySelector(".next");
  var imgs = document.getElementsByTagName("img");
  var iw = imgs.offsetWidth; //运动距离
  var index = 0; //当前视图的下标

  //   计时器
  var timer = null;
  function autoPlay() {
    timer = setInterval(function () {
      var newLeft;
      if (wrap.style.left === "-960px") {
        newLeft = 0;
      } else {
        newLeft = parseInt(wrap.style.left) - 480;
      }
      wrap.style.left = newLeft + "px";
    }, 2000);
  }
  autoPlay();

  // 当鼠标移动到banner盒子上，清楚计时器，不再轮播
  banner.onmouseenter = function () {
    clearInterval(timer);
  };
  banner.onmouseleave = function () {
    autoPlay();
  };

  // 点击左右按钮
  pre.onclick = function pre() {
    var newLeft;
    if (wrap.style.left === "0px") {
      newLeft = -960;
    } else {
      newLeft = parseInt(wrap.style.left) + 480;
    }
    wrap.style.left = newLeft + "px";

  };
  next.onclick = function () {
    console.log("12")
    var newLeft;
    if (wrap.style.left === "-960px") {
      newLeft = 0;
    } else {
      newLeft = parseInt(wrap.style.left) - 480;
    }
    wrap.style.left = newLeft + "px";
  };


  // 曲线
var line = echarts.init(document.getElementById('line'));
line.setOption({
    title: {},
    tooltip: {
        trigger:'axis'
    },
    xAxis: [{
        type:'category',
        axisTick:{
            show:false  //不显示坐标轴刻度线
        },
        axisLine: {
          show: false,//不显示坐标轴线
        },
        data:[
             '01/26','01/28',
            '01/30','02/01',
            '02/03','02/05',
            '02/07','02/09',
            '02/11','02/13',
            '02/15','02/17',
            '02/17','02/19',
            '02/21','02/23'
            ]
    }],
    yAxis: {
        type:'value',
        axisTick:{
            show:false  //不显示坐标轴刻度线
        },
        axisLine: {
          show: false,//不显示坐标轴线
        },
    },
    series:[{
        type:'line',
        smooth: true,
        itemStyle:{
            normal:{
                color:'#4183F2',
                lineStyle:{
                    color:'#4183F2',
                },
                label:{
                       show:true,
                       color:'#4183F2'
                  }
            }
        },
        data:[
            ['01/26',8972],['01/28',6448],
            ['01/30',7456],['02/01',5824],
            ['02/03',8123],['02/05',300],
            ['02/07',8123],['02/09',300],
            ['02/11',5318],['02/13',7463],
            ['02/15',1435],['02/17',9426],
            ['02/17',8187],['02/19',8297],
            ['02/21',443],['02/23',9135],
            ]
    }]
});

// 饼状
var Round = echarts.init(document.getElementById('round'));
Round.setOption ({
    series:[{
        type:'pie',
        radius:'55%',
        center:['50%','50%'],
        data:[
        {name:'MON',value:9},
        {name:'TUE',value:11},
        {name:'WED',value:13},
        {name:'THU',value:10},
        {name:'FRI',value:8},
        {name:'SAT',value:10},
        {name:'SUN',value:5}
    ]
    }]
});

  // 柱状
  var BarChart = echarts.init(document.getElementById('barChart'));
  BarChart.setOption({
  title:{
  },
  tooltip:{},
  legend:{
      data:[]
  },
  xAxis:{
      axisTick:{
          show:false  //不显示坐标轴刻度线
      },
      axisLine: {
        show: false,//不显示坐标轴线
      },
      data:["MON","TUE","WED","THU","FRI","SAT","SUN"]
  },
  yAxis:{
      axisTick:{
          show:false  //不显示坐标轴刻度线
      },
      axisLine: {
        show: false,//不显示坐标轴线
      },
  },
  series:[{
      type:'bar',
      barWidth:20,
      itemStyle:{
          normal:{
              color:'#4183F2',
          }
      },
      data:[9,11,13,10,8,10,5]
  }]
});
}