 <template>
  <div>
    <h1>Footer</h1>
  </div>
</template>
 
 <script>
require("dotenv").config();
export default {
  mounted() {
    console.log(process.env.VUE_APP_ROOT_API);
  }
};
</script>
 
 <style>
</style>