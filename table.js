function updateDates() {
  var ds = document.getElementById("date").value;
  if (ds) {
    ds = ds + " 00:00:00";
    var d = new Date(ds);
    if (Number.isNaN(d.getMonth())) {
      let arr = ds.split(/[- :]/);
      d = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
    }
    document.getElementById("499").innerHTML = this.getDaysAgo(
      new Date(d),
      499
    );
    document.getElementById("365").innerHTML = this.getDaysAgo(
      new Date(d),
      365
    );
    document.getElementById("180").innerHTML = this.getDaysAgo(
      new Date(d),
      180
    );
    document.getElementById("105").innerHTML = this.getDaysAgo(
      new Date(d),
      105
    );
    document.getElementById("90").innerHTML = this.getDaysAgo(new Date(d), 90);
    document.getElementById("75").innerHTML = this.getDaysAgo(new Date(d), 75);
    document.getElementById("60").innerHTML = this.getDaysAgo(new Date(d), 60);
    document.getElementById("45").innerHTML = this.getDaysAgo(new Date(d), 45);
    document.getElementById("30").innerHTML = this.getDaysAgo(new Date(d), 30);
  }
}
function getDaysAgo(a, b) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  a.setDate(a.getDate() - b);
  return a.toLocaleDateString("en-US", options);
}
