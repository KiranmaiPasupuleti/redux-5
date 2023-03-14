import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './store/actions'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        
        Count : {this.props.count} 
        <br/>
        {this.props.loading && <h1>Loading.......</h1>}
        <br/>
        <button onClick={() => this.props.increment(1)}>Increment</button>
        <button onClick={() => this.props.decrement(1)}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    count : state.count,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    increment: (value) => 
    dispatch(actionCreators.increment(value)),

    decrement : (value) => 
    dispatch({
      type: 'DECREMENT',
      value
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)