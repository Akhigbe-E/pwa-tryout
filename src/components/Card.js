import React from "react";

const Card = ({ id, name, email, src }) => {
  return (
    <div className="tc bg-light-green dib br3 ma3 ma2 grow  shadow-5">
      <img src={src} alt={`robot ${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
