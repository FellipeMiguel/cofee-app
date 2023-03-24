import styled from "styled-components";

const CoffeesIconButton = styled.button `
  background: none;
  border: none;
  color: #8047F8;
  cursor: pointer;
  height: 0.875rem;
  transition: 0.4s;
  width: 0.875rem;

  &:disabled {
    opacity: 0.4;
  }

  $:not(:disabled):hover {
    color: #4B2995;
  }
`

export default CoffeesIconButton