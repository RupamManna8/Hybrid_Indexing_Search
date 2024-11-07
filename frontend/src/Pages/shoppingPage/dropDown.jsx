import React from "react";

const Dropdown = ({ dropdown, setQuery, setResults, setDropdown, setDropdownStyle }) => {
  return (
    <React.Fragment>
      <div className="dropdown">
        {dropdown.map((product) => (
          <div key={product.id} className="dropDownElement" onClick={() => {
            setQuery(product.name);
            setDropdown([]);
            setResults([product]);
            setDropdownStyle("2px solid #e5e7eb");
          }}>
            {product.name}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
