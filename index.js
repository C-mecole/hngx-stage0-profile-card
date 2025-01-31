document.addEventListener("DOMContentLoaded", function () {
  const skillBoxes = document.querySelectorAll(".skill-box");
  const timeElement = document.getElementById("currentTimeUTC");
  const dayElement = document.getElementById("currentDay");
  const monthElement = document.getElementById("currentMonth");

  skillBoxes.forEach((box) => {
    const percentageElement = box.querySelector(".percentage");
    const targetPercentage = parseInt(box.getAttribute("data-percent"));
    const border = box.querySelector(".progress-border");
    let currentPercentage = 0;

    const interval = setInterval(() => {
      if (currentPercentage >= targetPercentage) {
        clearInterval(interval);
      } else {
        currentPercentage++;
        percentageElement.textContent = `${currentPercentage}%`;
        border.style.width = `${currentPercentage}%`;
      }
    }, 20);
  });


  function updateTime() {
    const now = new Date();
    
    const utcTime = now.toISOString().split("T")[1].split(".")[0];

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[now.getUTCDay()]; // Get UTC day

    const monthsOfYear = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = monthsOfYear[now.getUTCMonth()]; 
    timeElement.textContent = utcTime;
    dayElement.textContent = currentDay;
    monthElement.textContent = currentMonth;
  }

  updateTime();
});
