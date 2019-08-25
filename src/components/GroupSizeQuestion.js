import React from 'react'

export const GroupSizeQuestion = props => {
  return (
    <div className="question">
      <div>{props.groupSize}</div>
      <div className="q-number">02</div>
      <div className="q-text">How many Adventurers?</div>
      <div className="q-input">
        <ul className="group-size-opts">
          <li className="group-size-opt" onClick={() => props.setGroupSize('1')}>
            1
          </li>
          <li className="group-size-opt" onClick={() => props.setGroupSize('2')}>
            2
          </li>
          <li className="group-size-opt" onClick={() => props.setGroupSize('3')}>
            3
          </li>
          <li className="group-size-opt" onClick={() => props.setGroupSize('4')}>
            4
          </li>
          <li className="group-size-opt" onClick={() => props.setGroupSize('5')}>
            5
          </li>
          <li className="group-size-opt" onClick={() => props.setGroupSize('6')}>
            6
          </li>
          <li className="group-size-opt" onClick={() => props.setGroupSize('7')}>
            7
          </li>
          <li className="group-size-opt" onClick={() => props.setGroupSize('8')}>
            8
          </li>
          <li className="group-size-opt" onClick={() => props.setGroupSize('9')}>
            9
          </li>
          <li className="group-size-opt" onClick={() => props.setGroupSize('10+')}>
            10+
          </li>
        </ul>
      </div>
    </div>
  )
}
