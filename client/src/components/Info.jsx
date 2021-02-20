import React from 'react'
import styled from 'styled-components'

import HoverInfo from './HoverInfo'

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`;

export default function Info ({ hoverWeek }) {
  return (
    <InfoDiv>
      <HoverInfo hoverWeek={hoverWeek} />
    </InfoDiv>
  )
}