import React, { useState, useEffect } from 'react'
import { RegionQuestion } from './RegionQuestion'
import {SearchForm} from "./SearchForm";
import { GroupSizeQuestion } from './GroupSizeQuestion'
import { WalkLengthQuestion } from './WalkLengthQuestion'
import { getMeHuts } from '../api_access'
import { HuttCard } from './HutCard';
import { CardsContainer } from "./CardsContainer";
import rawHutData from "../data/huts.json"

export const App = () => {
  const [region, setRegion] = useState(null);
  const [groupSize, setGroupSize] = useState(null);
  const [walkLength, setWalkLength] = useState(null);
  const [huts, setHuts] = useState(null);
  const [allRegions, setRegions] = useState(new Set());

  const hutData = rawHutData.filter(hut => hut.region != null);

  useEffect(() => {
    setHuts(hutData);
    hutData.forEach(hut => {
        allRegions.add(hut.region);
        if(hut.region == null) {
            console.log(hut);
        }
    });
    console.log(allRegions);
    if(region == null) {
        setHuts(hutData)
    } else  {
        setHuts(hutData.filter(hut => hut.region === region))
    }
  }, [region]); //recalls the useEffect when the value of region changes

  return (
    <div>
      <RegionQuestion regions={[...allRegions]} region={region} setRegion={setRegion}/>
        {huts == null ? 0 : <CardsContainer cardElements={huts}/>}
      {/*<SearchForm setRegion={setRegion}/>*/}
      {/*<GroupSizeQuestion groupSize={groupSize} setGroupSize={setGroupSize}/>*/}
      {/*<WalkLengthQuestion walkLength={walkLength} setWalkLength={setWalkLength}/>*/}

    </div>
  )
}

