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
          name: '实例',
          data: [8000, 12000, 20000, 37000, 45000, 5200, 19999, 5000, 120000, 10050]
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
            stack: '总数',
            smooth: true,
            data: item.data,
            markLine: {
              silent: true,
              data: [{
                yAxis: 10000
              }, {
                yAxis: 20000
              }, {
                yAxis: 35000
              }, {
                yAxis: 50000
              }, {
                yAxis: 100000
              }]
            }
          })
          xName.push(item.name)
        })
      }
      if (length > 6) {
        // 初始化显示多少条数据
        var startLength = 100 - (6 / length * 100)
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
        grid: {
          left: '2%',
          right: '10%',
          bottom: '5%',
          containLabel: true
        },
        toolbox: {
          show: true,
          left: 'center',
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
          name: '日期',
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
          name: '数量',
          // 纵轴名字/大小/宽度
          nameTextStyle: {
            fontWeight: 500,
            fontSize: document.body.clientWidth > 768 ? 16 : 14
          }
        },
        // 数据分阶段显示不同颜色
        visualMap: {
          top: 10,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 10000,
              color: '#096'
            },
            {
              gt: 10000,
              lte: 20000,
              color: '#ffde33'
            },
            {
              gt: 20000,
              lte: 35000,
              color: '#ff9933'
            },
            {
              gt: 35000,
              lte: 50000,
              color: '#cc0033'
            },
            {
              gt: 50000,
              lte: 100000,
              color: '#660099'
            },
            {
              gt: 100000,
              color: '#7e0023'
            }
          ],
          outOfRange: {
            color: '#999'
          }
        },
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
          name: '实例',
          data: [8000, 12000, 20000, 37000, 45000, 5200, 19999, 5000, 120000, 10050]
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
