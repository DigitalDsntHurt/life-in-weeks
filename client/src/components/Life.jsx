import React, { useState } from 'react'
import styled from 'styled-components'

import Year from './Year'

import Time from '../../../lib/time'

const LifeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Life () {
  const placeHolderBDay = new Date(1990, 3, 8)
  const placeHolderDDay = new Date(placeHolderBDay.getFullYear() + 91, 11, 31)
  const [birthDate, setBirthDate] = useState(placeHolderBDay)
  const [deathDate, setDeathDate] = useState(placeHolderDDay)

  // useEffect(() => {
  //   if(!props.fetched) {
  //       props.fetchRules();
  //   }
  //   console.log('mount it!');
  // }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  // useEffect(() => {

  // }

  // )


  const years = Time.lifeWeeks(birthDate, deathDate)

  return (
    <LifeDiv>
      {/* <Year /> */}

      {/* {
        years.map((year, i) => (
          <Year key={i} year={year} />
        ))
      } */}

      {
        years.map(year => <Year key={year.year} year={year.year} weeks={year.weeks} /> )
      }
    </LifeDiv>
  )
}