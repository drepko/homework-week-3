import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ModelDetailsContainer from './components/ModelDetailsContainer'

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" }

    this.updateSelection = this.updateSelection.bind(this)
  }

  updateSelection(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    const object = data[this.state.value]
    object.name = this.state.value
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: object

    })

  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.updateSelection}>
            <option value={this.state.value}>-- pick a model --</option>
            <option value={Object.keys(data)[0]}>{`${Object.keys(data)[0]} (${data["Ivel Z3"].year})`}</option>
            <option value={Object.keys(data)[1]}>{`${Object.keys(data)[1]} (${data["Bally Astrocade"].year})`}</option>
            <option value={Object.keys(data)[2]}>{`${Object.keys(data)[2]} (${data["Sord M200 Smart Home Computer"].year})`}</option>
            <option value={Object.keys(data)[3]}>{`${Object.keys(data)[3]} (${data["Commodore 64"].year})`}</option>
          </select>
          <input type="submit" value="Add" />
        </form>
        <ModelDetailsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addmodel: state.addmodel
  }
}

export default connect(mapStateToProps)(App)


