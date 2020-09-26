import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
import PrivateRoute from "../utils/PrivateRoute";

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
          <Route path="/">
            <MarketingPage/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <PrivateRoute path="/home"
                        component={Homepage}/>
          <PrivateRoute path="/new-entry"
                        component={SleepEntryPage}/>
          <PrivateRoute path={"/recommendation"}
                        component={Recommendation}/>
          <PrivateRoute path={"/no-data"}
                        component={NoData}/>
      </Router>
    </ThemeProvider>
  );
}

export default App;

