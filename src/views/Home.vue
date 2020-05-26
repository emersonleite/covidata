 <template>
  <div class="dataCountry__container">
    <div class="dataCountry">
      <h1>{{dataSomeCountry.country}}</h1>
      <img :src="`https://www.countryflags.io/${this.dataCountry.code}/shiny/64.png`" alt />
      <h1>Data: {{dataSomeCountry.date}}</h1>
      <h2>Casos de covid 19</h2>
      <div v-if="sumRecovered">
        <p>Latitude: {{dataSomeCountry.latitude}}</p>
        <p>Longitude: {{dataSomeCountry.longitude}}</p>
        <p>Total: {{sumConfirmed}}</p>
        <p>Recuperados: {{sumRecovered}}</p>
        <p>Ativos: {{sumActive}}</p>
        <p>Mortos: {{sumDeaths}}</p>
      </div>
      <div v-else-if="dataSomeCountry.country">
        <p>Não há dados para esse país.</p>
      </div>
      <div v-else>
        <p>Escolha o país acima</p>
      </div>
    </div>
  </div>
</template>
 
 <script>
import { mapState } from "vuex";
import axios from "axios";
import sum from "../functions/sumValuesObjectIntoArray.js";
export default {
  data() {
    return {
      dataSomeCountry: {},
      sumRecovered: 0,
      sumConfirmed: 0,
      sumDeaths: 0,
      sumActive: 0
    };
  },
  methods: {
    getDataCountry(url) {
      axios
        .get(url, {
          headers: {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":
              "0de7c76614msh4954a2050acd257p123aecjsnaf04b33e4b7b",
            useQueryString: true
          }
        })
        .then(response => {
          console.log(response.data[0]);
          this.dataSomeCountry = response.data[0];
          this.sumRecovered = sum(
            this.dataSomeCountry["provinces"],
            "recovered"
          );
          this.sumConfirmed = sum(
            this.dataSomeCountry["provinces"],
            "confirmed"
          );
          this.sumDeaths = sum(this.dataSomeCountry["provinces"], "deaths");
          this.sumActive = sum(this.dataSomeCountry["provinces"], "active");
        });
    }
  },
  computed: {
    ...mapState(["dataCountry"]),
    urlData() {
      return `https://covid-19-data.p.rapidapi.com/report/country/name?date-format=YYYY-MM-DD&format=json&date=${this.dataCountry.date}&name=${this.dataCountry.country}`;
    }
  },
  watch: {
    urlData() {
      console.log(this.urlData);
      this.getDataCountry(this.urlData);
    }
  }
};
</script>
 
 <style>
</style>