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
  @media (max-width:768px){
    margin:20px;
    margin-bottom:-20px;
  }
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
}
h1{
  font-size:51px;
  font-weight:500;@media (max-width: 768px) {
    font-size:26px;
  }
}
h2{
  font-size:51px;
  font-weight:500;
  margin-top:20px;
  margin-bottom:15px;
  margin-right:0px;
  max-width:900px;
  @media (max-width: 768px) {
    font-size:26px;
  }
}
h3{
  color:white;
  font-size:24px;
  padding:0;
  margin:0;
  font-weight: 500;
}h4{
  font-size:26px;
  font-weight:500;
}footer{
  margin-bottom:-25px;
}

`

function GlobalStyle() {
  return <StyledGlobal />
}

export default GlobalStyle
