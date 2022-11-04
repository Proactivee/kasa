import { useParams } from 'react-router-dom'
import { LogementList } from '../../datas/logement'
import styled from 'styled-components'
import Tags from '../../components/Tags'
import EquipmentsWindow from '../../components/WindowCollapse/EquipmentsWindow'
import DescriptionWindow from '../../components/WindowCollapse/DescriptionWindow'
import StarsRate from '../../components/StarsRate'
import ImageSlide from '../../components/ImageSlide'
import Error from '../Error'

const LogementContainer = styled.div`
  padding-top: 27px;
`
const PresentationContainer = styled.div``

const IdPhoto = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-top: 10px;
    border-radius: 50%;
  }
`
const IdData = styled.div`
  display: flex;
  margin-top: 22px;
`
const IdName = styled.h4`
  max-width: 120px;
  text-align: right;
  line-height: 25px;
  margin-top: 8px;
  margin-right: 10px;
  @media (max-width: 768px) {
    font-size: 17px;
    max-width: 80px;
    height: 33px;
  }
`
const LocalTitle = styled.h4`
  margin-top: -20px;
  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 20px;
  }
`

const Windows = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const IdStars = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: -25px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  //flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

function Logement() {
  let { id } = useParams()
  let getid = { id }.id
  let LgmtArray = []

  /*--------------Recupère le tableau du logement a partir de id passer en url----------*/
  for (let lgt of LogementList) {
    if (getid === lgt.id) {
      LgmtArray.push(lgt)
    }
  }
  /*-------Si No Data alors Error---------*/
  if (LgmtArray.length === 0) {
    return <Error />
  }

  return (
    <div>
      {LgmtArray.map(
        ({
          id,
          pictures,
          title,
          location,
          host,
          tags,
          description,
          equipments,
          rating,
        }) => (
          <div key={id}>
            <LogementContainer>
              <ImageSlide pictures={pictures} />
              <Container>
                <PresentationContainer>
                  <h2>{title}</h2>
                  <LocalTitle>{location}</LocalTitle>
                  <Tags tags={tags} id={id} />
                </PresentationContainer>
                <IdStars>
                  <IdData>
                    <IdName>{host.name}</IdName>
                    <IdPhoto src={host.picture} alt="identité" />
                  </IdData>
                  <StarsRate rating={rating} id={id} />
                </IdStars>
              </Container>
              <Windows>
                <DescriptionWindow description={description} />
                <EquipmentsWindow equipments={equipments} />
              </Windows>
            </LogementContainer>
          </div>
        )
      )}
    </div>
  )
}
export default Logement
