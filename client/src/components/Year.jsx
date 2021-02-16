import React from 'react'
import styled from 'styled-components'

import Week from './Week'

const YearDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Year ({ year, weeks }) {
  return (
    <YearDiv>
      {
        weeks.map(week => (
          <Week />
        ))
      }
    </YearDiv>
  )
}