import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navi from '../components/navigation';
import NavigationConfig from '../config/navigation';
import EasyTransition from 'react-easy-transition';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    require('../scss/base.scss');
    
    const { location, isFetching, lastUpdated, children } = this.props;
    return (
      <div id='quiz-engine'>
        <Navi items={NavigationConfig} />

        <EasyTransition
            path={location.pathname}
            initialStyle={{ opacity: 0 }}
            transition="opacity 0.3s ease-in"
            finalStyle={{ opacity: 1 }}
        >
            {children}
        </EasyTransition>

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
