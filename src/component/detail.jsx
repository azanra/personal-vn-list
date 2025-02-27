import PropTypes from "prop-types";

function createArrayFromObject(object, array) {
  for (let key in object) {
    array.push(`${key} : ${object[key]}`);
  }
}

function renderList(array) {
  return array?.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
}

export default function Detail({ list }) {
  let arrList = [];
  const {
    romaji,
    image,
    id,
    title,
    publisher,
    relation,
    links,
    ...detailList
  } = list;

  createArrayFromObject(detailList, arrList);
  let renderDetail = renderList(arrList);
  let renderPublisher = renderList(publisher);
  let renderRelation = renderList(relation);
  return (
    <>
      <ul>
        <ul>{renderDetail} </ul>
        <ul>publisher :{renderPublisher}</ul>
        {renderRelation !== undefined && <ul>relation :{renderRelation}</ul>}
      </ul>
    </>
  );
}

Detail.propTypes = {
  list: PropTypes.object,
  detailList: PropTypes.object,
  romaji: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.links,
  publisher: PropTypes.array,
  relation: PropTypes.array,
  links: PropTypes.array,
};
