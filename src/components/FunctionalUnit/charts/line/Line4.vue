<template>
  <div class="myLine">
    <div class="line" :style="{'height':Height+'px'}" :id="MyLineId"></div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
require('echarts/lib/component/title')
require('echarts/lib/component/toolbox')
require('echarts/lib/component/dataZoom')
export default {
  data () {
    return {
      // 折现图对象
      Line: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      var newval = [
        {
          name: '流量',
          data: [0.97, 0.96, 0.96, 0.95, 0.95, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94]
        },
        {
          name: '模型',
          data: [0, 0, 0, 0, 0.005, 0.017, 0.017, 0.017, 0.017, 0.017, 0.011, 0, 0, 0, 0, 0, 0, 0.038, 0.084, 0.045, 0.045, 0.037, 0.034, 0.035]
        }
      ]
      this.planToDrawPie(newval)
    })
  },
  props: {
    myData: {
      type: Array,
      required: true
    },
    MyLineId: {
      type: String,
      required: true
    },
    Height: {
      type: Number,
      required: true
    }
  },
  methods: {
    // 准备绘制图表
    planToDrawPie (newval) {
      var yData = []
      var xData = []
      var xName = []
      var dataZoom = []
      // x轴长度
      var length = 0
      var date = new Date().getTime()
      if (newval.length > 0) {
        newval.map((item) => {
          if (length < item.data.length) {
            length = item.data.length
            xData = []
            item.data.map((item, index) => {
              xData.push(this.formatDate(date - 1000 * 60 * 60 * 24 * (length - index - 1)))
            })
          }
          // 这个折线图模型只能对比两组数据，所以采用这种判断方法
          if (yData.length < 1) {
            yData.push({
              name: item.name,
              type: 'line',
              symbolSize: 8,
              hoverAnimation: false,
              data: item.data
            })
          } else {
            yData.push({
              name: item.name,
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              symbolSize: 8,
              hoverAnimation: false,
              data: item.data
            })
          }
          xName.push(item.name)
        })
      }
      if (length > 10) {
        // 初始化显示多少条数据
        var startLength = 100 - (10 / length * 100)
        dataZoom = [
          {
            show: true,
            realtime: true,
            start: startLength,
            end: 100,
            filterMode: 'empty'
          },
          {
            type: 'inside',
            realtime: true,
            start: startLength,
            end: 100,
            filterMode: 'empty'
          }
        ]
      }
      this.drawLine(xData, yData, xName, dataZoom)
    },
    // 绘制图表
    drawLine (xData, yData, xName, dataZoom) {
      this.Line = echarts.init(document.getElementById(this.MyLineId))
      var _this = this
      window.addEventListener('resize', function () {
        _this.Line.resize()
      })
      this.Line.setOption({
        // 标题
        title: {
          text: '雨量流量关系图',
          subtext: '数据来自西安兰特水电测控技术有限公司',
          left: 'center'
        },
        // 图样色
        color: ['#2db7f5', '#ff6600', '#808bc6'],
        tooltip: {
          // axis   item   none三个值
          trigger: 'axis',
          axisPointer: {
            animation: false
          }
        },
        legend: {
          data: xName,
          left: 10
        },
        grid: [
          {
            left: 50,
            right: 50,
            height: '35%'
          },
          {
            left: 50,
            right: 50,
            top: '55%',
            height: '35%'
          }
        ],
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: dataZoom,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {onZero: true},
            data: xData
          },
          {
            gridIndex: 1,
            type: 'category',
            boundaryGap: false,
            axisLine: {onZero: true},
            data: xData,
            position: 'top'
          }
        ],
        // Y轴坐标样式
        yAxis: [
          {
            type: 'value',
            name: '流量(m^3/s)',
            // 纵轴名字/大小/宽度
            nameTextStyle: {
              fontWeight: 500,
              fontSize: document.body.clientWidth > 768 ? 16 : 14
            }
          },
          {
            type: 'value',
            name: '降雨量(mm)',
            gridIndex: 1,
            // 反向
            inverse: true,
            // 纵轴名字/大小/宽度
            nameTextStyle: {
              fontWeight: 500,
              fontSize: document.body.clientWidth > 768 ? 16 : 14
            }
          }
        ],
        series: yData
      })
    },
    // 获取规定格式的日期
    formatDate (time) {
      var date = this.formatAll.formatTime(new Date(time), 1)
      return date.month + '-' + date.day
    }
  },
  watch: {
    myData (newval, oldval) {
      newval = [
        {
          name: '实例',
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400]
        },
        {
          name: '模型',
          data: [550, 500, 400, 390, 380, 390, 700, 600, 400, 400, 500, 350, 280, 250, 260, 270, 300, 600, 750, 800]
        },
        {
          name: '实例分析',
          data: [260, 270, 300, 300, 280, 250, 550, 500, 600, 750, 400, 390, 380, 390, 600, 400, 400, 500, 800, 700]
        }
      ]
      this.planToDrawPie(newval)
    }
  }
}
</script>

<style lang="less">
  .myChart{

  }
</style>
