import React, { useState } from 'react'
import huts from '../data/huts-with-track-ids'
import { HutCart } from './HutCart'
import { CardsContainer } from './CardsContainer'

export const HutSelector = ({ track }) => {
  const [selectedHuts, setSelectedHuts] = useState([])
  const availableHuts = huts.filter(hut => hut.trackId === track.id)

  const toggleSelectedHut = hut => {
    if (selectedHuts.includes(hut)) {
      setSelectedHuts(selectedHuts.filter(h => h !== hut))
    } else {
      setSelectedHuts([...selectedHuts, hut])
    }
  }

  return (
    <div className="question">
      <div className="q-number">
        04<div className="fabulous-btn">♥</div>
      </div>
      <div className="q-text">Where would you like to stay?</div>
      <div className="q-input">
        {/* <HutCart selectedHuts={selectedHuts} toggleSelectedHut={toggleSelectedHut} /> */}
        <CardsContainer cardElements={availableHuts} toggleSelectedHut={toggleSelectedHut} />
      </div>
    </div>
  )
}
