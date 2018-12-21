<template>
  <div id="app">
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/navigation/navigation'
export default {
  name: 'App',
  components: {Navigation}
}
</script>

<style>

</style>
