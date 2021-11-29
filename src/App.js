import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "./components/List";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Teams from "./pages/Teams";
import Login from "./pages/Login";
import PressureMain from "./pages/PressureMain";
import Graphic from "./components/Graphic";
import PressureState from "./context/Pressure/PressureState";
import Video from "./components/Video";
import Videos from "./pages/Videos";
import TasksMain from "./pages/TasksMain";
import Signup from "./pages/Signup";
import TaskState from "./context/Task/TaskState";
import NewPassword from "./pages/NewPassword";
import RecoveryPassword from "./pages/RecoveryPassword";
import EmailSent from "./pages/EmailSent";


const App = () => {
  return (
    
    <BrowserRouter>
      <Layout>
        <Switch>
          <PressureState>
          <TaskState>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={List} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/pressure" component={PressureMain} />
          <Route exact path="/pressure-data" component={Graphic} />
          <Route exact path="/video/:id" component={Video} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tasks" component={TasksMain} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route exact path="/email-sent" component={EmailSent} />
          <Route exact path="/change-password" component={NewPassword} />
          </TaskState>
          </PressureState>
        </Switch>
      </Layout>
    </BrowserRouter>
    
  );
};

export default App;
