import React, { useState } from 'react'
import { RegionQuestion } from './RegionQuestion'
import {SearchForm} from "./SearchForm";

export const App = () => {
  const [region, setRegion] = useState(null);

  return (
    <div className="question">
      <RegionQuestion region={region} setRegion={setRegion}/>
      <SearchForm/>
    </div>
  )
}