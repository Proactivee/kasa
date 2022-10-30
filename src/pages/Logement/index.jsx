import { useParams } from 'react-router-dom'
import { LogementList } from '../../datas/logement'
import styled from 'styled-components'
import Tags from '../../components/Tags'
import EquipmentsWindow from '../../components/WindowCollapse/EquipmentsWindow'
import DescriptionWindow from '../../components/WindowCollapse/DescriptionWindow'

const LogementContainer = styled.div`
  padding: 20px;
`
const PresentationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
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
  max-width: 93px;
  text-align: right;
  line-height: 25px;
  margin-top: 8px;
  margin-right: 10px;
`
const LocalTitle = styled.h4`
  margin-top: -20px;
`
const TagRate = styled.div``

const Windows = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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
          cover,
          title,
          location,
          host,
          tags,
          description,
          equipments,
        }) => (
          <div key={id}>
            <LogementContainer>
              <PresentationContainer>
                <div>
                  <h2>{title}</h2>
                  <LocalTitle>{location}</LocalTitle>
                </div>
                <IdData>
                  <IdName>{host.name}</IdName>
                  <IdPhoto src={host.picture} alt="identité" />
                </IdData>
              </PresentationContainer>
              <TagRate>
                <Tags tags={tags} />
              </TagRate>
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
