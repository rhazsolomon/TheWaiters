import tracks from './tracks.json'
import huts from './huts-with-track-ids'

export default tracks.map(track => {
  const hutOnTrack = huts.find(hut => hut.trackId === track.id)
  const region = hutOnTrack ? hutOnTrack.region : null
  return { ...track, region }
})
