import React from 'react'
import { TrackCard } from './TrackCard'
import tracks from '../data/tracks-with-regions'

const listFormatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })

export const TrackSelector = ({ regions, setTrack }) => {
  const tracksInRegion = tracks.filter(track => regions.includes(track.region))

  return (
    <div className="question">
      <div className="q-number">03</div>
      <div className="q-text">Which track in {listFormatter.format(regions)} would you like?</div>
      <div className="q-input">
        <ul className="track-list">
          {tracksInRegion.slice(0, Math.floor(Math.random() * 4 + 8)).map(track => (
            <TrackCard key={track.id} track={track} select={() => setTrack(track)} />
          ))}
        </ul>
      </div>
    </div>
  )
}
