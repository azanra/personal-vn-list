import { useState } from "react";
import PropTypes from "prop-types";
import Detail from "./component/detail";
import "./style/style.css";

const booleanObj = {
  true: true,
  false: false,
};

export default function List({ list }) {
  const [haveRead, setHaveRead] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  function handleReadClick(event) {
    setHaveRead(booleanObj[event.target.value]);
  }
  function handleSetRating(event) {
    setRating(Number(event.target.value));
  }
  function handleSetReview(event) {
    setReview(event.target.value);
  }
  return (
    <div className="p-10 flex">
      <div className="header">
        <div className="header-section">
          <h2 className="text-6xl">{list.title}</h2>
          <p className="text-xl mt-3">{list.romaji}</p>
        </div>
        <div className="image-section ml-150">
          <img
            src={list.image}
            alt={list.alias}
            style={{
              width: "300px",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
      <div className="main text-s w-[600px] p-5">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert("Update Success");
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
              name="rating"
              onChange={handleSetRating}
              value={rating}
              min={0}
              max={10}
            />
          </div>
          <div className="review">
            <label htmlFor="review-input">Review : </label>
            <textarea
              name="review"
              id="review-input"
              value={review}
              onChange={handleSetReview}
            ></textarea>
          </div>
          <button type="submit">Update</button>
        </form>
        <Detail list={list} />
      </div>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.object,
  romaji: PropTypes.string,
  alias: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
