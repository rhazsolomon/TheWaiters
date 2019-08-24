import React, {useState} from 'react'

export const App = () => {
  const [region, setRegion] = useState(null);

  return (
    <div className="question">
      <div>{region}</div>
      <div className="q-number">
        01
      </div>
      <div className="q-text">
        What region are you interested in exploring?
      </div>
      <div className="q-input">
        <ul>
          <li onClick={() => setRegion('Northland')}>Northland</li>
          <li onClick={() => setRegion('Auckland')}>Auckland</li>
          <li onClick={() => setRegion('Waikato')}>Waikato</li>
          <li onClick={() => setRegion('Bay of Plenty')}>Bay of Plenty</li>
          <li onClick={() => setRegion('Gisborne')}>Gisborne</li>
          <li onClick={() => setRegion('Hawke\'s Bay')}>Hawke's Bay</li>
          <li onClick={() => setRegion('Taranaki')}>Taranaki</li>
          <li onClick={() => setRegion('Manawatu-Wanganui')}>Manawatu-Wanganui</li>
          <li onClick={() => setRegion('Wellington')}>Wellington</li>
          <li onClick={() => setRegion('Tasman')}>Tasman</li>
          <li onClick={() => setRegion('Nelson')}>Nelson</li>
          <li onClick={() => setRegion('Marlborough')}>Marlborough</li>
          <li onClick={() => setRegion('West Coast')}>West Coast</li>
          <li onClick={() => setRegion('Canterbury')}>Canterbury</li>
          <li onClick={() => setRegion('Otago')}>Otago</li>
          <li onClick={() => setRegion('Southland')}>Southland</li>
        </ul>
      </div>
    </div>
  )
}
