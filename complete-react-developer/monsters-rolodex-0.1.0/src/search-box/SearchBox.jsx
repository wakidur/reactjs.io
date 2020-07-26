import React from "react";

export const SearchBox = (props) => {
  return (
    <form>
      <div className="form-row">
        <div className=" col-md-6 mb-3 ml-auto mr-auto">
          <input
            type="search"
            className="form-control"
            placeholder="Search Monsters"
            onChange={props.onSearchChange}
          />
        </div>
      </div>
    </form>
  );
};
