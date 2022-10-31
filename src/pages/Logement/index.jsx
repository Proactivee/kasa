import { useParams } from 'react-router-dom'
import { LogementList } from '../../datas/logement'
import styled from 'styled-components'
import Tags from '../../components/Tags'
import EquipmentsWindow from '../../components/WindowCollapse/EquipmentsWindow'
import DescriptionWindow from '../../components/WindowCollapse/DescriptionWindow'
import StarsRate from '../../components/StarsRate'
import ImageSlide from '../../components/ImageSlide'

const LogementContainer = styled.div`
  padding: 20px;
`
const PresentationContainer = styled.div``

const IdPhoto = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`
const IdData = styled.div`
  display: flex;
  margin-top: 22px;
`
const IdName = styled.h4`
  max-width: 88px;
  text-align: right;
  line-height: 25px;
  margin-top: 8px;
  margin-right: 10px;
`
const LocalTitle = styled.h4`
  margin-top: -20px;
`

const Windows = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
const IdStars = styled.div``

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

function Logement() {
  let { id } = useParams()
  let getid = { id }.id
  let LgmtArray = []

  /*--------------Recupère le tableau du logement a partir de id passer en url----------*/
  for (let lgt of LogementList) {
    if (getid === lgt.id) {
      LgmtArray.push(lgt)
      console.log(LgmtArray)
    }
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
                  <Tags tags={tags} />
                </PresentationContainer>
                <IdStars>
                  <IdData>
                    <IdName>{host.name}</IdName>
                    <IdPhoto src={host.picture} alt="identité" />
                  </IdData>
                  <StarsRate rating={rating} />
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
