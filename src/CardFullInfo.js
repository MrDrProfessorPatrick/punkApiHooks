import React from "react";

export function CardFullInfo({
  name,
  description,
  abv,
  contributed_by,
  brewers_tips,
  first_brewed,
  food_pairing,
  ibu,
  ph,
  srm,
  tagline
}) {
  return (
    <div className = "fullinfo">
      <b> Name: {name} </b>
      <span>
        <b>Description:</b> {description}
      </span>{" "}
      <br />
      <span>
        <b>ABV:</b> {abv}
      </span>{" "}
      <br />
      <span>
        <b>Contributed by:</b>
        {contributed_by}
      </span>{" "}
      <br />
        <span>
        <b>Brewer Tips:</b>
        {brewers_tips}
      </span>{" "}
      <br />
      <span>
        <b>First Brewed:</b>
        {first_brewed}
      </span>{" "}
      <br />
      <span>
        <b>FoodPairing:</b>
        {food_pairing}
      </span>
      <span>
      <br/>
        <b>IBU:</b>
        {ibu}
      </span>
      <br />
      <span>
        <b>PH:</b>
        {ph}
      </span>{" "}
      <br />
      <span>
        <b>SRM:</b>
        {srm}
      </span>{" "}
      <br />
      <span>
        <b>Tag Line:</b>
        {tagline}
      </span>
    </div>
  );
}
