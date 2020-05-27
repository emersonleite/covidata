 <template>
  <!-- Home -->
  <section class="dataCountry__container">
    <SelectionCountry />
    <div class="dataCountry">
      <div class="dataCountry__dataList">
        <ul v-if="sumRecovered">
          <li class="dataCountry__data">
            <img class="dataCountry__image" src="../assets/img/logo__recovered.svg" alt />
            <p class="dataCountry__recovered">
              Recovered:
              <span>{{sumRecovered}}</span>
            </p>
          </li>
          <li class="dataCountry__data">
            <img class="dataCountry__image" src="../assets/img/logo__confirmed.svg" alt />
            <p class="dataCountry__confirmed">
              Confirmed:
              <span>{{sumConfirmed}}</span>
            </p>
          </li>
          <li class="dataCountry__data">
            <img class="dataCountry__image" src="../assets/img/logo__deaths.svg" alt />
            <p class="dataCountry__deaths">
              Deaths:
              <span>{{sumDeaths}}</span>
            </p>
          </li>
          <li class="dataCountry__data">
            <img class="dataCountry__image" src="../assets/img/logo__active.svg" alt />
            <p class="dataCountry__active">
              Active:
              <span>{{sumActive}}</span>
            </p>
          </li>
        </ul>
        <div v-else-if="dataSomeCountry.country">
          <p class="dataCountry__not">No data was founded ...</p>
        </div>
        <div class="dataCountry__none" v-else>
          <p>Choose the country and the date above</p>
        </div>
      </div>
      <div class="dataCountry__containerFlag" v-if="dataSomeCountry.country">
        <div>
          <img
            class="dataCountry__flag"
            :src="`svg/${dataCountry.code.toLowerCase()}.svg`"
            :alt="dataCountry.country"
          />
        </div>
      </div>
    </div>
  </section>
</template>
 
 <script>
import { mapState } from "vuex";
import axios from "axios";
import SelectionCountry from "@/components/SelectionCountry.vue";
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
  components: {
    SelectionCountry
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