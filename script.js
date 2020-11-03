const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.apify.com/v2/datasets/L3VCmhMeX0KUQeJto/items?format=json&clean=1');
xhr.responseType = 'json';
xhr.onload = function(e) {
		
cases = this.response;
var iterator = cases.values();
var dlugosc = cases.length
var dlugosc2 = dlugosc - 30;
var index = 0;
var myvalues = new Array();
var myvalues2 = new Array();
var myvalues3 = new Array();
var step;
for (step=0; step < dlugosc; step++) {
	lastUpdatedAtApify = this.response[step]['lastUpdatedAtApify']; 
	infected = this.response[step]['infected'];
	deceased = this.response[step]['deceased'];
	myvalues.push(infected);
	myvalues2.push(lastUpdatedAtApify);
	myvalues3.push(deceased);
}
console.log(myvalues);
document.getElementById("myImg").src = "done.png";


var ctx = document.getElementById("polarChart").getContext('2d');
var lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: myvalues2,
    datasets: [{
      label: 'Zarażeni',
      data: myvalues,
      backgroundColor: "rgba(0,0,255,0.5)"
    }, {
      label: 'Zmarli',
      data: myvalues3,
      backgroundColor: "rgba(255,0,0,0.5)"
    }]
  }
});
};
xhr.send();