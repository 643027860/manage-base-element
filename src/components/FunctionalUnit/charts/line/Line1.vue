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
          name: '实例',
          data: [52051, 55000, 77000, 50000, 87000, 50000, 82000]
        },
        {
          name: '模型',
          data: [8001, 11000, 13000, 15000, 17000, 20000, 22000]
        },
        {
          name: '实例分析',
          data: [80000, 100000, 110000, 130000, 150000, 170000, 200000]
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
            // 线条是否柔滑
            // smooth: true,
            data: item.data
          })
          xName.push(item.name)
        })
      }
      if (length > 50) {
        // 初始化显示多少条数据
        var startLength = 100 - (50 / length * 100)
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
          trigger: 'item'
        },
        legend: {
          data: xName
        },
        grid: {
          left: '2%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        toolbox: {
          show: true,
          feature: {
            // 动态类型切换,包括'line'（切换为折线图）, 'bar'（切换为柱状图）, 'stack'（切换为堆叠模式）, 'tiled'（切换为平铺模式）。
            magicType: {
              type: document.body.clientWidth > 768 ? ['bar', 'line', 'stack', 'tiled'] : []
            },
            // 保存图片
            saveAsImage: {
              show: true
            }
          },
          iconStyle: {
            normal: {
              color: '#FFF'
            }
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
          data: [52051, 55000, 77000, 50000, 87000, 50000, 82000]
        },
        {
          name: '模型',
          data: [8001, 11000, 13000, 15000, 17000, 20000, 22000]
        },
        {
          name: '实例分析',
          data: [80000, 100000, 110000, 130000, 150000, 170000, 200000]
        }
      ]
      this.planToDrawPie(newval)
    }
  }
}
</script>

<style lang="less">

</style>
