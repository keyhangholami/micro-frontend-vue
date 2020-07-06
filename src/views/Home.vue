<template>
  <div class="home">
    <img alt="Vue logo" v-src="{ logoSrc }" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      logoSrc: `${process.env.VUE_APP_CONTENT_HOST}/assets/logo.png`
    };
  },
  components: {
    HelloWorld
  }
};
</script>
