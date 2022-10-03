import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Apresentacao from './components/pages/Apresentacao';
import Espaco from './components/pages/Espaco';

function App(){
    return(
       <>
       <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/apresentacao' component={Apresentacao} />
                <Route path='/servicos' component={Services} />
                <Route path='/tecnicas' component={Products} />
                <Route path='/nosso-espaco' component={Espaco} />
            </Switch>
       </Router>
            
       </>
    )
}

export default App;
