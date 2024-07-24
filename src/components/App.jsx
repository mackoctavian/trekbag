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
        <Sidebar items={items} setItems={setItems}></Sidebar>
      </main>
      <Footer />
    </>
  );
}

export default App;
