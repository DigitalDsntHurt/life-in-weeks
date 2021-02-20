import React from 'react'
import styled from 'styled-components'

import Week from './Week'

const YearDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Year ({ year, weeks, setHoverWeek }) {
  return (
    <YearDiv>
      {weeks.map((week, i) => (
          <Week
            key={i}
            week={week}
            setHoverWeek={setHoverWeek}
          />
        ))}
    </YearDiv>
  )
}