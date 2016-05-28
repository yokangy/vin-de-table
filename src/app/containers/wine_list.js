import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class WineList extends Component {
  componentWillMount() {
    this.props.fetchWines();
  }

  renderWines(wine) {
    return (
      <div>
        { wine.vintage } { wine.winery } { wine.varietal}
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.props.wines.map(this.renderWines) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wines: state.wines
  }
}

export default connect(mapStateToProps, actions)(WineList);