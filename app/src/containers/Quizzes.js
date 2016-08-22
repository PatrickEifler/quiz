import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchQuizzesIfNeeded } from '../actions/quizzes';
import quizList from '../components/quizList';

class Quizzes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuizzesIfNeeded());
  }

  render() {
    return (
      <div>
        <h1>Quizzes</h1>
        <quizList items={this.props.quizzes}/>
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
