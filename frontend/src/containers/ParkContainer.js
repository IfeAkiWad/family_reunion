import React, { Component } from 'react'
import {connect} from 'react-redux'
import ParkComponent from '../components/ParkComponent'

class ParkContainer extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.allParks)}
                 {this.props.allParks.map( (parks, index) => {
                     return <ParkComponent key={index} getPark={parks} />
                 })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allParks: state.parkReducer.parks,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(ParkContainer)
