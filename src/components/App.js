import React, { useState, useEffect } from 'react'
import { RegionQuestion } from './RegionQuestion'
import {SearchForm} from "./SearchForm";
import { GroupSizeQuestion } from './GroupSizeQuestion'
import { WalkLengthQuestion } from './WalkLengthQuestion'
import { getMeHuts } from '../api_access'
import { HuttCard } from './HutCard';
import { CardsContainer } from "./CardsContainer";
import hutData from "../data/huts.json"

export const App = () => {
  const [region, setRegion] = useState(null);
  const [groupSize, setGroupSize] = useState(null);
  const [walkLength, setWalkLength] = useState(null);
  const [huts, setHuts] = useState(null);

  useEffect(() => {
    setHuts(hutData)
    if(region == null && huts != null) {
        setHuts(hutData)
    } else if (huts != null) {
        setHuts(huts.filter(hut => hut.region === region))
    }
  }, [region]); //recalls the useEffect when the value of region changes

  return (
    <div>
      <RegionQuestion region={region} setRegion={setRegion}/>
      <SearchForm setRegion={setRegion}/>
      <GroupSizeQuestion groupSize={groupSize} setGroupSize={setGroupSize}/>
      <WalkLengthQuestion walkLength={walkLength} setWalkLength={setWalkLength}/>
        {huts == null ? 0 : <CardsContainer cardElements={huts}/>}
    </div>
  )
}

