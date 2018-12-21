import React from 'react';

export default function CheeseList(props) {
  const cheeseList = props.cheeses.map(cheese => <li>{cheese}</li>);
  return <ul>{cheeseList}</ul>;
}