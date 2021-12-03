import React, { Component } from 'react'
import {connect} from 'react-redux'

class ParkContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allParks: state.daycares,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(ParkContainer)
