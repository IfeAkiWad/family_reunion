import React from 'react'
import Family from '../assets/Family.gif'

const Home = () => {
    return (
        <div>
            <h1 id='reunion-banner' >It's A Family Reunion!</h1>
            <h2 id='reunion-banner' >Come make a record of your whole family tree here in your own virtual family reunion</h2>
            <img id='family-tree' src={Family} alt="Gif..." />
        </div>
    )
}

export default Home
