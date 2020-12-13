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
require('echarts/lib/component/title')
require('echarts/lib/component/toolbox')
require('echarts/lib/component/dataZoom')
require('echarts/lib/component/visualMap')
require('echarts/lib/component/markArea')
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
          name: '用电量',
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400]
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
          yData.push({
            name: item.name,
            type: 'line',
            stack: '用电量',
            smooth: true,
            data: item.data,
            // 选择拥有背景色的x区间
            markArea: {
              // 每一个时间段用一个数组包住起止时间
              data: [
                [
                  {
                    name: '早高峰',
                    xAxis: xData[Math.floor(length / 8)]
                  },
                  {
                    xAxis: xData[Math.floor(length / 6)]
                  }
                ],
                [
                  {
                    name: '晚高峰',
                    xAxis: xData[Math.floor(length / 5 * 4)]
                  },
                  {
                    xAxis: xData[length - 1]
                  }
                ]
              ]
            }
          })
          xName.push(item.name)
        })
      }
      if (length > 30) {
        // 初始化显示多少条数据
        var startLength = 100 - (30 / length * 100)
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
          text: ''
        },
        // 图样色
        color: ['#2db7f5', '#ff6600', '#808bc6'],
        tooltip: {
          // axis   item   none三个值
          trigger: 'axis'
        },
        legend: {
          data: xName
        },
        grid: {
          left: '2%',
          right: '10%',
          bottom: '5%',
          containLabel: true
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: dataZoom,
        xAxis: {
          type: 'category',
          name: '时间',
          data: xData,
          // 坐标轴名字旋转
          nameRotate: 90,
          // 横轴名字/大小/宽度
          nameTextStyle: {
            fontWeight: 500,
            fontSize: document.body.clientWidth > 768 ? 16 : 14
          }
        },
        // Y轴坐标样式
        yAxis: {
          type: 'value',
          // 纵坐标显示样式：值+W
          axisLabel: {
            formatter: '{value} W'
          },
          name: '用电量',
          // 纵轴名字/大小/宽度
          nameTextStyle: {
            fontWeight: 500,
            fontSize: document.body.clientWidth > 768 ? 16 : 14
          }
        },
        // 数据分阶段显示不同颜色
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              lte: 6,
              color: '#096'
            },
            {
              gt: 6,
              lte: 8,
              color: '#cc0033'
            },
            {
              gt: 8,
              lte: 14,
              color: '#096'
            },
            {
              gt: 14,
              lte: 17,
              color: '#cc0033'
            },
            {
              gt: 17,
              color: '#096'
            }
          ]
        },
        // 数据分阶段显示不同颜色
        series: yData
      })
    },
    // 获取规定格式的日期
    formatDate (time) {
      var date = this.formatAll.formatTime(new Date(time), 1)
      return date.month + '-' + date.date
    }
  },
  watch: {
    myData (newval, oldval) {
      newval = [
        {
          name: '用电量',
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400]
        }
      ]
    }
  }
}
</script>

<style lang="less">
  .myChart{

  }
</style>
