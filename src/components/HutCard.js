import React, { useState, useEffect } from 'react'
import { getHutDetails } from '../api_access'

export const HutCard = props => {
  const [details, setDetails] = useState(null)

  useEffect(() => {
    getHutDetails(props.hut.assetId).then(details => {
      setDetails(details)
      // console.log(details);
    })
  }, [props.hut.assetId])

  return (
    <li className="hut-card">
      <img
        src={
          details == null
            ? 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
            : details.introductionThumbnail
        }
      ></img>
      <p className={'hutName'}>{props.hut.name}</p>
      <p className={'hutRegion'}>{props.hut.region}</p>
      <p>{details == null ? ' ' : details.numberOfBunks + ' bunks'}</p>
      <div className="actions">
        <a
          className="btn detail-btn"
          target="_blank"
          href={details == null ? '' : details.staticLink}
        >
          Details
        </a>
        <a className="btn fav-btn" onClick={() => props.toggleSelectedHut(props.hut)}>
          ♡
        </a>
      </div>
    </li>
  )
}
