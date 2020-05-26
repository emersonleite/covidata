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
  },
  created() {
    /*  document.html.lang = "pt-br";*/
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

.dataCountry {
  height: 100vh;
  margin: auto;
}

.dataCountry__container {
  max-width: 960px;
  margin: 0 auto;
  padding: 30px;
}

.header {
  background: salmon;
}

.header__container {
  border: solid 1px blue;
  max-width: 960px;
  margin: 0 auto;
}

.header__logo {
  height: 50px;
}

.header__form {
  text-align: right;
}
</style>
