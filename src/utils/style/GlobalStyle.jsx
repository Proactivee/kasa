import { createGlobalStyle } from 'styled-components'

const StyledGlobal = createGlobalStyle`
*{
    font-family: 'Montserrat', Helvetica, sans-serif;
    color: #ff6060;
    font-style: normal;

}
`

function GlobalStyle() {
  return <StyledGlobal />
}

export default GlobalStyle
