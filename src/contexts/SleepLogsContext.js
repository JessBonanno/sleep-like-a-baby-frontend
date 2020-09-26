import React, {createContext, useState, Context} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import moment from "moment";

export const SleepLogsContext = createContext({});

const SleepLogsProvider = ({children}) => {
  const [currentDayLog, setCurrentDayLog] = useState({});
  const [currentWeekLog, setCurrentWeekLog] = useState({});
  const [currentMonthLog, setCurrentMonthLog] = useState({});
  const [daysOfWeek, setDaysOfWeek] = useState([])
  const [chartData, setChartData] = useState([
    {
      day: 'Sun',
      hours: 6,
      quality: 2
    },
    {
      day: 'Mon',
      hours: 7.5,
      quality: 4
    },
    {
      day: 'Tues',
      hours: 7,
      quality: 3
    },
    {
      day: 'Weds',
      hours: 8.5,
      quality: 3
    },
    {
      day: 'Thurs',
      hours: 6,
      quality: 2
    },
    {
      day: 'Fri',
      hours: 7.5,
      quality: 4
    },
    {
      day: 'Sat',
      hours: 8,
      quality: 3
    },
  ]);


  const getDaysOfThisWeek = async () => {
    try {
          const res = await axiosWithAuth().get(`/week/days/?date=${moment().format('MM-DD-YYYY')}`)
    console.log(res)
    setDaysOfWeek(res.data.map(day => {
      return {
        // setting the date to day of the week for chart
        ...day,
        day: moment(day.date).format('dddd'),
        date: moment(day.date).format('MM-DD-YY')
      }
    }))
    } catch(err) {
      console.log(err)
    }
  }

  console.log(daysOfWeek[0])
  return (
    <SleepLogsContext.Provider value={{
      chartData,
      currentDayLog,
      setCurrentDayLog,
      currentWeekLog,
      setCurrentWeekLog,
      currentMonthLog,
      setCurrentMonthLog,
      daysOfWeek,
      setDaysOfWeek,
      getDaysOfThisWeek,
    }}>
      {children}
    </SleepLogsContext.Provider>
  )
}

export default SleepLogsProvider;

