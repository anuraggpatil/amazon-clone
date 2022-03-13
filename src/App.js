import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import {auth} from './firebase';
import {useStateValue} from './StateProvider'
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=> {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => { 
      console.log('The user is >> ', authUser);

      if(authUser){
        // The user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (

    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              <Header />
              <Home />
            </div>

          } />
          <Route path='/checkout' element={
            <div>
              <Header />
              <Checkout />
            </div>
          } />
          <Route path='/login' element={ <Login/> }/>
        </Routes>

      </Router>

    </div>
  );

}

export default App;
