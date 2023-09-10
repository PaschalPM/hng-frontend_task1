const elemByID = (id) => document.getElementById(id);
const DAYS_OF_THE_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const injectCurrentDayOfTheWeek = () => {
    const currentDayOfTheWeekElem = elemByID("currentDayOfTheWeek");
    const dayOfWeekIdx = new Date().getDay();
    currentDayOfTheWeekElem.innerText = DAYS_OF_THE_WEEK[dayOfWeekIdx];
};

const injectCurrentUTCTime = (id) => {
    const currentUTCTimeElem = elemByID("currentUTCTime");
    const utcTime = Date.now();
    currentUTCTimeElem.innerText = utcTime;
};

