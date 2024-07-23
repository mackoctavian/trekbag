import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header></Header>
        <ItemList></ItemList>
        <Sidebar></Sidebar>
      </main>
      <Footer />
    </>
  );
}

export default App;
