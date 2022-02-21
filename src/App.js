import {React, Fragment} from "react";

//Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/*** Layout */
import Header from "./componentes/layout/Header";
import Navegacion from "./componentes/layout/Navegacion";

/*** Componentes */
// import

function App() {
  return (
    <Router>

      <Fragment>

        <Header/>

        <div className="grid contenedor contenido-principal">
          <Navegacion />

          <main class="caja-contenido col-9">
            <Switch>
              <Route exact path="/" component={Clientes}/>
            </Switch>
          </main>
        </div>
      </Fragment>
    </Router>
  )
}

export default App;
