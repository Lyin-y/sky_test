$(document).ready(function () {
  console.log("123");
  var line = document.getElementById("line");
  // 初始化加载对象LineData
  var LineData = echarts.init(line);
  //未获取数据前，显示loading加载动画
  LineData.showLoading();
  var Round = document.getElementById("round");
  var RoundData = echarts.init(Round);
  RoundData.showLoading();
  var BarChart = document.getElementById("barChart");
  var BarChartData = echarts.init(BarChart);
  BarChartData.showLoading();



// 曲线
  $.get("https://edu.telking.com/api/?type=month", function (res) {
    console.log(res.data.series);
    //获取数据后，隐藏loading动画
    LineData.hideLoading();
    LineData.setOption(
      (option = {
        title: {},
        tooltip: {
          trigger: "axis",
        },
        legend: {},
        // xAxis代表x轴的数据
        xAxis: {
          type: "category",
          axisTick: {
            show: false, //不显示坐标轴刻度线
          },
          axisLine: {
            show: false, //不显示坐标轴线
          },
          data: res.data.xAxis,
          // 字段对应从json里面的字段
        },
        // yAxis代表y轴的数据,不写会自动适应数据
        yAxis: {
          type: "value",
          axisTick: {
            show: false, //不显示坐标轴刻度线
          },
          axisLine: {
            show: false, //不显示坐标轴线
          },
        },
        // series代表鼠标悬浮到图标上时提示的对应信息
        series: [
          {
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "#4183F2",
                lineStyle: {
                  color: "#4183F2",
                },
                label: {
                  show: true,
                  color: "#4183F2",
                },
              },
            },
            data: res.data.series,
            // 字段对应从json里面的字段
          },
        ],
      })
    );
  });
// 饼状
  $.get("https://edu.telking.com/api/?type=week", function (res) {
    console.log(res.data);
    var serviceData = []
    for(var i =0;i<res.data.xAxis.length;i++){
        var obj = new Object();
        obj.name = res.data.xAxis[i];
        obj.value = res.data.series[i];
        serviceData[i]=obj;
    }

    //获取数据后，隐藏loading动画
    RoundData.hideLoading();
    RoundData.setOption(
      (option = {
        //   xAxis:[{
        //       data:res.data.xAxis
        //   }],
        // series代表鼠标悬浮到图标上时提示的对应信息
        series: [
          {
            type: "pie",
            radius:'55%',
            center:['50%','50%'],
            data: serviceData,
            // 字段对应从json里面的字段
          },
        ],
      })
    );
  });
// 柱状
  $.get("https://edu.telking.com/api/?type=week", function (res) {
    console.log(res.data);
    //获取数据后，隐藏loading动画
    BarChartData.hideLoading();
    BarChartData.setOption(
      (option = {
        title: {},
        tooltip: {
          trigger: "axis",
        },
        legend: {
            data:[]
        },
        // xAxis代表x轴的数据
        xAxis: {
          axisTick: {
            show: false, //不显示坐标轴刻度线
          },
          axisLine: {
            show: false, //不显示坐标轴线
          },
          data: res.data.xAxis,
          // 字段对应从json里面的字段
        },
        // yAxis代表y轴的数据,不写会自动适应数据
        yAxis: {
          type: "value",
          axisTick: {
            show: false, //不显示坐标轴刻度线
          },
          axisLine: {
            show: false, //不显示坐标轴线
          },
        },
        // series代表鼠标悬浮到图标上时提示的对应信息
        series: [
          {
            type: "bar",
            barWidth:20,
            itemStyle:{
                normal:{
                    color:'#4183F2',
                }
            },
            data: res.data.series,
            // 字段对应从json里面的字段
          },
        ],
      })
    );
  });
  
});
