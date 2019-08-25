import React, { useState, useEffect } from 'react'
import { getHutDetails } from '../api_access'


export const HutCard = (props) => {

    const [details, setDetails] = useState(null);



    useEffect(() => {
        getHutDetails(props.hut.assetId).then(details => {
            setDetails(details);
            console.log(details);
        });
    }, [props.hut.assetId]);


    return (
        <li className={"hutCardClass"}>
            <img src="http://via.placeholder.com/300"></img>
            <p className={"hutName"}>{props.hut.name}</p>
            <p className={"hutRegion"}>{props.hut.region}</p>
            <p>{details == null ? "Details is Null" : "Number of bunks: " + details.numberOfBunks}</p>
        </li>
    )
};