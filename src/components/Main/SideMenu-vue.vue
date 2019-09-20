<template>
  <a-layout-sider
    class="sider shadow dark ant-fixed-sidemenu"
    width="256px"
    :collapsible="collapsible"
    v-model="collapsed"
    :trigger="null"
  >
    <Logo />
    <a-menu
      mode="inline"
      theme="dark"
      @select="handleSelect"
      :openKeys="openKeys"
      :selectedKeys="selectedKeys"
      @openChange="onOpenChange"
    >
      <template v-for="item in menuList">
        <!-- 只有一个children -->
        <a-menu-item
          v-if="item.children.length == 1"
          :index="item.children[0].path"
          :key="item.children[0].name"
        >
          <a-icon :type="item.children[0].meta.icon" />
          {{ showTitle(item.children[0]) }}
        </a-menu-item>
        <!-- 多个children -->
        <a-sub-menu v-else :key="item.name">
          <span slot="title">
            <a-icon :type="item.meta.icon" />
            <span>{{ showTitle(item) }}</span>
          </span>
          <template v-for="it in item.children">
            <a-menu-item :key="it.name" v-if="!it.meta.hidden">
              <span>{{ showTitle(it) }}</span>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Logo from './Logo'
import { showTitle } from '../../util/util'
export default {
  name: 'SideMenu',
  components: { Logo },
  props: {
    mode: {
      type: String,
      required: false,
      default: 'inline'
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menus: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      openKeys: [],
      selectedKeys: [],
      cachedOpenKeys: []
    }
  },
  mounted () {
    this.updateMenu()
  },
  computed: {
    menuList () {
      return this.menus.filter(item => {
        return !item.hidden && item.children && item.children.length > 0
      })
    },
    rootSubmenuKeys () {
      const keys = []
      this.menuList.forEach(item => keys.push(item.name))
      return keys
    }
  },
  watch: {
    $route () {
      this.updateMenu()
    }
  },
  methods: {
    showTitle (item) {
      return showTitle(item)
    },
    handleSelect (name) {
      this.$emit('onSelect', name)
    },
    updateMenu () {
      const routes = this.$route.matched
      this.selectedKeys = [routes.pop().name]
      const openKeys = []
      routes.forEach(item => {
        openKeys.push(item.name)
      })
      console.log(this.selectedKeys);
      this.collapsed ? (this.cachedOpenKeys = openKeys) : (this.openKeys = openKeys)
    },
    // 手风琴效果
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => !this.openKeys.includes(key))
      if (!this.rootSubmenuKeys.includes(latestOpenKey)) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
}
</script>
