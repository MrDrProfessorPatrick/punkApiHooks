import React from "react";
import { Card } from "./Card";

export function Cards({ data }) {
  console.log("props.props", data); // list with arrays
  return data.map((item) => (
    <Card
      key={item.id}
      name={item.name}
      image_url={item.image_url}
      description={item.description}
      abv={item.abv}
      contributed_by={item.uted_by}
      brewers_tips={item.brewers_tips}
      first_brewed={item.first_brewed}
      food_pairing={item.food_pairing}
      ibu={item.ibu}
      ph={item.ph}
      srm={item.srm}
      tagline={item.tagline}
    />
  ));
}
