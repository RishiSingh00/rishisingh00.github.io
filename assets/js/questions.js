function startTimer() {
  var countDownTime = 30 * 60 * 1000;
  var endTime = localStorage.getItem("countdownEnd");

  if (!endTime) {
    var now = new Date().getTime();
    endTime = now + countDownTime;
    localStorage.setItem("countdownEnd", endTime);
  } else {
    endTime = parseInt(endTime); // parse as integer
  }

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = endTime - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        hours + " : " + minutes + " : " + seconds;

    if (distance < 0) {
      // clearInterval(x);
      // document.getElementById("timer").innerHTML = "EXPIRED";
      // localStorage.removeItem("countdownEnd");
      saveText();
    } else {
      localStorage.setItem("countdownEnd", endTime);
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
};



//shiv's func
//
// var sec= 300*5,
//     countDiv= document.getElementById("timer"),
//     secpass,
//     countDown   = setInterval(function () {
//       'use strict';
//       secpass();
//     }, 1000);
//
// function secpass() {
//   'use strict';
//
//   var min     = Math.floor(sec / 60),
//       remSec  = sec % 60;
//
//   if (remSec < 10) {
//
//     remSec = '0' + remSec;
//
//   }
//   if (min < 10) {
//
//     min = '0' + min;
//
//   }
//   countDiv.innerHTML =
//   document.getElementById("timer").innerHTML = min + ":" + remSec;
//
//   if (sec > 0) {
//
//     sec = sec - 1;
//
//   } else {
//     clearInterval(countDown);
// //    countDiv.innerHTML = 'countdown done';
//    // validate();
//   //  window.location = "../pages/task_two.html"
//   }
// }
// Modal

var modal = document.getElementById("myModal");

var hintBtn = document.querySelector(".icon-hint");

var span = document.getElementsByClassName("close")[0];

var desktop = document.getElementById("desktop1");


hintBtn.onclick = function () {
  if(localStorage['currentIndex']<5) {
    alert('Hint not available for easy questions');
  }
  else {
    if(localStorage['sawHint'] === localStorage['currentIndex']) {
      modal.style.display = "flex";
      desktop.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    }
    else {
      modal.style.display = "flex";
      desktop.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      localStorage['hintCount']++;
      localStorage['sawHint'] = localStorage['currentIndex'];
    }

  }
};


span.onclick = function () {
  modal.style.display = "none";
  desktop.style.backgroundColor = "#000";
};


window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    desktop.style.backgroundColor = "#000";
  }
};

