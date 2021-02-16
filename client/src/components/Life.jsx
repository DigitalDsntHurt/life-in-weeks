import React, { useState } from 'react'
import styled from 'styled-components'

import Year from './Year'

import Time from '../../../lib/time'

const LifeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Life ({ setHoverWeek }) {
  const placeHolderBDay = new Date(1990, 3, 8)
  const placeHolderDDay = new Date(placeHolderBDay.getFullYear() + 91, 11, 31)
  const [birthDate, setBirthDate] = useState(placeHolderBDay)
  const [deathDate, setDeathDate] = useState(placeHolderDDay)

  const years = Time.lifeWeeks(birthDate, deathDate)

  return (
    <LifeDiv>
      {years.map(year =>
          <Year
            key={year.year}
            year={year.year}
            weeks={year.weeks}
            setHoverWeek={setHoverWeek}
          /> )}
    </LifeDiv>
  )
}