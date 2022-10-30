import AboutBanner from '../../assets/img_about.png'
import BackGround from '../../assets/Background.png'
import styled from 'styled-components'
import FiabWindow from '../../components/WindowCollapse/FiabWindow'
import RespectWindow from '../../components/WindowCollapse/RespectWindow'
import SecuriteWindow from '../../components/WindowCollapse/SecuriteWindow'
import ServiceWindow from '../../components/WindowCollapse/ServiceWindow'
const HomeWrap = styled.div``

const ImageBack = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 223px;
  object-fit: fill;
  margin-top: 63px;
`
const Back = styled.img`
  position: relative;
  top: -227px;
  width: 100%;
  height: 223px;
  border-radius: 25px;
  margin-bottom: -200px;
`

function About() {
  return (
    <HomeWrap>
      <ImageBack src={AboutBanner} alt="montagne"></ImageBack>
      <Back src={BackGround} alt="background"></Back>
      <FiabWindow />
      <RespectWindow />
      <ServiceWindow />
      <SecuriteWindow />
    </HomeWrap>
  )
}

export default About
