import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import { fetchCombosIfNeeded } from '../actions/combos';

class Quiz extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    //dispatch(fetchcombosIfNeeded());
    console.log('quiz container props', this.props);
  }

  render() {
    return (
      <div>
        Implement Quiz Page
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state.quiz
  };
}

export default connect(mapStateToProps)(Quiz);
