import styled from 'styled-components'

const ObjectTag = styled.p`
  min-width: 115px;
  padding-right: 10px;
  padding-left: 10px;
  text-align: center;
  background: #ff6060;
  color: white;
  margin-right: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  padding-top: 2px;
  padding-bottom: 2px;
`

const DisplayTag = styled.div`
  display: flex;
`

function Tags({ tags }) {
  let TagArray = []
  for (let tag of tags) {
    TagArray.push(<ObjectTag>{tag}</ObjectTag>)
  }
  return <DisplayTag>{TagArray}</DisplayTag>
}
export default Tags
