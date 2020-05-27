<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
@import "@/scss/header.scss";
@import "@/scss/footer.scss";
@import "@/scss/input.scss";
@import "@/scss/home.scss";

body {
  background: #000;
  color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

/* .dataCountry {
  height: 100vh;
  margin: auto;
} */
</style>
