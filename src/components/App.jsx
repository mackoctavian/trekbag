import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { initialItems } from "../lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);
  const [packed, setPacked] = useState(false);

  const handleAddItems = (name) => {
    let newItem = {
      name,
      packed: false,
      id: new Date().getTime(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header></Header>
        <ItemList
          items={items}
          setItems={setItems}
          pack={packed}
          setPack={setPacked}
        ></ItemList>
        <Sidebar handleAddItems={handleAddItems}></Sidebar>
      </main>
      <Footer />
    </>
  );
}

export default App;
