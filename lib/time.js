const eachWeekOfInterval =  require('date-fns/eachWeekOfInterval')
const eachYearOfInterval = require('date-fns/eachYearOfInterval')
const isMonday = require('date-fns/isMonday')
const isSunday = require('date-fns/isSunday')
const lightFormat = require('date-fns/lightFormat')

const addDates = (date, days) => {
  let newDate = new Date(date)
  return new Date(newDate.setDate(newDate.getDate() + days))
}

const endOfThisWeek = (date) => {
  return addDates(date, 6)
}

const startOfNextWeek = (date) => {
  return addDates(date, 7)
}

const firstMondayOfYear = (year) => {
  const janFirst = new Date(year, 0, 1)
  let firstMonday = janFirst
  while (!isMonday(firstMonday)) {
    firstMonday = addDates(firstMonday, 1)
  }
  return firstMonday
}

const firstSundayOfYear = (year) => {
  const janFirst = new Date(year, 0, 1)
  let firstSunday = janFirst
  while (!isSunday(firstSunday)) {
    firstSunday = addDates(firstSunday, 1)
  }
  return firstSunday
}



const setLifePhase = (weekStartDate, weekEndDate) => {
  const today = new Date();
  if (today.getTime() > weekEndDate.getTime()) {
    return 'past'
  }
  if (today.getTime() < weekStartDate.getTime()) {
    return 'future'
  }
  return 'present'
}

const getYearWeeks = (year) => {
  const weeks = []

  const yearStart = new Date(year, 0, 1)
  const yearEnd = new Date(year, 11, 31)
  const firstMonday = firstMondayOfYear(year)
  const firstSunday = firstSundayOfYear(year)

  //
  // // ~ HANDLE FIRST WEEK
  //
  let currentWeekStart;
  let currentWeekEnd;
  if (firstMonday.getTime() === yearStart.getTime()) { // Jan 1 is a monday
    currentWeekStart = firstMonday
    currentWeekEnd = firstSunday
    obj = {
      weekStart: lightFormat(currentWeekStart, 'yyyy-MM-dd'),
      weekEnd: lightFormat(currentWeekEnd, 'yyyy-MM-dd'),
      lifePhase: setLifePhase(currentWeekStart, currentWeekEnd),
    }
    weeks.push(obj)
  } else { // Jan 1 is not a monday & therefor first Sunday of year comes before first Monday of year
    currentWeekStart = yearStart
    currentWeekEnd = firstSunday
    obj = {
      weekStart: lightFormat(currentWeekStart, 'yyyy-MM-dd'),
      weekEnd: lightFormat(currentWeekEnd, 'yyyy-MM-dd'),
      lifePhase: setLifePhase(currentWeekStart, currentWeekEnd),
    }
    weeks.push(obj)
  }

  currentWeekStart = addDates(currentWeekEnd, 1)
  currentWeekEnd = addDates(currentWeekStart, 6)
  //
  // // ~ HANDLE SUBSEQUENT WEEKS
  //
  while (currentWeekStart.getTime() <= yearEnd.getTime() && currentWeekEnd.getTime() <= yearEnd.getTime()) {
    obj = {
      weekStart: lightFormat(currentWeekStart, 'yyyy-MM-dd'),
      weekEnd: lightFormat(currentWeekEnd, 'yyyy-MM-dd'),
      lifePhase: setLifePhase(currentWeekStart, currentWeekEnd),
    }
    weeks.push(obj)
    currentWeekStart = addDates(currentWeekEnd, 1)
    currentWeekEnd = addDates(currentWeekStart, 6)
  }
  return weeks
}

const lifeWeeks = (bday, dday) => {
  const years = eachYearOfInterval({ start: bday, end: dday })
    .map(date => {
      let obj = {}
      const currentYear = date.getFullYear()
      obj.year = currentYear
      obj.weeks = getYearWeeks(currentYear)
      return obj
    })
  return years
}

module.exports = {
  lifeWeeks,
}
