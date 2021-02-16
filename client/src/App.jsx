import React, { useState } from 'react'
import styled from 'styled-components'

import Life from './components/Life'
import Info from './components/Info'

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`

export default function App () {
  const placeholderHover = {
    weekStart: 'start of week from state in app',
    weekEnd: 'end of week from state in app',
    lifePhase: 'phase of life from state in app',
  }
  const [hoverWeek, setHoverWeek] = useState({})

  return (
    <ColumnsContainer>
      <Life setHoverWeek={setHoverWeek} />
      <Info hoverWeek={hoverWeek} />
    </ColumnsContainer>

  )
}