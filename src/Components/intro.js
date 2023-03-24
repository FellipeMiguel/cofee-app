import IntroContainer from "../styles/intro/introContainer"
import IntroContent from "../styles/intro/introContent"
import introImg from "../assets/coffee.png"
import Title from "../styles/intro/introTtitle"
import Text from "../styles/intro/introText"
import Benefits from "../styles/intro/introBenefits"
import shopCart from "../assets/shopcart.png"
import box from "../assets/box.png"
import timer from "../assets/time.png"
import coffeeIcon from "../assets/coffeeicon.png"

function Intro (){

  return (
    <>
      <IntroContainer>
        <IntroContent className="container">
          <div>
            {/* Titulo e subtitulo */}
            <section>
              <Title>
                Encontre o café perfeito para qualquer hora do dia
              </Title>
              <Text as="h3">
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
              </Text>
            </section>
            {/* Benefícios */}
            <Benefits>
              <div className="benefits">
                <img src={shopCart} alt="icone de um carrinho de compras"/>
                <p>Compra simples e segura</p>
              </div>
              <div className="benefits">
                <img src={box} alt="Icone de uma imbalagem"/>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div className="benefits">
                <img src={timer} alt="Icone de uma relógio"/>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div className="benefits">
                <img src={coffeeIcon} alt="Icone de uma xícara de café"/>
                <p>O café chega fresquinho até você</p>
              </div>
            </Benefits>
          </div>
          {/* Imagem */}
          <img src={introImg} alt="imagem de um copo de café" />
        </IntroContent>
      </IntroContainer>
    </>
  )
}

export default Intro