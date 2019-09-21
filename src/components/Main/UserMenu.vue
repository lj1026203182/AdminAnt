<template>
  <div class="user-wrapper">
    <div class="content-box">
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar size="small" icon="user" />
          <span class="p_8">{{ nickname }}</span>
          <a-icon type="down" />
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="0">
            <router-link :to="{ name: 'center' }">
              <a-icon type="user" />
              <span>个人中心</span>
            </router-link>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout" />
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <!-- <lang-select /> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import LangSelect from '@/components/tools/LangSelect'
export default {
  name: 'UserMenu',
  data () {
    return {
      nickname: 'admin',
      avatar: ''
    }
  },
  components: {
    // LangSelect
  },
  computed: {
    // ...mapGetters(['nickname', 'avatar'])
  },
  methods: {
    // ...mapActions(['Logout']),
    handleLogout () {
      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk: () => {
          return this.Logout({}).then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 16)
          }).catch(err => {
            this.$message.error({
              title: '错误',
              description: err.message
            })
          })
        },
        onCancel () {
        }
      })
    }
  }
}
</script>
