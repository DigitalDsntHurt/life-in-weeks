import React, { useState } from 'react'
import Year from './Year'

import Time from '../../../lib/time'

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

  Time.lifeWeeks(birthDate, deathDate)

  return (
    <div>
      <Year />
    </div>
  )
}