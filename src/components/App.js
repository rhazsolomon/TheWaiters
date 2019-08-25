import React, { useState, useEffect } from 'react'
import { RegionQuestion } from './RegionQuestion'
import { GroupSizeQuestion } from './GroupSizeQuestion'
import { TrackSelector } from './TrackSelector'
import { HutSelector } from './HutSelector'
import huts from '../data/huts-with-track-ids'

export const App = () => {
  const [regions, setRegions] = useState(null)
  const [groupSize, setGroupSize] = useState(null)
  const [track, setTrack] = useState(null)

  return (
    <div>
      {!regions ? (
        <RegionQuestion setRegion={setRegions} />
      ) : !groupSize ? (
        <GroupSizeQuestion setGroupSize={setGroupSize} />
      ) : !track ? (
        <TrackSelector regions={regions} setTrack={setTrack} />
      ) : (
        <HutSelector track={track} />
      )}
    </div>
  )
}
