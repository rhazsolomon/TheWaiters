import React, { useState } from 'react'
import {HutCard} from "./HutCard";

export const CardsContainer = (props) => {
    var cardElements = props.cardElements
    
    return (
        <div>
            <ul>
                {cardElements.map(card => <HutCard hut={card}/>)}
            </ul>
        </div>
    )
}