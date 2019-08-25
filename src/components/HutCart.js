import React, { useState, useEffect } from 'react'

export const HutCart = (props) => {

    useEffect(() => {
        console.log("useEffect");
    }, [props.selectedHuts]);

    return (
        <div>
            <h4>Trip</h4>
            <ul className={"hutCartClass"}>
                {props.selectedHuts.map(hut => <li className={"cardItem"} key={hut.name} onClick={() => props.toggleSelectedHut(hut)}>{hut.name}</li>)}
            </ul>
        </div>
    )
};