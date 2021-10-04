import React from "react";

export function CardDefault({name, description, image_url}) {
    return (
      <div className="nameDescriptions">
        <div >
          <b> {name} </b>
          <span>{description}</span>
        </div>
        <img alt={name} src={image_url} />
     </div>
    );
  }

  //{name, description, image_url}