import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ handleAddItems }) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItems={handleAddItems} />
      <ButtonGroup />
    </div>
  );
}
