import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from 'react-redux'
import Store from './redux/Store'
import {
  Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider store={Store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import  OOne from './OOne';
// import Ttwo from './Ttwo';
// import Tthree from './Tthree';
// import Four from './Four';

// import {createMemoryHistory} from 'history'


// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Routing() {
//   const history = createMemoryHistory()
//   return (
//   <Router location={history.location}> 
//      <Routes>
//       <Route path="/" element={<App />}/>
//       <Route path="OOne" element={<OOne />} />
//       <Route path="Ttwo" element={<Ttwo />}/>
//       <Route path="Tthree" element={<Tthree />} />
//       <Route path="Four" element={<Four />} />
//     </Routes>
//   </Router>
// )  
//   }

// ReactDOM.render(
// <React.StrictMode><Routing /></React.StrictMode>
// , document.getElementById('root'));  




