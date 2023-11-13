import React from 'react';
import './Main.css';
import { Box, Container } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import pasosBasicos from '../../p-basicos.json';
import pasosHtmlCss from '../../p-html-css.json';
import pasosReact from '../../p-react.json';
import pasosVite from '../../p-vite.json';
import { Paso } from '../Paso/Paso';

const Main = () => {
  
  return(
    <Box bg='gray.600'>
      <Container maxW='4xl' py='1rem' >
      <Tabs isFitted colorScheme='blue' position="relative" variant='soft-rounded'>
        <TabList>
          <Tab bg='white' _selected={{ color: 'white', bg: 'blue.600' }}>Pasos básicos</Tab>
          <Tab bg='white' _selected={{ color: 'white', bg: 'blue.600' }}>HTML + CSS</Tab>
          <Tab bg='white' _selected={{ color: 'white', bg: 'blue.600' }}>React</Tab>
          <Tab bg='white' _selected={{ color: 'white', bg: 'blue.600' }}>Vite</Tab>
        </TabList>

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
      </Tabs>


        
      </Container>
    </Box>
  )
}

export { Main }