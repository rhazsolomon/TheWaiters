import React, { useState } from 'react'
import {HutCard} from "./HutCard";

export const CardsContainer = (props) => {
    var cardElements = props.cardElements

    return (
        <ul className={"cards-container"}>
            {cardElements.slice(0, 10).map(card => <HutCard toggleSelectedHut={props.toggleSelectedHut} key={card.name} hut={card}/>)}
        </ul>
    )
}