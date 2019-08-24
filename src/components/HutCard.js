import React, { useState } from 'react'

export const HutCard = (props) => {
  return (
    <div className={"hutCardClass"}>
      <p>{props.hut.name}</p>
    </div>
  )
}