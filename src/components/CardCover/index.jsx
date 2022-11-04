import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogementContainer = styled(Link)`
  text-decoration: none;
`
const CoverImg = styled.img`
  background: #7e7edf;
  height: 340px;
  width: 340px;
  border-radius: 10px;
  margin: 25px;
  @media (max-width: 768px) {
    height: 95%;
    width: 100%;
    margin: 0px;
  }
`
const TitleCover = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  top: -100px;
  left: 40px;
  max-width: 300px;
`

function CardCover({ id, cover, title }) {
  return (
    <LogementContainer to={`/logement/${id}`}>
      <CoverImg src={cover} alt={title} />
      <TitleCover>{title}</TitleCover>
    </LogementContainer>
  )
}

export default CardCover
