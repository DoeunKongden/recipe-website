import React from 'react'
import Popular from '../components/Popular'
import Viggies from '../components/Viggies'
import {motion} from 'framer-motion'

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Viggies />
      <Popular />
    </motion.div>

  )
}

export default Home