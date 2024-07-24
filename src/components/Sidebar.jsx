import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ items, setItems }) {
  return (
    <div className="sidebar">
      <AddItemForm items={items} setItems={setItems} />
      <ButtonGroup />
    </div>
  );
}
