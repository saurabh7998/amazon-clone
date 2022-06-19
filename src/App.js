import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header';
import { Fragment } from 'react';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={
            <Login />
          }/>
          <Route path='/checkout' element={
              <Fragment>
                  <Header/>
                  <Checkout/>
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
