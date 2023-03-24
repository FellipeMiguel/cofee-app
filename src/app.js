import GlobalStyle from './styles/global'
import Navbar from './Components/navbar'
import Intro from './Components/intro'
import Coffees from './Components/coffees/coffees'

function App(){

  
  return (
    
    <>
      <GlobalStyle/>
      <Navbar />
      <Intro />
      <Coffees />
    </>
  )
}

export default App