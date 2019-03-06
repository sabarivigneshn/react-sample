import React from 'react';

const a = [1, 10, 100, 1000, 10000];
const Lists = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.address}</td>
    </tr>
  )
}

export default Lists