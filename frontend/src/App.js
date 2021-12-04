import React, { Component } from 'react'
import './App.css';

import { connect } from 'react-redux'
import { fetchParks } from './actions/parkAction';
import { fetchReunions } from './actions/reunionAction';
import { fetchPeople } from './actions/personAction'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ParkContainer from './containers/ParkContainer';
 

class App extends Component {
  componentDidMount() {
    this.props.fetchParks()
    this.props.fetchPeople()
    this.props.fetchReunions()
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
            <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />}/>
            <Route path="/test" element={<ParkContainer />}/>
            </Routes>
        </Router>
      </div>
    )
  }
}

export default connect(null, { fetchReunions, fetchPeople, fetchParks })(App)