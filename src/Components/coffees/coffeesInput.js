import { Plus, Minus } from "phosphor-react"
import CoffeesIconButton from "../../styles/coffees/coffeesIconButton"
import CoffeesInputContainer from "../../styles/coffees/coffeesInputContainer"

function CoffeesInput() {
  return (
    <>
      <CoffeesInputContainer>
        {/* Butão de menos */}
        <CoffeesIconButton type="button">
          <Minus size={14} weight="fill" />
        </CoffeesIconButton>
          
        <input type="number" readOnly value={1}/>

        {/* Butão de mais */}
        <CoffeesIconButton type="button">
          <Plus size={14} weight="fill" />
        </CoffeesIconButton>
      </CoffeesInputContainer>
    </>
  )
}

export default CoffeesInput