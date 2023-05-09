//BASE_URL

const base_url =
  "https://api.rawg.io/api/platforms?key=d4c0dfa26108407aafc4c88a61439d9f";

//Get Current Month
const getCurrentMonth = () => {
  const month = new Date().getMonth();
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Get Current Day
const getCurrentDay = () => {
  const Day = new Date().getDate();
  if (Day < 10) {
    return `0${Day}`;
  } else {
    return Day;
  }
};
//Get Current Monh/Date/Year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Get Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popular_games_url = () => `${base_url}${popular_games}`;
