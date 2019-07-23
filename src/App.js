import React from 'react';
import './App.css';
import Navbar from './nav';
import About from './about';
import Shop from './shop';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import itemDetails from './itemDetails'


function App() {
  return (
    <Router>
   
    <div className="App">
      
         <Navbar/>
          <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={itemDetails}/>
      </Switch>
  
    </div>
      
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Home</h1>
  </div>
);

export default App;


   /*
 
   1) whatever inside Router will get ability to Routing
   2) need to imports BrowserRouter(Router),Switch,Route
   3) Route renders the component based on url
   4) switchs will identify component based on the path and render only that component
   5) Exact will ensure the route is working exactly based on the path 
 */