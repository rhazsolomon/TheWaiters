import React, { useState } from 'react'

export const WalkLengthQuestion = (props) => {
  return (
    <div className="question">
      <div>{props.walkLength}</div>
      <div className="q-number">
        01
      </div>
      <div className="q-text">
        How long do you want the walk to be?
      </div>
      <div className="q-input">
        <ul>
          <li onClick={() => props.setWalkLength({min: 1, max: 5})}>1-5</li>
          <li onClick={() => props.setWalkLength({min: 6, max: 10})}>6-10</li>
          <li onClick={() => props.setWalkLength({min: 11, max: 15})}>10-</li>
          <li onClick={() => props.setWalkLength({min: 16, max: 20})}>x</li>
          <li onClick={() => props.setWalkLength({min: 1, max: 5})}>x</li>
        </ul>
      </div>
    </div>
  )
}