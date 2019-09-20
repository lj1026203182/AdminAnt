<template>
  <div class="logo">
    <router-link :to="{ name: $config.homeName }">
      <!-- <img src="../../assets/image/logo.svg" alt="" /> -->
      <div class="fontsize_32 white flex_center">{{ title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    title: {
      type: String,
      default: 'Ant Design Pro',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
