import homeBanner from '../../assets/img_home.png'
import BackGround from '../../assets/Background.png'
import styled from 'styled-components'
import CardCover from '../../components/CardCover'
import { LogementList } from '../../datas/logement'

const HomeWrap = styled.div``

const ImageBack = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 223px;
  object-fit: fill;
  margin-top: 63px;
  margin-bottom: 43px;
`
const Back = styled.img`
  position: relative;
  top: -270px;
  width: 100%;
  height: 223px;
  border-radius: 25px;
`
const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
  color: white;
  position: relative;
  top: -450px;
  text-align: center;
`
const CardContainer = styled.div`
  background: #f7f7f7;
  border-radius: 25px;
  margin-top: -349px;
  margin-bottom: 43px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 31px;
  padding-bottom: 31px;
  display: flex;
  flex-wrap: wrap;
`

function Home() {
  return (
    <HomeWrap>
      <ImageBack src={homeBanner} alt="paysage"></ImageBack>
      <Back src={BackGround} alt="background"></Back>
      <Title> Chez vous, partout et ailleurs</Title>
      <CardContainer>
        {LogementList.map(({ id, cover, title }) => (
          <div key={id}>
            <CardCover id={id} cover={cover} title={title} />
          </div>
        ))}
      </CardContainer>
    </HomeWrap>
  )
}

export default Home
