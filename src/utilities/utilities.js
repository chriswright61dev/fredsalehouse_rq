export function DateFormat(dateTimeString) {
  // fix data from the api which is a specific string
  const datesarray = dateTimeString.split(" ");
  // console.log("datesarray", datesarray);
  const DateTimeObject = {};
  DateTimeObject.dayofweek = datesarray[0].slice(0, -1);
  DateTimeObject.day = datesarray[2].slice(0, -1);
  DateTimeObject.month = datesarray[1];
  DateTimeObject.year = datesarray[3];
  DateTimeObject.hour24 = datesarray[5].slice(0, 2);
  DateTimeObject.mins = datesarray[5].slice(3, 5);
  // fix some formatting
  DateTimeObject.hour = formatHour(DateTimeObject.hour24);
  DateTimeObject.mins = formatMinutes(DateTimeObject.mins);
  DateTimeObject.ampm = formatAmPm(DateTimeObject.hour24);
  DateTimeObject.daysuffix = dateSuffix(DateTimeObject.day);
  return DateTimeObject;
}

function formatHour(hourString) {
  let hour = parseInt(hourString);
  if (hour <= 12) {
    return hour.toString();
  } else return (hour - 12).toString();
}

function formatMinutes(minutesString) {
  // don't want :00pm
  return minutesString === "00" ? "" : ":" + minutesString;
}

function formatAmPm(hourString) {
  let hour = parseInt(hourString);
  if (hour < 12) {
    return "am";
  } else {
    return "pm";
  }
}

function dateSuffix(numberText) {
  let numberAndSuffixText = numberText;
  if (numberText === "1") {
    numberAndSuffixText = "1st";
  } else if (numberText === "2") {
    numberAndSuffixText = "2nd";
  } else if (numberText === "3") {
    numberAndSuffixText = "3rd";
  } else if (numberText === "21") {
    numberAndSuffixText = "21st";
  } else if (numberText === "22") {
    numberAndSuffixText = "22nd";
  } else if (numberText === "23") {
    numberAndSuffixText = "23rd";
  } else {
    numberAndSuffixText += "th";
  }

  return numberAndSuffixText;
}

function dayOfWeekName(number) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[number];
}

function monthName(number) {
  const months = [
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
  return months[number];
}

export function hasDatePassed(date) {
  let HasEventPassed = false;
  const now = new Date();
  if (Date.parse(now) > Date.parse(date)) {
    HasEventPassed = true;
  }
  return HasEventPassed;
}
