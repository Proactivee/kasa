import styled from 'styled-components'

const ObjectTag = styled.p`
  min-width: 115px;
  padding-right: 30px;
  padding-left: 30px;
  text-align: center;
  background: #ff6060;
  color: white;
  margin-right: 10px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  padding-top: 3px;
  padding-bottom: 3px;
  white-space: nowrap;
  @media (max-width: 768px) {
    min-width: 84px;
    font-size: 14px;
  }
`

const DisplayTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;
`

function Tags({ tags, id }) {
  let TagArray = []
  for (let tag of tags) {
    TagArray.push(<ObjectTag key={id + tag}>{tag}</ObjectTag>)
  }
  return <DisplayTag>{TagArray}</DisplayTag>
}
export default Tags
