import React from 'react';
import './Header.css';
import { Box, Container, Heading } from '@chakra-ui/react';

const Header = () => {
  return(
    <Box as='header' bg='whitesmoke'>
      <Container  maxW='4xl' >
        <Heading>
          Mini-Guia GitHub
        </Heading>
      </Container>
    </Box>
  )
}

export { Header }