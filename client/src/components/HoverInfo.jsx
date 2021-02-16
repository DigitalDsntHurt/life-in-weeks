import React from 'react'
import styled from 'styled-components'

const HoverInfoDiv = styled.div`
  border: solid 1px black;
  width: 33vw;
  margin: 0 auto;
  padding: 88px;
`;

export default function HoverInfo ({ hoverWeek }) {
  return (
    <HoverInfoDiv>
      {/* <div><strong>week start:</strong> { hoverWeek ? new Date(hoverWeek.weekStart.getFullYear(), hoverWeek.weekStart.getMonth(), hoverWeek.weekStart.getDate()) : 'no date selected'} </div> */}
      <div><strong>week start:</strong> { hoverWeek.weekStart ? hoverWeek.weekStart : '' } </div>
      <div><strong>week end:</strong> { hoverWeek.weekEnd ? hoverWeek.weekEnd : '' } </div>
      <div><strong>life phase:</strong> { hoverWeek.lifePhase } </div>
    </HoverInfoDiv>
  )
}