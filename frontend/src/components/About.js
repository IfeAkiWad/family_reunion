import React from 'react'
import FamilyReunionImage from '../assets/FamilyReunionImage.jpeg'

const About = () => {
    return (
        <div>
            <img className='family-reunion-art' src={FamilyReunionImage} alt='family-pic' />
                <h1 id='about-text'>
                    Putting together your family tree can be a bit tedious. We provide a different approach towards your experience. We make it a reunion! Create a virtual park, and add all of your family members! Have fun!
                </h1>
        </div>
    )
}
export default About
