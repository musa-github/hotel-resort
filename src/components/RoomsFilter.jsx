import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// get unique types
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
function RoomsFilter({ rooms }) {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);

  // get all unique value
  let types = getUnique(rooms, "type");

  // add all
  types = ["all", ...types];
  // // map jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guest type */}
        <div className="form-group">
          <label htmlFor="capacity">Guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guest type */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price"> room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/*end room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size"> room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/*end size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <label htmlFor="breakfast">breakfast</label>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
          </div>
          <div className="single-extra">
            <label htmlFor="pets">pets</label>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  );
}

export default RoomsFilter;
