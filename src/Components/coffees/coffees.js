import CoffeesContainer from "../../styles/coffees/coffeesContainer";
import CoffeesList from "../../styles/coffees/coffeesList";
import CoffeesTitle from "../../styles/coffees/coffeesTitle";
import CoffeesCard from "./coffeesCard";
import CoffeeData from "../../coffeeData/coffeeDataList";

function Coffees() {
  return (
    <>
      <CoffeesContainer className="container">
        {/* Titulo */}
        <CoffeesTitle>Nossos cafés</CoffeesTitle>

        {/* Lista de cafés */}
        <CoffeesList>
          {CoffeeData.map((coffee, index)=> (
            <CoffeesCard key={index} coffee = {coffee}/>
          ))}
        </CoffeesList>
      </CoffeesContainer>
    </>
  );
}

export default Coffees;
