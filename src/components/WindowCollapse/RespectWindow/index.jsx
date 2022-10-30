import { useState } from 'react'
import styled from 'styled-components'
import arrowUp from '../../../assets/arrowUp.png'
import arrowDown from '../../../assets/arrowDown.png'

const Arrow = styled.img`
  object-fit: contain;
  padding-right: 16px;
`
const DataWindow = styled.p`
  background: #f6f6f6;
  padding: 10px;
  margin-left: 108px;
  margin-right: 108px;
  margin-top: -31px;
  padding: 27px;
  font-weight: 400;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
  margin-left: 108px;
  margin-right: 108px;
`
const Container = styled.div``

function RespectWindow() {
  const [windowOpen, setWindowOpen] = useState(true)

  return windowOpen ? (
    <WindowContainer>
      <h3>Respect</h3>
      <Arrow src={arrowUp} alt="arrow" onClick={() => setWindowOpen(false)} />
    </WindowContainer>
  ) : (
    <Container>
      <WindowContainer>
        <h3>Respect</h3>
        <Arrow
          src={arrowDown}
          alt="arrow"
          onClick={() => setWindowOpen(true)}
        />
      </WindowContainer>
      <DataWindow>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </DataWindow>
    </Container>
  )
}

export default RespectWindow
