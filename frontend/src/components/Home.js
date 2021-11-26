import React from 'react'
import Family from '../assets/Family.gif'

const Home = () => {
    return (
        <div>
            <img id='family-tree' src={Family} alt="Gif..." />
            <h1 id='reunion-h2' >It's A Family Reunion!</h1>
            <h3 id='reunion-h3' >Come make a record of your whole family tree in your own virtual family reunion</h3>
        </div>
    )
}

export default Home
