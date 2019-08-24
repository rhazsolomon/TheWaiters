import React, { useState } from 'react'
import { RegionQuestion } from './RegionQuestion'
import { GroupSizeQuestion } from './GroupSizeQuestion'
import { WalkLengthQuestion } from './WalkLengthQuestion'

export const App = () => {
  const [region, setRegion] = useState(null);
  const [groupSize, setGroupSize] = useState(null);
  const [walkLength, setWalkLength] = useState(null);

  return (
    <div>
      <RegionQuestion region={region} setRegion={setRegion}/>
      <GroupSizeQuestion groupSize={groupSize} setGroupSize={setGroupSize}/>
      <WalkLengthQuestion walkLength={walkLength} setWalkLength={setWalkLength}/>
    </div>
  )
}