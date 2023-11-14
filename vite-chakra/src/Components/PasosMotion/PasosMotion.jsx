import {Button,Box} from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Renderizar = ({color}) => {

  return (
    <>
      <motion.div 
          // animate={{opacity:1}} 
          transition={{duration:2}} 
          // initial={{ opacity:0 }}
          animate={{x: '100%'}}
          initial={{x: '-100%'}}
          
          >
        <Box bg={color} w='200px' h='200px' mb={2} />
      </motion.div>

    </>
    
  )
}

const PasosMotion = () => {
  const [showSquare,setShowSquare] = useState(false)
  const [showCircle,setShowCircle] = useState(false)
  const [showTriangle,setShowTriangle] = useState(false)
  // const [color,setColor] = useState('black');
  
  const handleShowSquare = () => {
    setShowSquare(true)
    // setColor('red')
    setShowCircle(false);
    setShowTriangle(false);
  }
  
  const handleShowCircle = () => {
    setShowSquare(false)
    setShowCircle(true);
    // setColor('blue')
    setShowTriangle(false);
  }
  
  const handleShowTriangle = () => {
    setShowSquare(false)
    setShowCircle(false);
    setShowTriangle(true);
    // setColor('green')
  }

  return(
    <>
      <Box display='flex' justifyContent='center' mb={2}>
        <Button colorScheme='red' onClick={handleShowSquare}>Cuadrado</Button>
        
        <Button colorScheme='blue' onClick={handleShowCircle}>Circulo</Button>
        <Button colorScheme='green' onClick={handleShowTriangle}>Triangulo</Button>
        <motion.div
        
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* <Link bg='red' borderRadius='10px' color='white'>
          asldkjajbdsalksjda
          </Link> */}
          <Button colorScheme='red'>testing</Button>
          {/* <Box w='200px' h='80px' borderRadius='10px' bg='black'>

          </Box> */}
        </motion.div>
      </Box>
      <Box display='flex' justifyContent='center' bg='black'>

        {showSquare && <Renderizar color='red'/>}
        {showCircle && <Renderizar color='blue'/>}
        {showTriangle && <Renderizar color='green'/>}
      
      </Box>


    </>
  )

  
}

export default PasosMotion