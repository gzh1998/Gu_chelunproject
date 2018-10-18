<template>
  <div id="app">
    <transition enter-active-class="animated fadeInRight">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  },
  components: {
  }
}
</script>

<style>
@import url('../static/style/style.css');
</style>
