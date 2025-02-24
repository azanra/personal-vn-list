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
  let renderRel = renderList(relation);
  return (
    <>
      <ul>
        {renderDetail}
        <ul>publisher :{renderPublisher}</ul>
        <ul>relation : {renderRel}</ul>
      </ul>
    </>
  );
}
