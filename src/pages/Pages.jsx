import React from 'react'
import {Routes,Route, useLocation} from "react-router-dom";
import Querys from '../pages/Querys';
import Home from './Home';
import Recipes from './Recipes';
import Searched from './Searched';
import { AnimatePresence } from 'framer-motion';
export default function Pages() {

  const location = useLocation()
  return (
    <AnimatePresence wait>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/query/:type" element={<Querys />}/>
        <Route path="/recipe/:name" element={<Recipes />}/>
        <Route path="/searched/:search" element={<Searched />}/>
    </Routes>
    </AnimatePresence>
  )
}
