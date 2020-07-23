window.onload = function (){
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