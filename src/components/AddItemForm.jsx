import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ handleAddItems }) {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    handleAddItems(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
