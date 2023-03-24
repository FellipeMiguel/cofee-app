import Container from "../styles/navbar/container"
import HeaderButtons from "../styles/navbar/headerButtons"
import HeaderButtonsDiv from "../styles/navbar/headerButtonsDiv"
import {MapPin, ShoppingCart} from 'phosphor-react'
import coffeeLogo from "../assets/Logo.svg"

function Navbar () {

  return (
    <>
      <Container>
        <div className="container">
          <img src={coffeeLogo} alt="Logo Coffee Delivery"/>

          <HeaderButtonsDiv>
            <HeaderButtons>
              <MapPin size={20} weight="fill" color='#8047F8'/>
              Porto Alegre, RS
            </HeaderButtons>

            <HeaderButtons className="background-yellow-light">
              <ShoppingCart size={20} weight="fill" color='#C47F17' />
            </HeaderButtons>
          </HeaderButtonsDiv>
        </div>
      </Container>
    </>
  )
}

export default Navbar