import React, { useState } from 'react';
import './Main.css';
import { Text,Box, Button, Container, shouldForwardProp, chakra, Heading, Divider } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import pasosBasicos from '../../p-basicos.json';
import pasosHtmlCss from '../../p-html-css.json';
import pasosReact from '../../p-react.json';
import pasosVite from '../../p-vite.json';
import { Paso } from '../Paso/Paso';

import {motion} from 'framer-motion';

const MotionButton = ({tab,delay,handler,hide}) => {
  // estilo seleccionado: bg='gray.500' color='white'
  return(
    <Box w='full'>
      <motion.div 
          animate={{opacity:1}} 
          transition={{duration: 0.1,delay: delay}} 
          initial={{opacity:0}}>
        <motion.div 
          whileHover={{ scale: 0.9}}
          whileTap={{scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button w='100%' onClick={handler} isDisabled={hide} >{ tab }</Button>
        </motion.div>  
      </motion.div>
    </Box>
  )
}
const MotionPasos = ({arrPasos}) => {
  return (
      <motion.div
        animate={{opacity:1}} 
        transition={{duration:0.5}} 
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
    {handler: handleShowHtmlCss ,label: 'Deploy HTML+CSS+JS'}, 
    {handler: handleShowReact,label: 'Deploy React'},
    {handler: handleShowVite,label: 'Deploy Vite'}
  ];

  return(
    <Box bg='gray.600'>
      <Container maxW='4xl' py='1rem' >
        <Box display='grid' gridTemplateColumns={{base:'repeat(2,1fr)',md:'repeat(4,1fr)'}} gap={2} justifyContent='space-between'>
          {/* {tabs.map((tab,i) => <MotionButton key={i} tab={tab.label} delay={0.3+(i/5)} handler={tab.handler} show={showBasicos} />)} */}
          <MotionButton key={1} tab={'Pasos básicos'} delay={0.3+(0/5)} handler={handleShowBasicos} hide={showBasicos} />
          <MotionButton key={2} tab={'Deploy HTML+CSS+JS'} delay={0.3+(1/5)} handler={handleShowHtmlCss} hide={showHtmlCss} />
          <MotionButton key={3} tab={'Deploy React'} delay={0.3+(2/5)} handler={handleShowReact} hide={showReact} />
          <MotionButton key={4} tab={'Deploy Vite'} delay={0.3+(3/5)} handler={handleShowVite} hide={showVite} />
        </Box>
        {/* <Box display='grid' gridTemplateColumns={{base:'repeat(2,1fr)',md:'repeat(4,1fr)'}} gap={2} justifyContent='space-between'>
          {tabs.map((tab,i) => <MotionButton key={i} tab={tab.label} delay={0.3+(i/5)} handler={tab.handler} show={showBasicos} />)}
        </Box> */}
        <motion.div 
            animate={{opacity:1}} 
            transition={{duration: 0.1,delay: 0.3+(tabs.length/5)}} 
            initial={{opacity:0}}>
          {/* <Divider h='10px' /> */}
          {showBasicos && 
          <>
            {/* <Heading color='gray.300' textAlign='center'>{tabs[0].label}</Heading> */}
            <MotionPasos arrPasos={pasosBasicos} /> 
          </>}
          {showHtmlCss && 
          <>
            {/* <Heading color='gray.300' textAlign='center'>{tabs[1].label}</Heading> */}
            <MotionPasos arrPasos={pasosHtmlCss} /> 
          </>}
          {showReact && 
          <>
            {/* <Heading color='gray.300' textAlign='center'>{tabs[2].label}</Heading> */}
            <MotionPasos arrPasos={pasosReact} /> 
          </>}
          {showVite && 
          <>
            {/* <Heading color='gray.300' textAlign='center'>{tabs[3].label}</Heading> */}
            <MotionPasos arrPasos={pasosVite} /> 
          </>}
        </motion.div>

      </Container>
    </Box>
  )
}

export { Main }

