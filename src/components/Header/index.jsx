import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logoPic from '../../assets/LOGO.png'

const HeaderContainer = styled.header`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
`
const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  margin-right: 10%;
  text-decoration: none;
  margin-left: 57px;
  margin-top: 17px;

  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`
const Navig = styled.nav`
  display: flex;
  justify-content: right;
`

function Header() {
  return (
    <HeaderContainer>
      <img src={logoPic} alt="logo" />
      <Navig>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about"> A Propos </StyledLink>
      </Navig>
    </HeaderContainer>
  )
}

export default Header
