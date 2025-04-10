let countdownInterval;
let totalSeconds = 0;
let paused = false;

const timerDisplay = document.getElementById("timer");
const alarmSound = document.getElementById("alarmSound");

function updateDisplay(secondsLeft) {
  const hrs = Math.floor(secondsLeft / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;

  timerDisplay.textContent = `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function startCountdown() {
  clearInterval(countdownInterval);
  paused = false;

  const hrs = parseInt(document.getElementById("hours").value) || 0;
  const mins = parseInt(document.getElementById("minutes").value) || 0;
  const secs = parseInt(document.getElementById("seconds").value) || 0;

  totalSeconds = hrs * 3600 + mins * 60 + secs;

  if (totalSeconds <= 0) {
    alert("Please enter a valid time.");
    return;
  }

  countdownInterval = setInterval(() => {
    if (!paused && totalSeconds > 0) {
      totalSeconds--;
      updateDisplay(totalSeconds);

      if (totalSeconds === 0) {
        clearInterval(countdownInterval);
        timerDisplay.textContent = "Time's up! 🎉";
        alarmSound.play();
      }
    }
  }, 1000);

  updateDisplay(totalSeconds);
}

function pauseCountdown() {
  paused = true;
}

function resumeCountdown() {
  if (totalSeconds > 0 && paused) {
    paused = false;
  }
}

function resetCountdown() {
  clearInterval(countdownInterval);
  totalSeconds = 0;
  paused = false;
  updateDisplay(0);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
