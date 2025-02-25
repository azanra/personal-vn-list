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
        {renderDetail}
        <ul>publisher :{renderPublisher}</ul>
        {renderRelation !== undefined ? (
          <ul>relation :{renderRelation}</ul>
        ) : null}
      </ul>
    </>
  );
}
