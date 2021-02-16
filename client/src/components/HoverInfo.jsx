import React from 'react'
import styled from 'styled-components'

const HoverInfoDiv = styled.div`
  border: solid 1px black;
  width: 96%;
  margin: 0 auto;
  padding: 88px;
`;

export default function HoverInfo ({ hoverWeek }) {
  return (
    <HoverInfoDiv>
      <div><strong>week start:</strong> { hoverWeek.weekStart } </div>
      <div><strong>week end:</strong> { hoverWeek.weekEnd } </div>
      <div><strong>life phase:</strong> { hoverWeek.lifePhase } </div>
    </HoverInfoDiv>
  )
}