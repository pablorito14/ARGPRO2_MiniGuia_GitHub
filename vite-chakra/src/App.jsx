import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { ChakraProvider } from '@chakra-ui/react'
import PasosMotion from './Components/PasosMotion/PasosMotion'
 
function App() {

  return (
    <>
      <ChakraProvider>
        <Header /> 
        <Main />
        {/* <PasosMotion /> */}
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App
