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
          if (yData.length === 0) {
            yData.push({
              name: item.name,
              type: 'line',
              data: item.data
            })
          } else {
            yData.push({
              name: item.name,
              type: 'bar',
              data: item.data
            })
          }
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
          right: '2%',
          bottom: '5%',
          containLabel: true
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        // ---  提示框 ----
        tooltip: {
          // 数据项图形触发
          trigger: 'axis'
        },
        // dataZoom: dataZoom,
        //  ------  X轴 ------
        xAxis: [
          {
            // 轴类型， 默认为 'category'
            type: 'category',
            boundaryGap: true,
            data: xData
          },
          {
            // 轴类型， 默认为 'category'
            type: 'category',
            boundaryGap: true,
            data: xData
          }
        ],
        //   ------   y轴  ----------
        yAxis: [
          {
            // 轴类型，默认为 ‘category’
            type: 'value',
            scale: true,
            // y轴名称
            name: '价格',
            max: 200000,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            // 轴类型，默认为 ‘category’
            type: 'value',
            scale: true,
            // 轴名称
            name: '数量',
            max: 20000,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }
        ],
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
