import styled from "styled-components"
import introBackground from "../../assets/Background.png"

const IntroContainer = styled.section`
  background: ${()=>`url(${introBackground}) no-repeat center`};
  background-size: cover;
  height: 34rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default IntroContainer