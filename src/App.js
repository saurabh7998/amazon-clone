import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header';
import { Fragment, useEffect } from 'react';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
// import { useStateValue } from './StateProvider';
import SignUp from './SignUp';
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "./reducers/cartReducer";

function App() {

  // const[ , dispatch] = useStateValue();
    const {cart, user} = useSelector((state) => state.cart)
    const dispatch = useDispatch()

   useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged((authUser) => {
       if (authUser) {
         //user is logged in.
         dispatch(setUser(authUser))
       } else {
         //user is logged out.
         dispatch(setUser(null))
       }
     });

     return () => {
        //Cleanup function - detaches unsubscribe and re-attaches on re-render.
        unsubscribe();
     };
   }, []);

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
          <Route path='/register' element={
              <SignUp/>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
