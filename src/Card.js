import React from "react";
import { useState } from "react";
import { CardDefault } from "./CardDefault";
import { CardFullInfo } from "./CardFullInfo";

export function Card({
  name,
  image_url,
  description,
  abv,
  uted_by,
  brewers_tips,
  first_brewed,
  food_pairing,
  ibu,
  ph,
  srm,
  tagline,
}) {
  const [isDefault, setIsDefault] = useState(true);

  function toggle() {
    setIsDefault(() => {
      return !isDefault;
    });
  }
  
  return (
    <div className="card">
      <button className="showButton" onClick={toggle}>
        {isDefault ? "Full Info" : "Back"}
      </button>
      {isDefault ? (
        <CardDefault
          name={name}
          image_url={image_url}
          description={description}
        />
      ) : (
        <CardFullInfo
          name={name}
          description={description}
          abv={abv}
          contributed_by={uted_by}
          brewers_tips={brewers_tips}
          first_brewed={first_brewed}
          food_pairing={food_pairing}
          ibu={ibu}
          ph={ph}
          srm={srm}
          tagline={tagline}
        />
      )}
    </div>
  );
}
