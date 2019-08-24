import React, { useState } from 'react'

export const GroupSizeQuestion = (props) => {
  return (
    <div className="question">
      <div>{props.groupSize}</div>
      <div className="q-number">
        02
      </div>
      <div className="q-text">
        How many Adventurers?
      </div>
      <div className="q-input">
        <ul>
          <li onClick={() => props.setGroupSize('1')}>1</li>
          <li onClick={() => props.setGroupSize('2')}>2</li>
          <li onClick={() => props.setGroupSize('3')}>3</li>
          <li onClick={() => props.setGroupSize('4')}>4</li>
          <li onClick={() => props.setGroupSize('5')}>5</li>
          <li onClick={() => props.setGroupSize('6')}>6</li>
          <li onClick={() => props.setGroupSize('7')}>7</li>
          <li onClick={() => props.setGroupSize('8')}>8</li>
          <li onClick={() => props.setGroupSize('9')}>9</li>
          <li onClick={() => props.setGroupSize('10+')}>10+</li>
        </ul>
      </div>
    </div>
  )
}