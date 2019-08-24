import React, { useState } from 'react'
import {HutCard} from "./HutCard";

export const RegionQuestion = (props) => {

    var regions = props.regions;

    return (
        <div className="question">
            <div>{props.region}</div>
            <div className="q-number">
                01
            </div>
            <div className="q-text">
                What region are you interested in exploring?
            </div>
            <div className="q-input">
                <ul>
                    {regions.map(region => <li key={region} onClick={() => props.setRegion(region)}>{region}</li>)}
                </ul>
            </div>
        </div>
    )
}