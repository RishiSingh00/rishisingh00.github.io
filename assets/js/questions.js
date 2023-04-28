//Timer

var countDownTime = 25 * 60 * 1000;
var now = new Date().getTime();
var endTime = now + countDownTime;

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = endTime - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    hours + ": " + minutes + ": " + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Modal

var modal = document.getElementById("myModal");

var btn = document.getElementById("btn");

var span = document.getElementsByClassName("close")[0];

var desktop = document.getElementById("desktop1");

btn.onclick = function () {
  modal.style.display = "flex";
  desktop.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
};

span.onclick = function () {
  modal.style.display = "none";
  desktop.style.backgroundColor = "#000";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
