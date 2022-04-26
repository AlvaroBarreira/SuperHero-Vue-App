<script lang="js">
import Logo from './assets/background2.jpg';
import Footer from './components/Footer/Footer.vue';

export default {
    name: "App",
    data() {
        return {
            image: { backgroundImage: `url(${Logo})` }
        };
    },
    components: { Footer }
};
</script>

<template>

    <router-view>
      
    </router-view>
</template>

<style>
#app {
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}
</style>
