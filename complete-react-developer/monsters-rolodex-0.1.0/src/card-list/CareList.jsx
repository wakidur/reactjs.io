import React from "react";
import { Card } from "../card/Card";

export const CareList = (props) => {
  return (
    <div className="row row-cols-1 row-cols-md-4">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
