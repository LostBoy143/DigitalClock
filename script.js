let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let date = document.querySelector("#currentDate");
let time = document.querySelector("#am-pm");

setInterval(function () {
  let currentTime = new Date();
  let month = currentTime.getMonth() + 1;
  let session = "AM";

  date.innerHTML =
    currentTime.getDate() +
    "-" +
    month +
    "-" +
    currentTime.getFullYear();

  hrs.innerHTML =
    currentTime.getHours() < 10
      ? "0" + currentTime.getHours()
      : currentTime.getHours();

  mins.innerHTML =
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes();

  sec.innerHTML =
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds();

  if (hrs > 12) {
    hrs = hrs - 12;
    session = "PM";
  }
  time.innerHTML = session;
}, 1000);
