import { useState } from "react";
import PropTypes from "prop-types";
import Detail from "./component/detail";

export default function List({ list }) {
  const [haveReadStatus, setHaveReadStatus] = useState("");
  const [haveRead, setHaveRead] = useState(false);
  const [rating, setRating] = useState(0);

  function handleReadClick() {
    checkIfRead();
    setHaveRead(!haveRead);
  }
  function checkIfRead() {
    haveRead ? setHaveReadStatus("Have read") : setHaveReadStatus("Not yet");
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
            <p>Read status : {haveReadStatus}</p>
            <button onClick={handleReadClick}>Update</button>
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
