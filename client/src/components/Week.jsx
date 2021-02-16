import React from 'react'
import styled from 'styled-components'

const WeekDiv = styled.div`
  margin: 0px 0px;
  padding: 3px 4px;
  border: solid 1px black;
    background: ${props => {
    if (props.lifePhase === 'past') {
      return 'black'
    }
  }}
`;

// export default function Week ({ startDate, endDate, lifePhase, setHoverWeek }) {
export default function Week ({ week, setHoverWeek }) {

  const handleWeekHover = (hoveredWeek) => {
    setHoverWeek(hoveredWeek)
  }

  const handleWeekUnover = (unhoveredWeek) => {
    setHoverWeek({})
  }

  return (
    <WeekDiv onMouseEnter={() => handleWeekHover(week)} onMouseLeave={() => handleWeekUnover(week)} lifePhase={week.lifePhase} />
  )
}