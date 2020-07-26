import React from "react";

export const Card = (props) => {
  return (
    <div className="col mb-4">
      <div className="card">
        <img
          src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
          className="card-img-top"
          alt={props.monster.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.monster.name}</h5>
          <p className="card-text">{props.monster.email}</p>
        </div>
      </div>
    </div>
  );
};
