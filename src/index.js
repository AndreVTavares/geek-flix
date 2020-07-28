import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import CadastroVideo from "./pages/CadastroVideo";
import CadastroCategoria from "./pages/CadastroCategoria";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/cadastro/video" exact component={CadastroVideo} />
        <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
        <Route path="/" exact component={Home} />
        <Route component={() => <div> Pagina 404 </div>} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
