import React, { useState } from 'react';
import './Main.css';
import { Text,Box, Button, Container, shouldForwardProp, chakra } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import pasosBasicos from '../../p-basicos.json';
import pasosHtmlCss from '../../p-html-css.json';
import pasosReact from '../../p-react.json';
import pasosVite from '../../p-vite.json';
import { Paso } from '../Paso/Paso';

import {isValidMotionProp, motion} from 'framer-motion';

const MotionButton = ({tab,delay,handler}) => {
  
  return(
    <Box w='full'>
      <motion.div 
          animate={{opacity:1}} 
          transition={{duration: 0.1,delay: delay}} 
          initial={{opacity:0}}>
        <motion.div 
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button w='100%' onClick={handler}>{ tab }</Button>
        </motion.div>  
      </motion.div>
    </Box>
  )
}
const MotionPasos = ({arrPasos}) => {
  return (
    <motion.div
      animate={{opacity:1}} 
      transition={{duration:1}} 
      initial={{ opacity:0 }}
    >
      {arrPasos.map(paso => <Paso key={paso.id} paso={paso}/>)}
    </motion.div>
  )
}
const Main = () => {
  
  const [showBasicos,setShowBasicos] = useState(true);
  const [showHtmlCss,setShowHtmlCss] = useState(false);
  const [showReact,setShowReact] = useState(false);
  const [showVite,setShowVite] = useState(false);

  const handleShowBasicos = () => {
    setShowBasicos(true);
    setShowHtmlCss(false);
    setShowReact(false);
    setShowVite(false);
  }
  
  const handleShowHtmlCss = () => {
    setShowBasicos(false);
    setShowHtmlCss(true);
    setShowReact(false);
    setShowVite(false);
  }
  const handleShowReact = () => {
    setShowBasicos(false);
    setShowHtmlCss(false);
    setShowReact(true);
    setShowVite(false);
  }
  const handleShowVite = () => {
    setShowBasicos(false);
    setShowHtmlCss(false);
    setShowReact(false);
    setShowVite(true);
  }

  // const tabs = ['Pasos básicos','HTML + CSS', 'React','Vite']
  const tabs = [
    {handler: handleShowBasicos ,label: 'Pasos básicos'},
    {handler: handleShowHtmlCss ,label: 'HTML + CSS'}, 
    {handler: handleShowReact,label: 'React'},
    {handler: handleShowVite,label: 'Vite'}
  ];

  return(
    <Box bg='gray.600'>
      <Container maxW='4xl' py='1rem' >

        <Box display='grid' gridTemplateColumns={{base:'repeat(2,1fr)',md:'repeat(4,1fr)'}} gap={2} justifyContent='space-between'>
          {tabs.map((tab,i) => <MotionButton key={i} tab={tab.label} delay={0.3+(i/5)} handler={tab.handler}/>)}
        </Box>

        <motion.div 
            animate={{opacity:1}} 
            transition={{duration: 0.1,delay: 0.3+(tabs.length/5)}} 
            initial={{opacity:0}}>
          {showBasicos && <MotionPasos arrPasos={pasosBasicos} /> }
          {showHtmlCss && <MotionPasos arrPasos={pasosHtmlCss} /> }
          {showReact && <MotionPasos arrPasos={pasosReact} /> }
          {showVite && <MotionPasos arrPasos={pasosVite} /> }
        </motion.div>

      </Container>
    </Box>
  )
}

export { Main }

