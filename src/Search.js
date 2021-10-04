import React from "react";
import { useState } from "react";

export function Search({filterList}) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
    filterList(e.target.value);
  }

  return (
    <div className = "search">
      <label>Search</label>
      <input value={value} onChange={(e) => handleChange(e)} />
    </div>
  );
}
