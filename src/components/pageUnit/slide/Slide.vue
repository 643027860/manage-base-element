<template>
  <div class="mySlide">
    <el-menu
        :default-active="menuId"
        class="el-menu-vertical-demo"
        :collapse="!slideStatus"
        :unique-opened="true"
        :collapse-transition="false"
        background-color="#304156"
        text-color="rgb(191, 203, 217)"
        active-text-color="rgb(64, 158, 255)"
    >
      <el-submenu index="MainPage">
        <template slot="title">
          <i class="el-icon-house"></i>
          <span slot="title">主页</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name:'MainPage'}" class="myLink"><el-menu-item index="MainPage" @click="close">主页</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="Charts">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span slot="title">图表</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name:'Pie'}" class="myLink"><el-menu-item index="Pie" @click="close">饼图</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <router-link :to="{name:'Line'}" class="myLink"><el-menu-item index="Line" @click="close">折线图</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <router-link :to="{name:'Bar'}" class="myLink"><el-menu-item index="Bar" @click="close">柱形图</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="Functions">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span slot="title">功能模块</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name:'Loading'}" class="myLink"><el-menu-item index="Loading" @click="close">Loading</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <router-link :to="{name:'UEditor'}" class="myLink"><el-menu-item index="UEditor" @click="close">UEditor</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <router-link :to="{name:'Video'}" class="myLink"><el-menu-item index="Video" @click="close">视频</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="InfoLists">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span slot="title">信息列表</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name:'InfoList1'}" class="myLink"><el-menu-item index="InfoList1" @click="close">列表一</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <router-link :to="{name:'InfoList2'}" class="myLink"><el-menu-item index="InfoList2" @click="close">列表二</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <router-link :to="{name:'InfoList3'}" class="myLink"><el-menu-item index="InfoList3" @click="close">列表三</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import $ from 'jquery'
export default {
  mounted () {
    // 小于等于768px时,初始化默认关闭侧边导航栏
    if ($(window).width() <= 768) {
      this.handleSlideStatus(false)
    }
  },
  computed: {
    ...mapState(['slideStatus', 'menuId'])
  },
  methods: {
    ...mapActions(['handleSlideStatus']),
    // 小于等于768px时，选择菜单时会自动关闭侧边导航栏
    close () {
      if ($(window).width() <= 768) {
        this.handleSlideStatus(!this.slideStatus)
      }
    }
  }
}
</script>

<style lang="less">
  .mySlide{
    .el-menu{
      max-width: 250px;
      max-width: 12.5rem;
      border-right: none;
      .el-menu-item-group__title{
        padding-bottom: 0;
        padding-top: 0;
      }
      .el-menu--inline .el-menu-item{
        background-color: #1F2D3D!important;
      }
      .el-menu--inline .el-menu-item:hover{
        background-color: #001528!important;
      }
    }
  }
</style>
