<template>
  <div id="app">
    <transition enter-active-class="animated fadeInRight">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
