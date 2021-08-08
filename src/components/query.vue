<template>
  <div id="query">
    <topBar v-on:homeWanted="homeWanted" />

    <!--Have checked-->
    <input type="checkbox" class="formField" id="Revenue USD Mil" />
    <label for="Revenue USD Mil" class="form-check-label">Revenue USD Mil</label>

    <input type="checkbox" class="formField" id="Gross Margin %" />
    <label for="Gross Margin %">Gross Margin %</label>

    <input type="checkbox" class="formField" id="Operating Income USD Mil" />
    <label for="Operating Income USD Mil">Operating Income USD Mil</label>

    <input type="checkbox" class="formField" id="Operating Margin %" />
    <label for="Operating Margin %">Operating Margin %</label>

    <input type="checkbox" class="formField" id="Net Income USD Mil" />
    <label for="Net Income USD Mil">Net Income USD Mil</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Earnings Per Share USD" />
    <label for="Earnings Per Share USD">Earnings Per Share USD</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Dividents USD" />
    <label for="Dividents USD">Dividents USD</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Payout Ratio %" />
    <label for="Payout Ratio %">Payout Ratio %</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Shares Mil" />
    <label for="Shares Mil">Shares Mil</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Book Value Per Share * USD" />
    <label for="Book Value Per Share * USD">Book Value Per Share * USD</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Operating Cash Flow USD Mil" />
    <label for="Operating Cash Flow USD Mil">Operating Cash Flow USD Mil</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Cap Spending USD Mil" />
    <label for="Cap Spending USD Mil">Cap Spending USD Mil</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Free Cash Flow USD Mil" />
    <label for="Free Cash Flow USD Mil">Free Cash Flow USD Mil</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Free Cash Flow Per Share * USD"/>
    <label for="Free Cash Flow Per Share * USD">Free Cash Flow Per Share * USD</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Working Capital USD Mil" />
    <label for="Working Capital USD Mil">Working Capital USD Mil</label>
    <!--<p />-->

    <input type="checkbox" class="formField" id="Margins % of Sales" />
    <label for="Margins % of Sales">Margins % of Sales</label>
    <!--<p />-->

    <input class="formField" id="Company Name" value="AAPL" />
    <label for="Company Name">Company Name</label>
    
    <!--submit button-->
    <script type="application/javascript">
function createChart(url) {
  function operateOnData(data) {
    var fields = [
      "Revenue USD Mil",
      "Gross Margin %",
      "Operating Income USD Mil",
      "Operating Margin %",
      "Net Income USD Mil",
      "Earnings Per Share USD",
      "Dividents USD",
      "Payout Ratio %",
      "Shares Mil",
      "Book Value Per Share * USD",
      "Operating Cash Flow USD Mil",
      "Cap Spending USD Mil",
      "Free Cash Flow USD Mil",
      "Free Cash Flow Per Share * USD",
      "Working Capital USD Mil",
      "Margins % of Sales",
    ];
    var headers = [];

    fields.forEach((item, index) => {
      if (document.getElementById(item).checked) {
        headers.push(item);
      }
    });

    var data = JSON.parse(data);
    console.log(data);
    var items = Object.keys(data).map(function(key) {
      return [key, data[key]];
    });
    items.sort(function(a,b){return b[1][0]-a[1][0]});
    console.log(items);
    data={};
    for (var i=0;i<items.length;i++)
    {
      data[items[i][0]]=items[i][1];
    }
    var parsedData = {};

    for (var i = 0; i < headers.length; i++) {
      parsedData[headers[i]] = {};
    }

    var company_list = [];

    for (comp in data) {
      for (var i = 0; i < data[comp][1].length; i++) {
        var valList = [];
        for (k in data[comp][1][i]) {
          valList.push(data[comp][1][i][k] * 100);
        }
        parsedData[headers[i]][comp] = valList;
      }
      company_list.push(comp);
    }
    date_list = Object.keys(data[company_list[0]][1][0]);
    var compTable = document.createElement("ol");

    for (var i in data) {
      var ol = document.createElement("li");
      ol.textContent = i + ": " + data[i][0] * 100;
      compTable.appendChild(ol);
    }
    document.body.appendChild(compTable);

    for (var i in parsedData) {
      var data_sets = [];
      for (k in parsedData[i]) {
        var raw_data_set = {
          label: k,
          data: parsedData[i][k],
        };
        data_sets.push(raw_data_set);
      }
      var data = {
        labels: date_list,
        datasets: data_sets,
      };
      blob = document.createElement("canvas");
      document.body.appendChild(blob);
      var ctx = blob.getContext("2d");
      var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: i,
            },
          },
        },
      });
    }
  }
  fetch(url).then((k) =>
    k.text().then((data) => {
      operateOnData(data);
    })
  );
}
function createURL(base_url,args)
{
    var fields = [
      "Revenue USD Mil",
      "Gross Margin %",
      "Operating Income USD Mil",
      "Operating Margin %",
      "Net Income USD Mil",
      "Earnings Per Share USD",
      "Dividents USD",
      "Payout Ratio %",
      "Shares Mil",
      "Book Value Per Share * USD",
      "Operating Cash Flow USD Mil",
      "Cap Spending USD Mil",
      "Free Cash Flow USD Mil",
      "Free Cash Flow Per Share * USD",
      "Working Capital USD Mil",
      "Margins % of Sales",
    ];
    var headers = [];

    fields.forEach((item, index) => {
      if (document.getElementById(item).checked) {
        headers.push(item);
      }
    });
    args.values=headers.join();
    args.company=document.getElementById("Company Name").value;
var url = new URL(base_url),params = args;
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
console.log(url);
return url;
}
    </script>
    <button onclick="createChart(createURL('https://stock-api-site.herokuapp.com/api/similar_companies',{}))" value="Find Companies"></button>
  </div>
</template>

<script>
import topBar from "./topBar.vue";

export default {
  name: "query",
  components: { topBar },
  methods: {
    homeWanted(event) {
      event;
      this.$emit("homeWanted");
    }
  },
};
</script>

<style scoped>
</style>