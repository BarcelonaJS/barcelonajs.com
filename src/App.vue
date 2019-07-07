<template>
  <div id="app">
    <router-view name="header"/>
    <main>
      <fade-transition 
        :duration="250" 
        origin="center" 
        mode="out-in">
        <router-view/>
      </fade-transition>
    </main>
    <router-view name="footer"/>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>
