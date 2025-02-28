import { useState } from "react";
import PropTypes from "prop-types";
import Detail from "./component/detail";

const booleanObj = {
  true: true,
  false: false,
};

export default function List({ list }) {
  const [haveRead, setHaveRead] = useState(false);
  const [rating, setRating] = useState(0);

  function handleReadClick(event) {
    setHaveRead(booleanObj[event.target.value]);
  }
  function handleSetRating(event) {
    setRating(Number(event.target.value));
  }
  return (
    <>
      <div className="header-section">
        <h2>{list.title}</h2>
        <p>{list.romaji}</p>
      </div>
      <div className="image-section">
        <img
          src={list.image}
          alt={list.alias}
          style={{
            width: "300px",
            borderRadius: "5px",
          }}
        />
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="read-status">
            <label htmlFor="status-input">Read Status : </label>
            <select
              name="haveRead"
              id="status-input"
              value={haveRead}
              onChange={handleReadClick}
            >
              <option value={true}>Have Read</option>
              <option value={false}>Not Yet</option>
            </select>
          </div>
          <div className="rating">
            <label htmlFor="rating-input">Rating: </label>
            <input
              type="number"
              id="rating-input"
              onChange={handleSetRating}
              value={rating}
              min={0}
              max={10}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
      <Detail list={list} />
    </>
  );
}

List.propTypes = {
  list: PropTypes.object,
  romaji: PropTypes.string,
  alias: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
