import React from "react";
import { BrowserRouter , Router, Switch, Route } from "react-router-dom";
import RecipeList from "./containers/recipelist/Reciplist"
import Admin from "./containers/admin/Admin";
import './App.css';
import Style from "./Style.css"
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RecipeList} />
        <Route path="/admin" exact component={Admin} />
      </Switch>
    </BrowserRouter>
  );
  };
export default App;