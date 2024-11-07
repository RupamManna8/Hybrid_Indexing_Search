import React from "react";

const Filter = ({
  priceHightoLow,
  priceLowtoHigh,
  priceFilter,
  setPriceFilter,
  settingPriceRange,
  handleClear,
  searchForPhone,
  searchForAudio,
  searchForCamera,
  searchForSpeaker,
  searchForTablet,
  searchForLaptop,
}) => {
  return (
    <React.Fragment>
      <div className="filter">
        <h2>Search for</h2>
        <div className="searchFor">
          <div className="phone" onClick={searchForPhone}>
            Phones
          </div>
          <div className="laptop" onClick={searchForLaptop}>
            Laptop
          </div>
          <div className="speaker" onClick={searchForSpeaker}>
            Speaker
          </div>
          <div className="earPhones" onClick={searchForAudio}>
            Ear Phones
          </div>
          <div className="camara" onClick={searchForCamera}>
            Camera
          </div>
          <div className="tablet" onClick={searchForTablet}>
            Tablet
          </div>
        </div>
        <h2>Sort</h2>
        <div>
          <input
            type="radio"
            name="priceSort"
            id="highToLow"
            value="highToLow"
            onChange={priceHightoLow}
          />
          <label htmlFor="highToLow">High to Low</label>
        </div>
        <div>
          <input
            type="radio"
            name="priceSort"
            id="lowToHigh"
            value="lowToHigh"
            onChange={priceLowtoHigh}
          />
          <label htmlFor="lowToHigh">Low to High</label>
        </div>
        <h2>Price</h2>
        <div>
          <input
            type="range"
            name="priceRange"
            id="priceRange"
            value={priceFilter}
            min={500}
            max={200000}
            onInput={(e) => setPriceFilter(e.target.value)}
          />
          <output>{priceFilter}₹</output>
          <button onClick={settingPriceRange}>Apply</button>
        </div>
        <div>
          <button type="button" className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Filter;
