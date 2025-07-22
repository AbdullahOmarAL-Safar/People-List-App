function List(props) {
  const category = props.category;
  const itemList = props.item;


  const listElements = itemList.map(item => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-item">{listElements}</ol>
    </>
  );
}

export default List;

