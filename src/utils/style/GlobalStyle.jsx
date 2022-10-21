import { createGlobalStyle } from 'styled-components'

const StyledGlobal = createGlobalStyle`
*{
    font-family: 'Montserrat', Helvetica, sans-serif;
    color: #ff6060;
    font-style: normal;

}
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  padding:0px;
  margin-left:100px;
  margin-right:100px;
}body {
  margin: 0;
  min-height:100%
}button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}footer{
  margin-bottom:-25px;
}

`

function GlobalStyle() {
  return <StyledGlobal />
}

export default GlobalStyle
