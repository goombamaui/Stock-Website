(function(e){function a(a){for(var r,o,s=a[0],l=a[1],c=a[2],p=0,u=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(a);while(u.length)u.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],r=!0,s=1;s<t.length;s++){var l=t[s];0!==i[l]&&(r=!1)}r&&(n.splice(a--,1),e=o(o.s=t[0]))}return e}var r={},i={app:0},n=[];function o(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)o.d(t,r,function(a){return e[a]}.bind(null,r));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var d=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},["home"===e.page?t("div",[t("home",{on:{queryWanted:e.queryWanted}})],1):"query"===e.page?t("div",[t("query",{on:{homeWanted:e.homeWanted}})],1):e._e()])},n=[],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"home"}},[t("topBar",{on:{queryWanted:e.queryWanted}}),t("h1",{staticClass:"text-center"},[e._v("Stock Grapher")]),t("h3",{staticClass:"text-center"},[e._v("By Aarav Borthakur and Aarush Vailaya")]),t("br"),t("center",[t("p",{staticClass:"text-center"},[t("span",[e._v("This website allows you to find similar stocks based on a multitude of factors.")]),t("br"),t("span",[e._v("To get started, "),t("a",{on:{click:function(a){return e.queryWanted()}}},[e._v("click here")]),e._v(".")])])])],1)},s=[],l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"topBar"}},[t("nav",{staticClass:"navbar navbar-default"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"navbar-header"},[t("a",{staticClass:"navbar-brand",on:{click:e.homeWanted}},[e._v("Stock Grapher")])]),t("ul",{staticClass:"nav navbar-nav"},[t("li",[t("a",{on:{click:e.queryWanted}},[e._v("Stock Data")])]),e._m(0)])])])])},c=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("li",[t("a",{attrs:{href:"https://github.com/goomabmaui/Stock-Website"}},[e._v("Github")])])}],d={name:"topBar",methods:{homeWanted:function(){this.$emit("homeWanted")},queryWanted:function(){this.$emit("queryWanted")}}},p=d,u=t("2877"),h=Object(u["a"])(p,l,c,!1,null,"2b497019",null),m=h.exports,f={name:"home",components:{topBar:m},methods:{queryWanted:function(e){this.$emit("queryWanted")}}},v=f,b=Object(u["a"])(v,o,s,!1,null,"7cabacaa",null),S=b.exports,g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"query"}},[t("topBar",{on:{homeWanted:e.homeWanted}}),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Revenue USD Mil"}}),t("label",{staticClass:"form-check-label",attrs:{for:"Revenue USD Mil"}},[e._v("Revenue USD Mil")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Gross Margin %"}}),t("label",{attrs:{for:"Gross Margin %"}},[e._v("Gross Margin %")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Operating Income USD Mil"}}),t("label",{attrs:{for:"Operating Income USD Mil"}},[e._v("Operating Income USD Mil")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Operating Margin %"}}),t("label",{attrs:{for:"Operating Margin %"}},[e._v("Operating Margin %")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Net Income USD Mil"}}),t("label",{attrs:{for:"Net Income USD Mil"}},[e._v("Net Income USD Mil")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Earnings Per Share USD"}}),t("label",{attrs:{for:"Earnings Per Share USD"}},[e._v("Earnings Per Share USD")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Dividends USD"}}),t("label",{attrs:{for:"Dividends USD"}},[e._v("Dividends USD")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Payout Ratio %"}}),t("label",{attrs:{for:"Payout Ratio %"}},[e._v("Payout Ratio %")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Shares Mil"}}),t("label",{attrs:{for:"Shares Mil"}},[e._v("Shares Mil")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Book Value Per Share * USD"}}),t("label",{attrs:{for:"Book Value Per Share * USD"}},[e._v("Book Value Per Share * USD")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Operating Cash Flow USD Mil"}}),t("label",{attrs:{for:"Operating Cash Flow USD Mil"}},[e._v("Operating Cash Flow USD Mil")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Cap Spending USD Mil"}}),t("label",{attrs:{for:"Cap Spending USD Mil"}},[e._v("Cap Spending USD Mil")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Free Cash Flow USD Mil"}}),t("label",{attrs:{for:"Free Cash Flow USD Mil"}},[e._v("Free Cash Flow USD Mil")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Free Cash Flow Per Share * USD"}}),t("label",{attrs:{for:"Free Cash Flow Per Share * USD"}},[e._v("Free Cash Flow Per Share * USD")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Working Capital USD Mil"}}),t("label",{attrs:{for:"Working Capital USD Mil"}},[e._v("Working Capital USD Mil")]),t("input",{staticClass:"formField",attrs:{type:"checkbox",id:"Margins % of Sales"}}),t("label",{attrs:{for:"Margins % of Sales"}},[e._v("Margins % of Sales")]),t("br"),t("br"),t("center",[t("p",[e._v("Company Name "),t("input",{staticClass:"formField",attrs:{id:"Company Name",value:"AAPL"}})]),t("br"),t("script",{attrs:{type:"application/javascript"}},[e._v(' function createChart(url) { function operateOnData(data) { var fields = [ "Revenue USD Mil", "Gross Margin %", "Operating Income USD Mil", "Operating Margin %", "Net Income USD Mil", "Earnings Per Share USD", "Dividends USD", "Payout Ratio %", "Shares Mil", "Book Value Per Share * USD", "Operating Cash Flow USD Mil", "Cap Spending USD Mil", "Free Cash Flow USD Mil", "Free Cash Flow Per Share * USD", "Working Capital USD Mil", "Margins % of Sales", ]; var headers = []; fields.forEach((item, index) => { if (document.getElementById(item).checked) { headers.push(item); } }); var data = JSON.parse(data); console.log(data); var items = Object.keys(data).map(function(key) { return [key, data[key]]; }); items.sort(function(a, b) { return b[1][0] - a[1][0]; }); console.log(items); data = {}; for (var i = 0; i < items.length; i++) { data[items[i][0]] = items[i][1]; } var parsedData = {}; for (var i = 0; i < headers.length; i++) { parsedData[headers[i]] = {}; } var company_list = []; for (comp in data) { for (var i = 0; i < data[comp][1].length; i++) { var valList = []; for (k in data[comp][1][i]) { valList.push(data[comp][1][i][k] * 100); } parsedData[headers[i]][comp] = valList; } company_list.push(comp); } date_list = Object.keys(data[company_list[0]][1][0]); var compTable = document.createElement("ol"); for (var i in data) { var ol = document.createElement("li"); ol.textContent = i + ": " + data[i][0] * 100; compTable.appendChild(ol); } var colors = ["red","orange","yellow","green","blue","purple","black","brown","chartreuse","fuchsia","khaki"]; document.body.appendChild(compTable); for (var i in parsedData) { var data_sets = []; p=0; for (k in parsedData[i]) { var raw_data_set = { label: k, data: parsedData[i][k], borderColor: colors[p], }; p+=1; data_sets.push(raw_data_set); } var data = { labels: date_list, datasets: data_sets, }; blob = document.createElement("canvas"); document.body.appendChild(blob); var ctx = blob.getContext("2d"); var chart = new Chart(ctx, { type: "line", data: data, options: { plugins: { title: { display: true, text: i, }, }, }, }); } } fetch(url).then((k) => k.text().then((data) => { operateOnData(data); }) ); } function createURL(base_url, args) { var fields = [ "Revenue USD Mil", "Gross Margin %", "Operating Income USD Mil", "Operating Margin %", "Net Income USD Mil", "Earnings Per Share USD", "Dividends USD", "Payout Ratio %", "Shares Mil", "Book Value Per Share * USD", "Operating Cash Flow USD Mil", "Cap Spending USD Mil", "Free Cash Flow USD Mil", "Free Cash Flow Per Share * USD", "Working Capital USD Mil", "Margins % of Sales", ]; var headers = []; fields.forEach((item, index) => { if (document.getElementById(item).checked) { headers.push(item); } }); if (headers.length==0) { alert("Please select a box."); return; } console.log(headers.length); args.values = headers.join(); args.company = document.getElementById("Company Name").value; var url = new URL(base_url), params = args; Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]) ); console.log(url); return url; } ')]),t("button",{attrs:{onclick:"createChart(createURL('https://stock-api-site.herokuapp.com/api/similar_companies',{}))",value:"Find Companies"}},[e._v("Execute query")])])],1)},y=[],D={name:"query",components:{topBar:m},methods:{homeWanted:function(e){this.$emit("homeWanted")}}},k=D,C=Object(u["a"])(k,g,y,!1,null,"6ff7ef9c",null),_=C.exports,M={name:"app",components:{home:S,query:_},methods:{queryWanted:function(e){this.page="query"},homeWanted:function(e){this.page="home"}},data:function(){return{page:"home"}}},U=M,F=Object(u["a"])(U,i,n,!1,null,null,null),x=F.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app")}});
//# sourceMappingURL=app.b00aebd9.js.map