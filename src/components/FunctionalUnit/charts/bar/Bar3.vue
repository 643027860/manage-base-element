<template>
  <div class="MyBar">
    <div class="bar" :style="{'height':Height+'px'}" :id="MyBarId"></div>
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
      Bar: {}
    }
  },
  props: {
    myData: {
      type: Array,
      required: true
    },
    MyBarId: {
      type: String,
      required: true
    },
    Height: {
      type: Number,
      required: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      var newval = [
        {
          name: '2011年',
          data: [
            {
              name: '巴西',
              data: 18203
            },
            {
              name: '印尼',
              data: 23489
            },
            {
              name: '美国',
              data: 29034
            },
            {
              name: '印度',
              data: 104970
            },
            {
              name: '中国',
              data: 131744
            },
            {
              name: '世界人口(万)',
              data: 630230
            }
          ]
        },
        {
          name: '2012年',
          data: [
            {
              name: '巴西',
              data: 19325
            },
            {
              name: '印尼',
              data: 23438
            },
            {
              name: '美国',
              data: 31000
            },
            {
              name: '印度',
              data: 121594
            },
            {
              name: '中国',
              data: 134141
            },
            {
              name: '世界人口(万)',
              data: 681807
            }
          ]
        }
      ]
      this.planToDrawPie(newval)
    })
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
      if (newval.length > 0) {
        newval.map((item, index) => {
          var myData = []
          length = item.data.length
          if (xData.length < length) {
            xData = []
          }
          item.data.map((item1) => {
            myData.push(item1.data)
            if (xData.length < length) {
              xData.push(item1.name)
            }
          })
          yData.push({
            name: item.name,
            type: 'bar',
            data: myData
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
      this.drawBar(xData, yData, xName, dataZoom)
    },
    // 绘制图表
    drawBar (xData, yData, xName, dataZoom) {
      this.Bar = echarts.init(document.getElementById(this.MyBarId))
      var _this = this
      window.addEventListener('resize', function () {
        _this.Bar.resize()
      })
      this.Bar.setOption({
        // 颜色
        color: ['#91C7AE', '#C23531', '#2F4554', '#61A0A8', '#D48265', '#2DB7F5', '#FF6600'],
        // ----  标题 -----
        title: {
          text: '',
          subtext: ''
        },
        // ---- legend ----
        legend: {
          data: xName
        },
        grid: {
          left: '2%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        // ---  提示框 ----
        tooltip: {
          // 数据项图形触发
          trigger: 'axis',
          // 鼠标悬浮效果，这个是背景阴影
          axisPointer: {
            type: 'shadow'
          }
        },
        dataZoom: dataZoom,
        //  ------  X轴 ------
        xAxis: {
          // 轴类型， 默认为 'category'
          type: 'value',
          // 轴名称
          name: '数量',
          // 坐标轴名字旋转
          nameRotate: 90,
          boundaryGap: [0, 0.01]
        },
        //   ------   y轴  ----------
        yAxis: {
          // 轴类型，默认为 ‘category’
          type: 'category',
          // 轴名称
          name: '地方',
          data: xData
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
          name: '2011年',
          data: [
            {
              name: '巴西',
              data: 18203
            },
            {
              name: '印尼',
              data: 23489
            },
            {
              name: '美国',
              data: 29034
            },
            {
              name: '印度',
              data: 104970
            },
            {
              name: '中国',
              data: 131744
            },
            {
              name: '世界人口(万)',
              data: 630230
            }
          ]
        },
        {
          name: '2012年',
          data: [
            {
              name: '巴西',
              data: 19325
            },
            {
              name: '印尼',
              data: 23438
            },
            {
              name: '美国',
              data: 31000
            },
            {
              name: '印度',
              data: 121594
            },
            {
              name: '中国',
              data: 134141
            },
            {
              name: '世界人口(万)',
              data: 681807
            }
          ]
        }
      ]
      this.planToDrawPie(newval)
    }
  }
}
</script>

<style lang="less">

</style>
