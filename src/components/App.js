import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './ui/Theme'

// local containers
import MarketingPage from "./containers/MarketingPage";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Dashboard from "./containers/Dashboard";
import Entry from "./containers/Entry";
import Recommendation from "./containers/Recommendation";
import NoData from "./containers/NoData";
import Header from "./ui/header";
import HoursSleptChart from "./HoursSleptChart";
import {UsersContext} from "../contexts/UsersContext";
import {LabelOff} from "@material-ui/icons";
import PrivateRoute from "../utils/PrivateRoute";
import {useTheme} from "@material-ui/styles";
import {useMediaQuery} from "@material-ui/core";
import BottomNav from "./ui/BottomNav";
function App() {
  const theme = useTheme()
  const mobileSm = useMediaQuery(theme.breakpoints.down('xs'));
  return (

      <Router>
        <Header/>
          <Route exact path="/">
            <MarketingPage/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <PrivateRoute path="/dashboard"
                        component={Dashboard}/>
          <PrivateRoute path="/create-entry"
                        component={Entry}/>
          <PrivateRoute path={"/recommendation"}
                        component={Recommendation}/>
          <PrivateRoute path={"/no-data"}
                        component={NoData}/>
        {mobileSm &&  <BottomNav/>}

      </Router>
  );
}

export default App;

