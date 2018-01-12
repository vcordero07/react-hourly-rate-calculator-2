import React from "react";

export default function NumberInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="number"
        onChange={props.onChange}
        value={props.value}
        id={props.id}
        min={props.min}
        max={props.max}
      />
    </div>
  );
}
