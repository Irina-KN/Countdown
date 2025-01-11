function Timer() {
  // new Date(year, month, date, hours, minutes, seconds, ms)
  let dateExpected = new Date(2025, 0, 1, 0, 0, 0, 0);
  function dayTitle(number, word) {
    let arrayWord = [];
    if (word === "день") {
      arrayWord = [" дней", " день", " дня", " дней"];
    }
    if (word === "месяц") {
      arrayWord = [" месяцев", " месяц", " месяца", " месяцев"];
    }
    if (number > 10 && [11, 12, 13, 14].includes(number % 100))
      return arrayWord[0];
    const lastNum = number % 10;
    if (lastNum === 1) return arrayWord[1];
    if ([2, 3, 4].includes(lastNum)) return arrayWord[2];
    if ([5, 6, 7, 8, 9, 0].includes(lastNum)) return arrayWord[3];
    return arrayWord[0];
  }
  const getInfoAboutDate = {
    year: () => {
      let currentNewYear = dateExpected.getFullYear();
      if (currentNewYear === new Date().getFullYear()) {
        currentNewYear += 1;
        dateExpected = new Date(currentNewYear, 0, 1, 0, 0, 0, 0);
      }
      return dateExpected.getFullYear();
    },
    month: () => {
      getInfoAboutDate.year();
      let differenceInMonth = dateExpected.getMonth() - new Date().getMonth();
      if (
        dateExpected.getFullYear() > new Date().getFullYear() &&
        differenceInMonth <= 0
      ) {
        differenceInMonth = 11 - new Date().getMonth();
      }

      return differenceInMonth;
    },
    days: () => {
      const numberOfDayInMonth = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
      ];
      const differenceInDays =
        numberOfDayInMonth[new Date().getMonth()] - new Date().getDate();

      return differenceInDays;
    },
    hours: () => {
      const differenceInHours = 23 - new Date().getHours();
      return differenceInHours;
    },
    minutes: () => {
      const differenceInMinutes = 59 - new Date().getMinutes();
      return differenceInMinutes;
    },
    seconds: () => {
      const differenceInSeconds = 59 - new Date().getSeconds();
      return differenceInSeconds;
    },
  };

  function update() {
    const month = `${getInfoAboutDate.month()} ${dayTitle(
      getInfoAboutDate.month(),
      "месяц"
    )} `;
    document.querySelector("#nowMonth").innerHTML = month;

    const days = `${getInfoAboutDate.days()} ${dayTitle(
      getInfoAboutDate.days(),
      "день"
    )} `;
    document.querySelector("#nowDays").innerHTML = days;

    let hours = getInfoAboutDate.hours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = getInfoAboutDate.minutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let seconds = getInfoAboutDate.seconds();
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    document.querySelector("#nowHours").innerHTML = `${hours}:
      ${minutes}:
      ${seconds}`;
  }
  setInterval(() => update(), 1000);
}
Timer();

let countClickTree = 1;
document
  .querySelector(".containerImageTree img")
  .addEventListener("click", () => {
    countClickTree += 1;
    if (countClickTree % 2 === 0) {
      document.querySelector("#claus").style.opacity = 1;
      document.querySelector("#claus").style.left = "2000px";
    } else {
      document.querySelector("#claus").style.opacity = 1;
      document.querySelector("#claus").style.opacity = 1;
      document.querySelector("#claus").style.left = "-2000px";
    }
  });
document
  .querySelector("#presents1EasterChicken")
  .addEventListener("click", () => {
    document.querySelector("#presents1EasterChicken").style.zIndex = 0;
    document.querySelector("#presents1EasterChicken").style.left = "5px";
  });
document.querySelector("#presents1").addEventListener("click", () => {
  document.querySelector("#presents1EasterChicken").style.opacity = 1;
  document.querySelector("#presents1EasterChicken").style.zIndex = 10;
  document.querySelector("#presents1EasterChicken").style.left = "300px";
});
let countClickPresent = 0;
function easterGift2() {
  const getInfoLocationElement = {
    present() {
      return document.querySelector("#presents2");
    },
    widthDocument() {
      return document.documentElement.clientWidth;
    },
    heightDocument() {
      return document.documentElement.clientHeight;
    },
    topY() {
      return this.present().getBoundingClientRect().top;
    },
    bottomY() {
      return this.present().getBoundingClientRect().bottom;
    },
    maxBottomY() {
      return this.heightDocument() - this.bottomY() - 100;
    },
    maxTopX() {
      return this.widthDocument() - this.topY() - 100;
    },
  };
  countClickPresent += 1;
  let randomX = Math.trunc(Math.random() * 250);
  let randomY = Math.trunc(Math.random() * 250);
  if (countClickPresent % 2 === 0) {
    randomX = -randomX;
    randomY = -randomY;
  }
  if (!getInfoLocationElement.maxBottomY()) {
    randomY = 0;
  }
  if (!getInfoLocationElement.maxTopX()) {
    randomX = 0;
  }
  if (countClickPresent === 25) {
    countClickPresent = 0;
    randomY = 0;
    randomX = 0;
  }
  getInfoLocationElement.present().style.transform = `translate(${randomX}px, ${randomY}px)`;
}
document.querySelector("#presents2").addEventListener("click", () => {
  easterGift2();
});
document
  .querySelector("#presents3EasterRabbit")
  .addEventListener("click", () => {
    document.querySelector("#presents3EasterRabbit").style.transform =
      "translateX(500px)";
    document.querySelector("#presents3EasterRabbit").style.opacity = 0;
    document.querySelector("#presents3EasterRabbit").style.visibility =
      "hidden";
  });
document.querySelector("#presents3").addEventListener("click", () => {
  document.querySelector("#presents3").style.visibility = "hidden";
  document.querySelector("#presents3").style.opacity = 0;
});
