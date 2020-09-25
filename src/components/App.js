import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './ui/Theme'

// local containers
import MarketingPage from "./containers/MarketingPage";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Homepage from "./containers/Homepage";
import SleepEntryPage from "./containers/SleepEntryPage";
import Recommendation from "./containers/Recommendation";
import NoData from "./containers/NoData";
import Header from "./ui/header";
import HoursSlept from "./HoursSlept";

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<MarketingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/new-entry" element={<SleepEntryPage/>}/>
          <Route path="/recommendation" element={<Recommendation/>}/>
          <Route path="/no-data" element={<NoData/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

