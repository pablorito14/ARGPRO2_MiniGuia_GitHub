import React from 'react';
import './Header.css';
import { Box, Link, Container, Heading } from '@chakra-ui/react';
import { FaGithub } from "react-icons/fa6";

import {motion} from 'framer-motion';


const Header = () => {
  return(
    <Box as='header' bg='whitesmoke'>
      <Container  maxW='4xl' display='flex' justifyContent='space-between' alignItems='center' >
        <Heading>
          Mini-Guia GitHub
        </Heading>
        <Heading>
        <motion.div 
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >

          <Link href='https://github.com/pablorito14/ARGPRO2_MiniGuia_GitHub/tree/main-vite/vite-chakra' isExternal>
            <FaGithub />
          </Link>
        </motion.div>
        </Heading>

      </Container>
    </Box>
  )
}

export { Header }