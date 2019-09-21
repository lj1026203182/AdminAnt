<template>
  <a-layout class="layout">
    <!-- SideMenu -->
    <side-menu
      mode="inline"
      :menus="menus"
      theme="dark"
      :collapsed="collapsed"
      collapsible
      @menuSelect="turnToPage"
    ></side-menu>

    <a-layout class="sidemenu h_100" :style="{ paddingLeft: contentPaddingLeft }">
      <!-- layout header -->
      <main-header :collapsed="collapsed" @toggle="toggle" />

      <!-- 多标签选项栏 -->
      <multi-tab />

      <!-- layout content -->
      <a-layout-content :style="{ padding: '16px', height: '100%', minHeight: '360px' }">
        <transition name="page-transition">
          <router-view></router-view>
        </transition>
      </a-layout-content>

      <!-- layout footer -->
      <a-layout-footer>
        <!-- <global-footer /> -->
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { triggerWindowResizeEvent } from '../../util/util'
import RouteView from '../../components/Main/RouteView'
import SideMenu from '../../components/Main/SideMenu'
import MainHeader from '../../components/Main/MainHeader'
import MultiTab from '../../components/Main/MultiTab'
import routes from '../../router.config'
export default {
  name: 'BasicLayout',
  data () {
    return {
      collapsed: false,
      menus: routes
    }
  },
  components: {
    RouteView,
    SideMenu,
    MainHeader,
    MultiTab
  },
  created () {
  },
  mounted () {

  },
  computed: {
    contentPaddingLeft () {
      if (!this.collapsed) {
        return '256px'
      }
      return '80px'
    }
  },
  watch: {

  },
  methods: {
    toggle () {
      this.collapsed = !this.collapsed
      // triggerWindowResizeEvent()
    },
    drawerClose () {
      this.collapsed = false
    },
    // 跳转
    turnToPage (route) {
      let name = route.name || route.key
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="less">
@import url("./Main.less");

.page-transition-enter {
  opacity: 0;
}

.page-transition-leave-active {
  opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
