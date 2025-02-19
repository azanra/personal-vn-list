import PropTypes from "prop-types";

export default function List({ props }) {
  return (
    <>
      <div className="header-section">
        <h2>{props.romaji}</h2>
        <span>{props.alias}</span>
      </div>
      <div className="image-section">
        <img
          src={props.image}
          alt={props.alias}
          style={{
            width: "300px",
            borderRadius: "5px",
          }}
        />
      </div>
    </>
  );
}

List.propTypes = {
  props: PropTypes.object,
};
