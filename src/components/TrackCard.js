import React from 'react'

// https://maps.googleapis.com/maps/api/staticmap?center=${track.lat},${track.lng}&zoom=12&size=300x300&markers=${track.lat},${track.lng}&key=AIzaSyB9jEb3PCeRxduSFdP-Eh0fXSqgNY1MBkA
const path =
  'https://maps.googleapis.com/maps/api/staticmap?center=-37.047012,175.715525&zoom=12&size=300x300&markers=-37.047012,175.715525&key=AIzaSyB9jEb3PCeRxduSFdP-Eh0fXSqgNY1MBkA'

export const TrackCard = ({ track, select }) => (
  <li className="track" onClick={() => select()}>
    {track.name}
  </li>
)
