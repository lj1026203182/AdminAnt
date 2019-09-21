<template>
  <div class="logo">
    <img src="../../assets/image/logo.svg" alt="" />
    <h1>
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    title: {
      type: String,
      default: 'Ant Design',
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
<style>
</style>
