import React, { useState } from 'react'
import { RegionQuestion } from './RegionQuestion'
import {SearchForm} from "./SearchForm";
import { GroupSizeQuestion } from './GroupSizeQuestion'
import { WalkLengthQuestion } from './WalkLengthQuestion'

export const App = () => {
  const [region, setRegion] = useState(null);
  const [groupSize, setGroupSize] = useState(null);
  const [walkLength, setWalkLength] = useState(null);

  return (
    <div className="question">
      <RegionQuestion region={region} setRegion={setRegion}/>
      <SearchForm setRegion={setRegion}/>
      <GroupSizeQuestion groupSize={groupSize} setGroupSize={setGroupSize}/>
      <WalkLengthQuestion walkLength={walkLength} setWalkLength={setWalkLength}/>
    </div>
  )
}

