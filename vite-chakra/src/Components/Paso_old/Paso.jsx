import React from 'react';
import './Paso.css';
import {Image,Stack,Text,Heading, Card, CardBody, Box } from '@chakra-ui/react'

const Paso = ({paso}) => {
  return(
    <Card my='.5rem'>
      <CardBody>
        {paso.img ? <Image mx='auto' src={paso.img} alt='paso ' borderRadius='lg'/> : ''}
        <Stack mt='6' spacing='3'>
        <Text as='b'>{paso.id}</Text>
          <Text dangerouslySetInnerHTML={{ __html: paso.detalle }} />
        </Stack>
      </CardBody>
    
    </Card>
  )
}

export { Paso }