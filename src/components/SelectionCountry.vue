  <template>
  <form class="input__form" @change="setCountryToState">
    <div class="input__container">
      <label class="input__label" for="country">Choose your Country</label>
      <select
        class="input__country"
        name="country"
        id="country"
        @change="getCode"
        v-model="country"
      >
        <option value=" " disabled selected>Escolha um país</option>
        <option
          v-for="(country, index) in list"
          id="option"
          :value="`${country.name}${country.alpha3code}`"
          :key="index"
        >{{country.name}} - {{country.alpha3code}}</option>
      </select>
    </div>
    <div class="input__container">
      <label class="input__label" for="date">Choose the date</label>
      <input class="input__date" type="date" name="date" id="date" required v-model="date" />
    </div>
  </form>
</template>
  
  <script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  name: "SelectionCountry",
  data() {
    return {
      list: {},
      country: "",
      date: ""
    };
  },
  computed: {},
  methods: {
    getCode() {
      const code = document.getElementById("option").innerText;
      //const codeFormated = code.slice(-2);
      console.log(code);
    },
    ...mapMutations(["UPDATE_DATA_COUNTRY"]),
    listCountries() {
      axios
        .get("https://covid-19-data.p.rapidapi.com/help/countries", {
          headers: {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":
              "0de7c76614msh4954a2050acd257p123aecjsnaf04b33e4b7b",
            useQueryString: true
          }
        })
        .then(response => {
          //console.log(response.data);
          this.list = response.data;
        });
    },
    setCountryToState() {
      if (this.date && this.country) {
        this.$store.commit("UPDATE_DATA_COUNTRY", {
          country: this.country.slice(0, -3),
          code: this.country.slice(-3),
          date: this.date
        });
      }
    }
  },
  watch: {},
  created() {
    this.listCountries();
  }
};
</script>

  <style>
</style>