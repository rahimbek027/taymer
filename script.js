const countDownDate = new Date("July 15, 2024 00:00:00").getTime();
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const duration = countDownDate - now;
  
  if (duration < 0) {
    clearInterval(interval);
    updateDuration(0);
    return;
  }
  
  updateDuration(duration);
  }, 1000);

function updateDuration(duration)  {
