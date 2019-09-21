<script>
export default {
  name: 'RouteView',
  data () {
    return {}
  },
  render () {
    const inKeep = (
      <keep-alive>
        <router-view />
      </keep-alive>
    )
    const notKeep = (
      <router-view />
    )
    return this.$route.meta.keepAlive ? inKeep : notKeep
  }
}
</script>
