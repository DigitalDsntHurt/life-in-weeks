import React from 'react'
import styled from 'styled-components'

const WeekDiv = styled.div`
  margin: 0.1em 0.1em 0em 0em;
  padding: 0.25em 0.33em;
  border: solid 1px black;
    background: ${props => {
    if (props.lifePhase === 'past') {
      return '#000000b8'
    }
    if (props.lifePhase === 'present') {
      return '#ffeb3b'
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