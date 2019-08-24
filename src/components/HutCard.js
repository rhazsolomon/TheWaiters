import React, { useState } from 'react'

export const HutCard = (props) => {
    return (
        <div className={"hutCardClass"}>
            <h5>{props.hut.name}</h5>
            <h6>{props.hut.region}</h6>
        </div>
    )
};