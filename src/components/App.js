import React, { useState, useEffect } from 'react'
import { RegionQuestion } from './RegionQuestion'
import { GroupSizeQuestion } from './GroupSizeQuestion'
import { TrackSelector } from './TrackSelector'
import { Homepage } from './Homepage'
import { HutSelector } from './HutSelector'
import huts from '../data/huts-with-track-ids'

export const App = () => {
  const [started, setStarted] = useState(false)
  const [regions, setRegions] = useState(null)
  const [groupSize, setGroupSize] = useState(null)
  const [track, setTrack] = useState(null)

  const start = () => setStarted(true)

  const goToRegion = () => {
    setRegions(null)
    setGroupSize(null)
    setTrack(null)
  }

  const goToGroupSize = () => {
    setGroupSize(null)
    setTrack(null)
  }

  const goToTrack = () => {
    setTrack(null)
  }

  const goToHuts = () => {}

  return (
    <div className="app">
      <nav>
        {started ? (
          <ul>
            <li className={!regions ? 'selected' : 'clickable'} onClick={() => goToRegion()}></li>
            <li
              className={regions && !groupSize ? 'selected' : groupSize ? 'clickable' : ''}
              onClick={() => goToGroupSize()}
            ></li>
            <li
              className={groupSize && !track ? 'selected' : track ? 'clickable' : ''}
              onClick={() => goToTrack()}
            ></li>
            <li className={track ? 'selected' : ''} onClick={() => goToHuts()}></li>
          </ul>
        ) : null}
      </nav>

      {!started ? (
        <Homepage start={start} />
      ) : !regions ? (
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
