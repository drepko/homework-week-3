import * as React from 'react'
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'

class ModelDetailsContainer extends React.Component {

    render () {
        const detail = this.props.addmodel
        return <ModelDetails detail={detail}/>
    }
}

const mapStateToProps = (state) => {
    return {
      addmodel: state.addmodel
    }
  }

export default connect(mapStateToProps)(ModelDetailsContainer)
