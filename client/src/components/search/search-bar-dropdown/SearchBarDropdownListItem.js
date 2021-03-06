import React from "react";

import "./SearchBarDropdownListItem.css";

const SearchBarDropdownListItem = (props) => {
  const { name, imagePath } = props;

  return (
    <div>
      <img
        className="sb-dd-li-img"
        src={
          imagePath
            ? process.env.PUBLIC_URL + imagePath
            : "https://ipsumimage.appspot.com/60x60"
        }
        alt={`${name}`}
      />
      <span>{name}</span>
    </div>
  );
};

export default SearchBarDropdownListItem;
