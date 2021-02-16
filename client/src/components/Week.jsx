import React from 'react'
import styled from 'styled-components'

const WeekDiv = styled.div`
  margin: 1px;
  padding: 2px;
  border: solid 1px black;
`;

// export default function Week ({ startDate, endDate, lifePhase, setHoverWeek }) {
export default function Week ({ week, setHoverWeek }) {

  const displayWeekInfo = () => {
    console.log('hover!')
  }

  return (
    <WeekDiv onMouseEnter={() => setHoverWeek(week)} onMouseLeave={() => setHoverWeek({})} />
  )
}