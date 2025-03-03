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
          <div className="read-status mb-5 mt-20">
            <label htmlFor="status-input" className="mr-10">
              Read Status :{" "}
            </label>
            <select
              name="haveRead"
              id="status-input"
              value={haveRead}
              onChange={handleReadClick}
              className="border-1 rounded-md p-1"
            >
              <option value={true}>Have Read</option>
              <option value={false}>Not Yet</option>
            </select>
          </div>
          <div className="rating mb-5">
            <label htmlFor="rating-input" className="mr-20.5">
              Rating :{" "}
            </label>
            <input
              type="number"
              id="rating-input"
              name="rating"
              onChange={handleSetRating}
              value={rating}
              min={0}
              max={10}
              className="border-1 rounded-md p-2"
            />
          </div>
          <div className="review mb-5 flex items-center">
            <label htmlFor="review-input" className="mr-20.5">
              Review :{" "}
            </label>
            <textarea
              name="review"
              id="review-input"
              value={review}
              onChange={handleSetReview}
              className="border-1 rounded-md p-1"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" rounded-md px-7 py-2 mb-5 bg-violet-500 hover:bg-violet-600 text-white font-bold active:bg-blue-500"
          >
            Update
          </button>
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
