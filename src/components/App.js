import React, { useState, useEffect } from 'react'
import { RegionQuestion } from './RegionQuestion'
import { CardsContainer } from "./CardsContainer";
import { HutCart} from "./HutCart";
import rawHutData from "../data/huts.json"

export const App = () => {
    const [region, setRegion] = useState(null);
    const [groupSize, setGroupSize] = useState(null);
    const [walkLength, setWalkLength] = useState(null);
    const [huts, setHuts] = useState(null);
    const [allRegions, setRegions] = useState(new Set());

    const hutData = rawHutData.filter(hut => hut.region != null);

    const [selectedHuts, setSelectedHuts] = useState(new Set());

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
            setHuts(hutData.filter(hut => region.includes(hut.region)))
        }

    }, [region]); //recalls the useEffect when the value of region changes

    const toggleSelectedHut = (hut) => {
        var tempHuts = new Set(selectedHuts);
        if(selectedHuts.has(hut)) {
            tempHuts.delete(hut)
            setSelectedHuts(tempHuts)
        } else {
            tempHuts.add(hut)
            setSelectedHuts(tempHuts)
            console.log("SELECTED HUTS ---")
            console.log(selectedHuts)
        }
    };

    return (
        <div>
            <RegionQuestion regions={[...allRegions]} region={region} setRegion={setRegion}/>
            <HutCart selectedHuts={[...selectedHuts]} toggleSelectedHut={toggleSelectedHut}/>
            {huts == null ? 0 : <CardsContainer cardElements={huts} toggleSelectedHut={toggleSelectedHut}/>}

            {/*<SearchForm setRegion={setRegion}/>*/}
            {/*<GroupSizeQuestion groupSize={groupSize} setGroupSize={setGroupSize}/>*/}
            {/*<WalkLengthQuestion walkLength={walkLength} setWalkLength={setWalkLength}/>*/}

        </div>
    )
}

