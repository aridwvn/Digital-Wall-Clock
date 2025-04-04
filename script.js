var minute = 0;
var hour = 0;
var d = new Date();

setInterval(function () {
  d = new Date();

  minute = d.getMinutes() * 6;
  hour = (d.getHours() % 12) * 30 + d.getMinutes() / 2;

  document.getElementById("minute-hand").style.transform =
    "rotate(" + minute + "deg)";
  document.getElementById("hour-hand").style.transform =
    "rotate(" + hour + "deg)";

  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}, 1000);
