interface Schedule {
  sunday: boolean;
  date: Date;
  today?: boolean;
  cancelled?: boolean;
}

const checkIfPassed = (date: Date) => {
  const today = new Date();
  return today > date;
}


const checkIfToday = (date: Date) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year  = today.getFullYear();

  const compareDay = date.getDate();
  const compareMonth = date.getMonth();
  const compareYear = date.getFullYear();

  return day === compareDay && month === compareMonth && year === compareYear;
}
// self updating schedule for now. Will figure out how to update this via google sheet or something later
const schedule: Schedule[] = [
  {
    sunday: false,
    date: new Date(2023, 5, 14, 18)
  },
  {
    sunday: true,
    date: new Date(2023, 5, 18, 17),
    cancelled: true,
  },{
    sunday: false,
    date: new Date(2023, 5, 21, 18)
  },
  {
    sunday: true,
    date: new Date(2023, 5, 25, 17),
    cancelled: true
  },
  {
    sunday: false,
    date: new Date(2023, 5, 28, 18)
  },
  {
    sunday: false,
    date: new Date(2023, 6, 5, 17)
  },
  {
    sunday: true,
    date: new Date(2023, 6, 9, 17)
  },
  {
    sunday: false,
    date: new Date(2023, 6, 12, 18)
  },{
    sunday: true,
    date: new Date(2023, 6, 16, 17)
  },
  {
    sunday: false,
    date: new Date(2023, 6, 19, 18)
  },{
    sunday: true,
    date: new Date(2023, 6, 23, 17)
  },
  {
    sunday: true,
    date: new Date(2023, 6, 30, 17)
  },
].filter(date => !checkIfPassed(date.date)).map(date => {
  return {sunday: date.sunday,
  date: date.date,
  today: checkIfToday(date.date),
  cancelled: date.cancelled
}
});
// no 2nd or 25th of july


export { schedule, checkIfToday, checkIfPassed };