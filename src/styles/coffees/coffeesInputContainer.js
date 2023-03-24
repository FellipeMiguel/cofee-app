import styled from "styled-components";

const CoffeesInputContainer = styled.div`
  align-items: center;
  background: #E6E5E5;
  border-radius: 6px;
  display: flex;
  flex: 1;
  gap: 4px;
  justify-content: space-between;
  padding: 0.5rem;

  input {
    background: none;
    border: none;
    color: #272221;
    text-align: center;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`

export default CoffeesInputContainer