//Creating a const variable that defines all of the months in the year
const Allmonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//Creating a const variable that defines all of the days in the week and putting it into a array
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//Getting the current Time
const currentDate = new Date();

// Create a table element that will hold the hole calendar
const table = document.createElement("table");

// Create a header row with the month and year
const headerRow = document.createElement("tr");
const headerCell = document.createElement("th");
headerCell.colSpan = 7;
headerCell.textContent = `${Allmonths[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
headerRow.appendChild(headerCell);
table.appendChild(headerRow);

// Create a row for the days of the week
const daysOfWeekRow = document.createElement("tr");
for (let day of daysOfWeek) {
  const dayCell = document.createElement("td");
  dayCell.textContent = day;
  daysOfWeekRow.appendChild(dayCell);
}
table.appendChild(daysOfWeekRow);

// Calculating the number of days in the current month
const numDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

// Calculating the day of the week that the first day of the month falls on
const firstDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();


document.getElementById("calendar").appendChild(table);
