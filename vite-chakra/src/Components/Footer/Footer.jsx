import React from 'react';
import './Footer.css';
import { Box, Container } from '@chakra-ui/react';

const Footer = () => {
  return(
    <Box as='footer' bg='whitesmoke'>
      <Container maxW='4xl' >
        Pablo Rito
      </Container>
    </Box>
  )
}

export { Footer }