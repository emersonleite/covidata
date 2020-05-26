 <template>
  <div class="header__container">
    <div class="header">
      <img class="header__logo" src="@/assets/covid.svg" alt />
      <SelectionCountry />
    </div>
  </div>
</template>
 
 <script>
import SelectionCountry from "@/components/SelectionCountry.vue";
export default {
  name: "TheHeader",
  components: {
    SelectionCountry
  }
};
</script>
 
 <style>
</style>