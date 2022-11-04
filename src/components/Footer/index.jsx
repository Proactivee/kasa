import styled from 'styled-components'
import logoPic from '../../assets/logo_white.png'

const FooterContain = styled.footer`
  background-color: black;
  margin-left: -100px;
  margin-right: -100px;
  @media (max-width: 768px) {
    margin-right: -20px;
    margin-left: -20px;
  }
`
const LogoKasa = styled.img`
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 66px;
`
const Rights = styled.p`
  color: white;
  text-align: center;
  font-size: 24px;
  padding-bottom: 29px;
`

function Footer() {
  return (
    <FooterContain>
      <LogoKasa src={logoPic} alt="logo" />
      <Rights> © 2020 Kasa. All rights reserved </Rights>
    </FooterContain>
  )
}

export default Footer
