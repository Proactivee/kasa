import { useState } from 'react'
import styled from 'styled-components'
import RightArrow from '../../assets/rightArrow.png'
import LeftArrow from '../../assets/leftArrow.png'

const LeftArrows = styled.img`
  object-fit: none;
  cursor: pointer;
  position: relative;
  right: 60px;
`

const RightArrows = styled.img`
  object-fit: none;
  cursor: pointer;
  position: relative;
  left: 60px;
`

const Count = styled.p`
  color: white;
  position: relative;
  bottom: 50px;
`
const Container = styled.div`
  text-align: center;
  position: relative;
`

function ImageSlide({ pictures }) {
  const [index, setIndex] = useState(0)

  const Previous = () => {
    const FirstSlideImage = index === 0
    const PreviousSlide = FirstSlideImage ? pictures.length - 1 : index - 1
    setIndex(PreviousSlide)
  }

  const Next = () => {
    const LastSlideImage = index === pictures.length - 1
    const NextSlide = LastSlideImage ? 0 : index + 1
    setIndex(NextSlide)
  }

  const SlideContainer = styled.div`
    background-image: url(${pictures[index]});
    background-size: cover;
    background-position: center;
    width: 100%;
    justify-content: center;
    border-radius: 25px;
    height: 415px;
    display: flex;
    justify-content: space-between;
  `

  return (
    <Container>
      <SlideContainer>
        <LeftArrows src={LeftArrow} alt="left-arrow" onClick={Previous} />
        <RightArrows src={RightArrow} alt="Right-arrow" onClick={Next} />
      </SlideContainer>
      <Count>
        {index + 1}/{pictures.length + 1}
      </Count>
    </Container>
  )
}

export default ImageSlide
