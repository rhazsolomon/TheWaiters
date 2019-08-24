import React, { useState, useEffect } from 'react'
import { RegionQuestion } from './RegionQuestion'
import {SearchForm} from "./SearchForm";
import { GroupSizeQuestion } from './GroupSizeQuestion'
import { WalkLengthQuestion } from './WalkLengthQuestion'
import { getMeHuts } from '../api_access'

export const App = () => {
  const [region, setRegion] = useState(null);
  const [groupSize, setGroupSize] = useState(null);
  const [walkLength, setWalkLength] = useState(null);
  const [huts, setHuts] = useState(null);

  useEffect(() => {
    setHuts(null)
    if(!region) {return}
    getMeHuts(region).then(function (values) {
      console.log(values);
      setHuts(values)
    });
  }, [region]); //recalls the useEffect when the value of region changes

  return (
    <div>
      <RegionQuestion region={region} setRegion={setRegion}/>
      <SearchForm setRegion={setRegion}/>
      <GroupSizeQuestion groupSize={groupSize} setGroupSize={setGroupSize}/>
      <WalkLengthQuestion walkLength={walkLength} setWalkLength={setWalkLength}/>
    </div>
  )
}

