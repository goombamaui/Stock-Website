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
      console.log(data);
    })
  );
}
