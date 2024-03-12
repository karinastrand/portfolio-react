import React from 'react';
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';

const routes=[
    {path:'/', component:<Home />,exact:true},
    {path: '/about', component: <About/>},
    {path: '/works', component: <Works/>},
    {path: '/contact', component: <Contact/>}

]
export default routes;