import React from "react";

import "./SearchBarDropdownListItem.css";

const SearchBarDropdownListItem = (props) => {
  const { name, imagePath } = props;

  return (
    <div>
      <img
        className="sb-dd-li-img"
        src={process.env.PUBLIC_URL + imagePath}
        alt={`${name}`}
      />
      <span>{name}</span>
    </div>
  );
};

export default SearchBarDropdownListItem;
