import huts from './huts.json'
import tracks from './tracks.json'

const withDistanceToHut = (track, hut) => ({
  track,
  distance: Math.sqrt((hut.x - track.lng) ** 2 + (hut.y - track.lat) ** 2)
})

const reducer = (best, candidate) => {
  return (best === null || candidate.distance < best.distance)
    ? candidate
    : best
}

export default huts.map(hut => {
  const bestTrack = tracks
    .map(track => withDistanceToHut(track, hut))
    .reduce(reducer)
    .track

  return {
    ...hut,
    trackId: bestTrack.id
  }
})
