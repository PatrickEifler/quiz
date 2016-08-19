import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchQuizzesIfNeeded } from '../actions/quizzes';

class Quizzes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuizzesIfNeeded());
  }

  render() {
    console.log('quiz container props', this.props);
    return (
      <div>
        Implement Quizzes Page
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    quizzes: state.quizzes
  };
}

export default connect(mapStateToProps)(Quizzes);
