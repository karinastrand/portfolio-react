import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './pages/About.js'
import Navigation from './components/Navigation.js'
import routes from './routes.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Navigation />
      <div className='container mt-4'>
        <Routes>
          {routes.map((route,index)=>(
            <Route key={index} path={route.path} element={route.component}/>
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
