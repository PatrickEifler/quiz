import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchQuizzesIfNeeded } from '../actions/quizzes';
import QuizList from '../components/quizList';

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
      <div className='quizzes'>
        <h1>Quizzes</h1>
        <QuizList quizItems={this.props.quizzes.quizItems}/>
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
