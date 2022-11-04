import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  margin-top: 180px;
  margin-bottom: 180px;
  white-space: nowrap;
  display: block;

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
  @media (max-width: 768px) {
    font-size: 96px;
    margin-top: 200px;
  }
`

function Error() {
  return (
    <div>
      <ContainerError>
        <Error404>404</Error404>
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <StyledLink to="/">Retourner sur la page d'acceuil</StyledLink>
      </ContainerError>
    </div>
  )
}

export default Error
