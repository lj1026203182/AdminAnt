<template>
  <a-layout class="layout">
    <!-- SideMenu -->
    <side-menu
      mode="inline"
      :menus="menus"
      theme="light"
      :collapsed="collapsed"
      collapsible
      @menuSelect="turnToPage"
    />

    <a-layout class="sidemenu h_100" :style="{ paddingLeft: contentPaddingLeft }">
      <!-- layout header -->
      <main-header :collapsed="collapsed" @toggle="toggle" />

      <!-- 多标签选项栏 -->
      <multi-tab />

      <!-- layout content -->
      <a-layout-content :style="{ padding: '16px', height: '100%', minHeight: '360px' }">
        <transition name="page-transition">
          <keep-alive>
            <!--使用keep-alive会将页面缓存-->
            <router-view v-if="$route.meta.keepAlive" />
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive" />
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
import SideMenu from '../../components/Main/SideMenu'
import MainHeader from '../../components/Main/MainHeader'
import MultiTab from '../../components/Main/MultiTab'
import routes from '../../router.config'
export default {
  name: 'BasicLayout',
  data () {
    return {
      collapsed: false,
      menus: []
    }
  },
  components: {
    SideMenu,
    MainHeader,
    MultiTab
  },
  created () {
    this.menus = routes
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
      triggerWindowResizeEvent()
    },
    drawerClose () {
      this.collapsed = false
    },
    // 跳转
    turnToPage (route) {
      this.$router.push({ name: route.key })
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
