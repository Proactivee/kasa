import greyStar from '../../assets/greyStar.png'
import pinkStar from '../../assets/pinkStar.png'
import styled from 'styled-components'

const Stars = styled.img`
  margin-left: 10px;
`
const StarContainer = styled.div`
  margin-top: 23px;
`

function StarsRate({ rating }) {
  let star = []
  console.log(rating)

  if (rating == 1) {
    star.push(
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={greyStar} alt="greystar" />,
      <Stars src={greyStar} alt="greystar" />,
      <Stars src={greyStar} alt="greystar" />,
      <Stars src={greyStar} alt="greystar" />
    )
  } else if (rating == 2) {
    star.push(
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={greyStar} alt="greystar" />,
      <Stars src={greyStar} alt="greystar" />,
      <Stars src={greyStar} alt="greystar" />
    )
  } else if (rating == 3) {
    star.push(
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={greyStar} alt="greystar" />,
      <Stars src={greyStar} alt="greystar" />
    )
  } else if (rating == 4) {
    star.push(
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={greyStar} alt="greystar" />
    )
  } else {
    star.push(
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={pinkStar} alt="pinkstar" />,
      <Stars src={pinkStar} alt="pinkstar" />
    )
  }

  return <StarContainer>{star}</StarContainer>
}

export default StarsRate
