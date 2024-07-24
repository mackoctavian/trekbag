export default function ItemList({ items, setItems, setPacked, packed }) {
  const handleDelete = (value) => {
    setItems(items.filter((item) => item.id !== value.id));
  };

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} delete={handleDelete}></Item>
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label htmlFor="999">
        <input id="999" type="checkbox" checked={item.checked} />
        {item.name}
      </label>
      <button onClick={() => {}}>❌</button>
    </li>
  );
}
