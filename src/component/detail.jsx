function createArrayFromObject(object, array) {
  for (let key in object) {
    array.push(`${key} : ${object[key]}`);
  }
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

  return <></>;
}
