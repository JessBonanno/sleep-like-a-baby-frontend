import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
  ComposedChart, Bar,
} from 'recharts';
import {SleepLogsContext} from "../contexts/SleepLogsContext";

const chartData = [
  {
    day: 'Sun', hours: 6, quality: 2
  },
  {day: 'Mon', hours: 7.5, quality: 4},
  {day: 'Tues', hours: 7, quality: 3},
  {day: 'Weds', hours: 8.5, quality: 3},
  {day: 'Thurs', hours: 6, quality: 2},
  {day: 'Fri', hours: 7.5, quality: 4},
  {day: 'Sat', hours: 8, quality: 3},
];



const useStyles = makeStyles((theme) => ({
  chart: {
    color: 'white',
    backgroundColor: theme.palette.common.mineShaft7p,
  },
}));


const HoursSleptChart = () => {
  const classes = useStyles();
  const {daysOfWeek} = useContext(SleepLogsContext)

  console.log(daysOfWeek)
  return (
    <ComposedChart
      className={classes.chart}
        width={500}
        height={400}
        data={daysOfWeek && daysOfWeek}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey={daysOfWeek && "day"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={daysOfWeek && "total_hours_slept"} barSize={20} fill="#39869D" />
        <Line type="monotone" dataKey={daysOfWeek && "average_quality"} stroke="#ff7300" />
      </ComposedChart>
  );
}
export default HoursSleptChart;
