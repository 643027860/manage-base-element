<template>
  <div class="myPie">
    <div class="pie" :style="{'height':Height+'px'}" :id="MyPieId"></div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
require('echarts/lib/component/legendScroll')
require('echarts/lib/component/title')
require('echarts/lib/component/toolbox')
export default {
  data () {
    return {
      Pie: {}
    }
  },
  props: {
    myData: {
      type: Array,
      required: true
    },
    MyPieId: {
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
          name: '学生（小学）',
          data: 10
        },
        {
          name: '学生（初中）',
          data: 10
        },
        {
          name: '学生（高中）',
          data: 5
        },
        {
          name: '教师（小学）',
          data: 15
        },
        {
          name: '教师（初中）',
          data: 15
        },
        {
          name: '教师（高中）',
          data: 5
        },
        {
          name: '家长（小学）',
          data: 20
        },
        {
          name: '家长（初中）',
          data: 10
        },
        {
          name: '家长（高中）',
          data: 15
        }
      ]
      this.planToDrawPie(newval)
    })
  },
  methods: {
    // 准备绘制图表
    planToDrawPie (newval) {
      var xName = []
      var yData = []
      if (newval.length > 0) {
        newval.map((item) => {
          xName.push(item.name)
          yData.push({
            name: item.name,
            value: item.data
          })
        })
      }
      this.drawPie(yData, xName)
    },
    // 绘制图表
    drawPie (yData, xName) {
      this.Pie = echarts.init(document.getElementById(this.MyPieId))
      var _this = this
      // 网页窗口大小变化时，图表随之适应
      window.addEventListener('resize', function () {
        _this.Pie.resize()
      })
      this.Pie.setOption({
        // 标题设置
        title: {
          text: '',
          subtext: '',
          // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: 'center',
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: 'top',
          // itemGap设置主副标题纵向间隔，单位px，默认为10，
          itemGap: 10,
          // 副标题文本样式设置
          subtextStyle: {
            fontSize: 14,
            color: '#8B2323'
          }
        },
        tooltip: {
          trigger: 'item',
          // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          showDelay: 20,
          // 隐藏延迟，单位ms
          hideDelay: 20,
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          // 分页显示
          type: 'scroll',
          // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
          orient: 'horizontal',
          // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          left: 'center',
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          top: 'top',
          // 设置图例图形的宽
          itemWidth: 25,
          // 设置图例图形的高
          itemHeight: 18,
          textStyle: {
            // 图例文字颜色
            color: '#333'
          },
          // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
          itemGap: 20,
          // backgroundColor: '#eee',  // 设置整个图例区域背景颜色
          data: xName
        },
        series: [
          {
            name: '学段分类统计',
            type: 'pie',
            // radius: '50%',  // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
            // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            radius: [0, '25%'],
            data: [
              {value: 25, name: '学生'},
              {value: 35, name: '教师'},
              {value: 45, name: '家长'}
            ],
            // 颜色
            color: ['#10EFE0', '#EF42A4', '#FF8F03'],
            // itemStyle 设置饼状图扇形区域样式
            itemStyle: {
              // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
              // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(30, 144, 255，0.5)'
              }
            },
            // 设置值域的标签
            label: {
              normal: {
                // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                position: 'inner',
                // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: '{c}'
              }
            }
          },
          {
            name: '角色分类统计',
            type: 'pie',
            radius: ['25%', '65%'],
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 10, name: '学生（小学）' },
              { value: 10, name: '学生（初中）' },
              { value: 5, name: '学生（高中）' },
              { value: 15, name: '教师（小学）' },
              { value: 15, name: '教师（初中）' },
              { value: 5, name: '教师（高中）' },
              { value: 20, name: '家长（小学）' },
              { value: 10, name: '家长（初中）' },
              { value: 15, name: '家长（高中）' }
            ],
            // 颜色
            color: ['#51CEC6', '#6AE2D9', '#96F5EF', '#EF87C2', '#F79DD0', '#FFC8E7', '#FFB703', '#FFCD50', '#FFE296'],
            // itemStyle 设置饼状图扇形区域样式
            itemStyle: {
              // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
              // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(30, 144, 255，0.5)'
              }
            }
          }
        ]
      })
    }
  },
  watch: {
    myData (newval, oldval) {
      newval = [
        {
          name: '学生（小学）',
          data: 10
        },
        {
          name: '学生（初中）',
          data: 10
        },
        {
          name: '学生（高中）',
          data: 5
        },
        {
          name: '教师（小学）',
          data: 15
        },
        {
          name: '教师（初中）',
          data: 15
        },
        {
          name: '教师（高中）',
          data: 5
        },
        {
          name: '家长（小学）',
          data: 20
        },
        {
          name: '家长（初中）',
          data: 10
        },
        {
          name: '家长（高中）',
          data: 15
        }
      ]
      this.planToDrawPie(newval)
    }
  }
}
</script>

<style lang="less">
  .myPie{
    height: 100%;
    width: 100%;
  }
</style>
