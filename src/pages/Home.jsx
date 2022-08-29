import React from 'react'
import Latest from '../components/Latest';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import {motion} from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const resultRef=useRef(null)
  return (
    <motion.div //Added animations with framer motions
    animate={{opacity:1}}
    initial={{opacity:0}}
    transition={{duration:0.5}}
    exit={{opacity:0}}
    >
        <Hero resultRef={resultRef}/> 
       <Category ref={resultRef} />
      <Newsletter />
      <Latest />
      <Footer />
    </motion.div>
  )
}
