import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header';
import { Fragment } from 'react';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={<h1>Login</h1>}/>
          <Route path='/checkout' element={
              <Fragment>
                  <Header/>
                  <h1>Checkout</h1>
              </Fragment>   
          }/>
          <Route path='/' element={
              <Fragment>
                  <Header/>
                  <Home/>
              </Fragment>
            }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
