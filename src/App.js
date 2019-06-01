import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./layout/nav/Nav";
import Home from "./component/lobby/Home";
import UserList from "./component/user/UserList";
import BookList from "./component/book/BookList";
import Login from "./component/security/Login";
import "materialize-css/dist/css/materialize.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/user" component={UserList} />
          <Route path="/book" component={BookList} />
        </Switch>
      </div>
    );
  }
}

export default App;
