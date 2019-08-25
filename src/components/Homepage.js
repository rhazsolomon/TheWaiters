import React from 'react'
import logo from '../img/hh_logo_col.png'
import trees from '../img/Trees.png'

export const Homepage = ()=>{
    return (
    <div className="frontpage"> 


            <h1 className="mainTitle"> Welcome to <br/> Hut Hunter </h1>
            <img className="mainHutImg" src={logo} alt='hut logo'/>
            <p className="mainMessage">Going on an overnight walk with your friends and need a hut stay in? <br/>Answer a couple of short questions and we'll find the best huts for your needs.</p>

            <button className="beginButton" onClick={()=>console.log("Button Clicked")}>Begin</button>

            <div className="greenStrip"> </div> 
    </div>
    )}