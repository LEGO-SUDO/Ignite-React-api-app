//BASE_URL

const base_url =
  "http://api.rawg.io/api/games?key=57a33d9e80064cd9b62ebfca780fd7bd";

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
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popular_games_url = `${base_url}${popular_games}`;
