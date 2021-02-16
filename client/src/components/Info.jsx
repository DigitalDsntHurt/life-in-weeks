import React from 'react'
import styled from 'styled-components'

import HoverInfo from './HoverInfo'

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1vw;
`;

export default function Info ({ hoverWeek }) {
  return (
    <InfoDiv>
      <HoverInfo hoverWeek={hoverWeek} />
    </InfoDiv>
  )
}