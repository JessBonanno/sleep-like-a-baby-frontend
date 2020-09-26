import React, {createContext, useState, Context} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import moment from "moment";

export const SleepLogsContext = createContext({});

const SleepLogsProvider = ({children}) => {
  const [activeDayLog, setActiveDayLog] = useState({});
  const [daysOfWeek, setDaysOfWeek] = useState([])
  const [entryValues, setEntryValues] = useState({
    bedtime: '',
    wake_time: '',
    bedtime_score: '',
    wake_score: '',
    day_score: '',
  })



  const getDaysOfTheWeek = async (date) => {
    try {
          const res = await axiosWithAuth().get(`/week/days/?date=${date}`)
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
  const startNewLog = async () => {
    try {
      const res = await axiosWithAuth().post('/day/current-user')
      console.log(res)
      setActiveDayLog(res.data)
    } catch {

    }
  }

  return (
    <SleepLogsContext.Provider value={{
      activeDayLog,
      setActiveDayLog,
      daysOfWeek,
      setDaysOfWeek,
      entryValues,
      setEntryValues,
      getDaysOfTheWeek,
      startNewLog,
    }}>
      {children}
    </SleepLogsContext.Provider>
  )
}

export default SleepLogsProvider;
