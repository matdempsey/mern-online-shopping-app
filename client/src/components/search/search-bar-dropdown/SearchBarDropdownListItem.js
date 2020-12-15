import React from "react";

import "./SearchBarDropdownListItem.css";

const SearchBarDropdownListItem = (props) => {
  const { name } = props;

  return (
    <div>
      <img
        className="sb-dd-li-img"
        src="https://ipsumimage.appspot.com/60x60"
        alt={`${name}`}
      />
      <span>{name}</span>
    </div>
  );
};

export default SearchBarDropdownListItem;
