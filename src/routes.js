import React from 'react';
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';

const routes=[
    {path:'/', component:<Home />,exact:true},
  
    {path: '/works', component: <Works/>},
    {path: '/contact', component: <Contact/>},
    {path: '*', component: <Home/>}

]
export default routes;