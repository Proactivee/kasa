import greyStar from '../../assets/greyStar.png'
import pinkStar from '../../assets/pinkStar.png'
import styled from 'styled-components'

const Stars = styled.img`
  margin-left: 10px;
  @media (max-width: 768px) {
    height: 15px;
    margin-left: 5px;
  }
`
const StarContainer = styled.div`
  margin-top: 23px;
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    padding-top: 30px;
  }
`

function StarsRate({ rating }) {
  let index = [1, 2, 3, 4, 5]
  let star = []

  if (rating === '1') {
    star.push(
      <Stars key={index[0]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[1]} src={greyStar} alt="greystar" />,
      <Stars key={index[2]} src={greyStar} alt="greystar" />,
      <Stars key={index[3]} src={greyStar} alt="greystar" />,
      <Stars key={index[4]} src={greyStar} alt="greystar" />
    )
  } else if (rating === '2') {
    star.push(
      <Stars key={index[0]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[1]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[2]} src={greyStar} alt="greystar" />,
      <Stars key={index[3]} src={greyStar} alt="greystar" />,
      <Stars key={index[4]} src={greyStar} alt="greystar" />
    )
  } else if (rating === '3') {
    star.push(
      <Stars key={index[0]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[1]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[2]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[3]} src={greyStar} alt="greystar" />,
      <Stars key={index[4]} src={greyStar} alt="greystar" />
    )
  } else if (rating === '4') {
    star.push(
      <Stars key={index[0]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[1]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[2]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[3]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[4]} src={greyStar} alt="greystar" />
    )
  } else {
    star.push(
      <Stars key={index[0]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[1]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[2]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[3]} src={pinkStar} alt="pinkstar" />,
      <Stars key={index[4]} src={pinkStar} alt="pinkstar" />
    )
  }

  return <StarContainer>{star}</StarContainer>
}

export default StarsRate
