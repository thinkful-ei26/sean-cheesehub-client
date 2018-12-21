import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses())
  }
  render() {
    const cheeseList = this.props.cheeses.map((cheese, index) => <li key={index}>{cheese}</li>);
    return <ul>{cheeseList}</ul>;
  }
}

const mapStateToProps = state => ({cheeses: state.cheese.cheeses});

export default connect(mapStateToProps)(CheeseList);
