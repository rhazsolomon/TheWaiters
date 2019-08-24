import React, { useState } from 'react'

export const CardsContainer = (props) => {
    var cardElements = props.cardElements
    
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
                    <li onClick={() => props.setRegion('Northland')}>Northland</li>
                    <li onClick={() => props.setRegion('Auckland')}>Auckland</li>
                    <li onClick={() => props.setRegion('Waikato')}>Waikato</li>
                    <li onClick={() => props.setRegion('Bay of Plenty')}>Bay of Plenty</li>
                    <li onClick={() => props.setRegion('Gisborne')}>Gisborne</li>
                    <li onClick={() => props.setRegion('Hawke\'s Bay')}>Hawke's Bay</li>
                    <li onClick={() => props.setRegion('Taranaki')}>Taranaki</li>
                    <li onClick={() => props.setRegion('Manawatu-Wanganui')}>Manawatu-Wanganui</li>
                    <li onClick={() => props.setRegion('Wellington')}>Wellington</li>
                    <li onClick={() => props.setRegion('Tasman')}>Tasman</li>
                    <li onClick={() => props.setRegion('Nelson')}>Nelson</li>
                    <li onClick={() => props.setRegion('Marlborough')}>Marlborough</li>
                    <li onClick={() => props.setRegion('West Coast')}>West Coast</li>
                    <li onClick={() => props.setRegion('Canterbury')}>Canterbury</li>
                    <li onClick={() => props.setRegion('Otago')}>Otago</li>
                    <li onClick={() => props.setRegion('Southland')}>Southland</li>
                </ul>
            </div>
        </div>
    )
}