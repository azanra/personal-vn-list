import { useState } from "react";
import PropTypes from "prop-types";
import Detail from "./component/detail";

export default function List({ list }) {
  const [haveRead, setHaveRead] = useState(false);
  function handleReadClick() {
    setHaveRead(!haveRead);
  }
  function checkIfRead() {
    let readStatus;
    haveRead === true ? (readStatus = "Have read") : (readStatus = "Not yet");
    return readStatus;
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
        <div className="read-status">
          <p>
            Read status :{" "}
            <button onClick={handleReadClick}>{checkIfRead()}</button>
          </p>
        </div>
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
