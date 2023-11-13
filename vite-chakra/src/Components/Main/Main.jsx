import React from 'react';
import './Main.css';
import { Text,Box, Container, shouldForwardProp, chakra } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import pasosBasicos from '../../p-basicos.json';
import pasosHtmlCss from '../../p-html-css.json';
import pasosReact from '../../p-react.json';
import pasosVite from '../../p-vite.json';
import { Paso } from '../Paso/Paso';

import {isValidMotionProp, motion} from 'framer-motion';

const MotionTab = ({tab,delay}) => {
  
  return(
    <Motion w='full' animate={{opacity:1}} transition={{duration: 1,delay: delay}} opacity={0}>
      <Tab w='full' bg='white' _selected={{ color: 'white', bg: 'blue.600' }}>{tab}</Tab>
    </Motion>
  )
}

const Motion = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
})

const Main = () => {
  
  const tabs = ['Pasos básicos','HTML + CSS', 'React','Vite']

  return(
    <Box bg='gray.600'>
      <Container maxW='4xl' py='1rem' >
      <Tabs isFitted colorScheme='blue' position="relative" variant='soft-rounded'>
        <TabList>
          {tabs.map((tab,i) => <MotionTab key={i} tab={tab} delay={0.3+(i/5)} />)}
        </TabList>
        <Motion animate={{opacity:1}} transition={{duration: 1,delay: 0.3+(tabs.length/5)}} opacity={0}>
          <TabPanels>
            <TabPanel p='0'>
            {pasosBasicos.map(paso => <Paso key={paso.id} paso={paso}/>) }
              </TabPanel>
              <TabPanel p='0'>
              {pasosHtmlCss.map(paso => <Paso key={paso.id} paso={paso}/>) }
              </TabPanel>
              <TabPanel p='0'>
              {pasosReact.map(paso => <Paso key={paso.id} paso={paso}/>) }
              </TabPanel>
              <TabPanel p='0'>
              {pasosVite.map(paso => <Paso key={paso.id} paso={paso}/>) }
              </TabPanel>
            </TabPanels>
          </Motion>
      </Tabs>


        
      </Container>
    </Box>
  )
}

export { Main }

