import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-right: 10%;
  text-decoration: none;
  color: #ff6060;

  &:hover {
    text-decoration: underline;
  }
`

const ContainerError = styled.div`
  text-align: center;
`

const Error404 = styled.div`
  font-weight: 700;
  font-size: 288px;
  margin-top: 80px;
  padding: 0px;
`

function Error() {
  return (
    <div>
      <ContainerError>
        <Error404>404</Error404>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <StyledLink to="/">Retourner sur la page d'acceuil</StyledLink>
      </ContainerError>
    </div>
  )
}

export default Error
