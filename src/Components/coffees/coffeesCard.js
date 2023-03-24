import CoffeesCardCart from "../../styles/coffees/coffeesCardCart";
import CoffeesCardContainer from "../../styles/coffees/coffeesCardContainer";
import CoffeesCardFooter from "../../styles/coffees/coffeesCardFooter";
import CooffeesCardText from "../../styles/coffees/CoffeesCardText";
import CoffeesDescription from "../../styles/coffees/coffeesDescription";
import CoffeesName from "../../styles/coffees/coffeesName";
import CoffeesTags from "../../styles/coffees/coffeesTags";
import CoffeesTitleFooter from "../../styles/coffees/coffeesTitleFooter";
import CoffeesInput from "./coffeesInput";
import { ShoppingCart } from "phosphor-react";
import CoffeeData from "../../coffeeData/coffeeDataList";

function CoffeesCard({coffee}) {
  return (
    <>
      {/* Card */}
      <CoffeesCardContainer>
        {/* Imagame */}
        <img src={coffee.srcImg}/>

        {/* Titulo */}
        <CoffeesName>
          {coffee.title}
        </CoffeesName>
          
        {/* Tags */}
        <CoffeesTags>
          {coffee.tags.map((tagSpan, index) => (
            <span key={index}>{tagSpan}</span>
          ))}
        </CoffeesTags>

        {/* Descrição */}
        <CoffeesDescription>
          {coffee.description}
        </CoffeesDescription>

        {/* Preço e quantidade */}
        <CoffeesCardFooter>
          <div>
            {/* Preço */}
            <CooffeesCardText>R$</CooffeesCardText>
            <CoffeesTitleFooter>{coffee.price}</CoffeesTitleFooter>
          </div>

          {/* Quantidade */}
          <CoffeesCardCart>
            <CoffeesInput />
            <button type="button">
              <ShoppingCart size={22} weight="fill" />
            </button>
          </CoffeesCardCart>
        </CoffeesCardFooter>
      </CoffeesCardContainer>
    </>
  );
}

export default CoffeesCard;
