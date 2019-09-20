<template>
  <a-layout class="layout">
    <!-- SideMenu -->
    <side-menu
      mode="inline"
      :menus="menus"
      theme="dark"
      :collapsed="collapsed"
      collapsible
      @onSelect="turnToPage"
    ></side-menu>

    <a-layout class="sidemenu">
      <!-- layout header -->
      <MainHeader
        :menus="menus"
        theme="dark"
        :collapsed="collapsed"
        @toggle="toggle"
      />

      <!-- layout content -->
      <a-layout-content
        style="{
          height: '100%';
          margin: '24px 24px 0';
          paddingTop: '64px'
        }"
      >
        <transition name="page-transition">
          <route-view />
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
import RouteView from '../../components/Main/RouteView'
import SideMenu from '../../components/Main/SideMenu'
import MainHeader from '../../components/Main/Header'
import routes from '../../router.config'
export default {
  name: 'BasicLayout',
  components: {
    RouteView,
    SideMenu,
    MainHeader
  },
  data () {
    return {
      collapsed: false,
      menus: routes
    }
  },
  computed: {
  },
  watch: {
    sidebarOpened (val) {
      this.collapsed = !val
    }
  },
  created () {
    // this.menus = routes
    console.log(this.menus);
  },
  methods: {
    toggle () {
      this.collapsed = !this.collapsed
      this.setSidebar(!this.collapsed)
      triggerWindowResizeEvent()
    },
    paddingCalc () {
      let left = ''
      if (this.sidebarOpened) {
        left = this.isDesktop() ? '256px' : '80px'
      } else {
        left = (this.isMobile() && '0') || ((this.fixSidebar && '80px') || '0')
      }
      return left
    },
    menuSelect () {
      if (!this.isDesktop()) {
        this.collapsed = false
      }
    },
    drawerClose () {
      this.collapsed = false
    },
    // 跳转
    turnToPage (route) {
      this.$router.push({ name: route.key })
    },
  }
}
</script>

<style lang="less">
@import url('./Main.less');

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
