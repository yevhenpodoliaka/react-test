import React from 'react';

const TodoFilter = ({ value, onChangeFilter }) => {
  return (
    <label>
      filter
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
};

export default TodoFilter;
