import React, { Component } from 'react'
import './App.css';

import { connect } from 'react-redux'
import { fetchParks } from './actions/parkAction';
import { fetchReunions } from './actions/reunionAction';
import { fetchPeople } from './actions/personAction'

class App extends Component {
  componentDidMount() {
    this.props.fetchParks()
    this.props.fetchPeople()
    this.props.fetchReunions()
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(null, { fetchReunions, fetchPeople, fetchParks })(App)