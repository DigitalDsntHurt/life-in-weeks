// import datefns from 'date-fns'
// const datefns = require ('date-fns')
// import eachWeekOfInterval from 'date-fns/eachWeekOfInterval'
const eachWeekOfInterval =  require('date-fns/eachWeekOfInterval')
const eachYearOfInterval = require('date-fns/eachYearOfInterval')

// take in bday
// dake in dday

// return array of weeks
  // start date
  // end date
  // life phase

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

// const lifeWeeks = (bday, dday) => {
//   const years = eachYearOfInterval({
//     start: bday,
//     end: dday,
//   }).map(date => date.getFullYear())

//   const weeks = years.map(year => {
//     return eachWeekOfInterval({
//       start: new Date(year, 0, 1),
//       end: new Date(year, 11, 31),
//     },
//     {
//       weekStartsOn: 1,
//     })
//   })
//   console.log(weeks)

const lifeWeeks = (bday, dday) => {
  // console.log(bday)
  // console.log(dday)
  // const years = eachYearOfInterval({ start: bday, end: dday }).map(date => date.getFullYear())
  const years = eachYearOfInterval({ start: bday, end: dday })
    .map(date => {
      let obj = {}
      obj.year = date.getFullYear()
      obj.weeks = new Array(52).fill({startDate: 'week start date', endDate: 'week end date', lifePhase: 'life phase'})
      return obj
      // return [date, new Array(52).fill({startDate: 'week start date', endDate: 'week end date', lifePhase: 'life phase'})]
    })
  console.log(years)
  return years
}
    // const years = eachYearOfInterval({ start: bday, end: dday })
    //   .map(date => date.getFullYear())
    //   .map(year => {
    //     let emptyWeeks = Array(52).fill([]);
    //     return emptyWeeks.map((arr, i) => {
    //       return { year: year, weekNum: i }
    //     })
    //   }



        // new Array(52).fill([]).map((arr, i) => ({  })))
  // number 52 arrays in each year
  // return array
// }



  // console.log(bday)
  // console.log(dday)
  // const birthYearStart = new Date(bday.getFullYear(), 0, 1)
  // const deathYearEnd = new Date(dday.getFullYear(), 11, 31)
  // console.log(birthYearStart)
  // console.log(deathYearEnd)
  // console.log(datefns.getISOWeek(birthYearStart))
  // console.log(datefns.getISOWeek(deathYearEnd))

  // console.log(birthYearStart)
  // console.log(deathYearEnd)

  // console.log(nextWeek(birthYearStart))

  // let currentStartOfWeek = birthYearStart;
  // const weeks = [];
  // while (currentStartOfWeek < deathYearEnd) {
  //   weeks.push([currentStartOfWeek, endOfThisWeek(currentStartOfWeek)])
  //   currentStartOfWeek = startOfNextWeek(currentStartOfWeek);
  // }
  // console.log(weeks);
// }



module.exports = {
  lifeWeeks,
}
