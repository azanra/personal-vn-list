import PropTypes from "prop-types";
import Detail from "./component/detail";

export default function List({ list }) {
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
