import React, { useState } from "react";

const DropdownComponenet  = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `dropdown-component-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={event => setState(event.target.value)}
        onBlur={event => setState(event.target.value)}
        disabled = {!options.length}
      >
        <options>All</options>
        {options.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, setState];
};

export default DropdownComponenet;
