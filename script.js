let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let date = document.querySelector("#currentDate");
let time = document.querySelector("#am-pm");
let session = "AM";

setInterval(function () {
  let currentTime = new Date();
  let month = currentTime.getMonth() + 1;
  let hours = currentTime.getHours();
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }
  time.innerHTML = session;

  date.innerHTML =
    currentTime.getDate() +
    "-" +
    month +
    "-" +
    currentTime.getFullYear();

  hrs.innerHTML =
    hours < 10 ? "0" + hours : hours;

  mins.innerHTML =
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes();

  sec.innerHTML =
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds();
}, 1000);
