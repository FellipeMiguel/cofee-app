import Container from "./styles/navbar/container"
import HeaderButtons from "./styles/navbar/headerButtons"
import HeaderButtonsDiv from "./styles/navbar/headerButtons"
import {MapPin, ShoppingCart} from 'phosphor-react'
import coffeeLogo from "./assets/Logo.svg"

function Navbar () {

  return (
    <>
      <Container>
        <div className="container">
          <img src={coffeeLogo} alt="Logo Coffee Delivery"/>

          <HeaderButtonsDiv>
            <HeaderButtons>
              <MapPin size={20} weight="fill" color='#8047F8' className="mappin"/>
              Porto Alegre, RS
            </HeaderButtons>

            <HeaderButtons>
              <ShoppingCart size={20} weight="fill" color='#C47F17' className="cart"/>
            </HeaderButtons>
          </HeaderButtonsDiv>
        </div>
      </Container>
    </>
  )
}

export default Navbar