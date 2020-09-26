import React, {useContext} from 'react';
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
import HoursSleptChart from "./HoursSleptChart";
import {UsersContext} from "../contexts/UsersContext";
import {LabelOff} from "@material-ui/icons";

function App() {
  const {loggedIn} = useContext(UsersContext)
  return (

    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MarketingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path={loggedIn ? "/home" : '/login'}
                 element={loggedIn ? (<Homepage/>) : (<Login/>)}/>
          <Route path={loggedIn ? "/new-entry" : '/login'}
                 element={loggedIn ? (<Login/>) : <SleepEntryPage/>}/>
          <Route path={loggedIn ? "/recommendation" : 'login'}
                 element={loggedIn ? (<Recommendation/>) : (<Login/>)}/>
          <Route path={loggedIn ?  "/no-data" : '/login'}
                 element={loggedIn ? (<NoData/>) : (<Login/>)}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

