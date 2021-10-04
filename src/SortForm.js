import React from "react";
import { useState } from "react";

export function SortForm({sortList}) {
  const [sortParametr, setSortParametr] = useState("abv");
  const [sortOption, setSortOption] = useState(null);

  function handleChange(e) {
    setSortParametr(e.target.value);
  }

  function handleRadioChange(e) {
    setSortOption(e.target.value);
  }

  function handleSortChanges() {
    if (sortOption === null) {
        console.log("Choose sort order");
      }
      sortList(sortParametr, sortOption)
  }

  return (
    <div className="sortForm">
      <label for="sort">Option to sort</label>
      <select
        id="sort"
        name="sort"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option name="abv" value="abv">
          abv
        </option>
        <option name="ibu" value="ibu">
          ibu
        </option>
        <option name="ph" value="ph">
          ph
        </option>
        <option name="srm" value="srm">
          srm
        </option>
      </select>
      <br />
      <form>
        <input
          type="radio"
          id="fromBiggest"
          value="fromBiggest"
          name="checkOrder"
          onChange={(e) => {
            handleRadioChange(e);
          }}
        /> 
         
        <label for="fromBiggest">
          Sort from the biggest value to the smallest
        </label>
        <br /> 
        <input
          type="radio"
          id="fromSmallest"
          value="fromSmallest"
          name="checkOrder"
          onChange={(e) => {
            handleRadioChange(e);
          }}
        />
         
        <label for="fromSmallest">
          Sort from the smallest value to the biggest
        </label>
        <br />
        <input
          type="button"
          value="Sort"
          className="btnSort"
          onClick={handleSortChanges}
        />
      </form>
    </div>
  );
}
