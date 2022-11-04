import { useState } from 'react'
import styled from 'styled-components'
import arrowUp from '../../../assets/arrowUp.png'
import arrowDown from '../../../assets/arrowDown.png'

const Arrow = styled.img`
  object-fit: none;
  padding-right: 16px;
`
const DataWindow = styled.p`
  background: #f6f6f6;
  padding: 20px;
  margin-top: -31px;
  font-weight: 400;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 38px;
  font-size: 26px;
  @media (max-width: 768px) {
    margin-left: 0px;
    font-size: 17px;
  }
`

const WindowContainer = styled.div`
  background: #ff6060;
  border-radius: 5px;
  margin-bottom: 31px;
  display: flex;
  justify-content: space-between;
  padding-left: 18px;
  padding-top: 5.5px;
  padding-bottom: 7.4px;
  margin-left: 38px;
  height: 40px;
  @media (max-width: 768px) {
    margin-left: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`
const Title = styled.h4`
  color: white;
  padding-top: 12px;
  margin: 0px;
  font-weight: 500px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 19px;
    padding-top: 10px;
  }
`
const Container = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

function EquipmentsWindow({ equipments }) {
  const [windowOpen, setWindowOpen] = useState(true)
  let equipement = []
  for (let equip of equipments) {
    equipement.push(<p>{equip}</p>)
  }

  return windowOpen ? (
    <Container>
      <WindowContainer>
        <Title>Equipements</Title>
        <Arrow src={arrowUp} alt="arrow" onClick={() => setWindowOpen(false)} />
      </WindowContainer>
    </Container>
  ) : (
    <Container>
      <WindowContainer>
        <Title>Equipements</Title>
        <Arrow
          src={arrowDown}
          alt="arrow"
          onClick={() => setWindowOpen(true)}
        />
      </WindowContainer>
      <DataWindow>{equipement}</DataWindow>
    </Container>
  )
}

export default EquipmentsWindow
