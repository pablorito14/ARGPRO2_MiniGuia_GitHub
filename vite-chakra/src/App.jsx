import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { ChakraProvider } from '@chakra-ui/react'
 
function App() {

  return (
    <>
      <ChakraProvider>
        <Header /> 
        <Main />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App
