import React from 'react'
import Home from './Home'
import { Link, Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Search from './Search'
import Recipes from './Recipes'
import {motion} from 'framer-motion'


function Pages() {
  return (

    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/recipes/:name" element={<Recipes />} />
      </Routes>
    </motion.div>
  )
}



export default Pages