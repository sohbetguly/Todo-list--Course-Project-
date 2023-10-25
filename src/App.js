import "./App.css";
import Counter from "./Counter";
import Footer from "./Footer";
import List from "./List";
import Navbar from "./Navbar";

function App() {
  const title = "This is title";
  const parTitle = "This is paragraph title";
  return (
    <div className="App">
      <Navbar myTitle={title} />
      <h1>{title}</h1>
      {/* <Counter /> */}
      <List />
      <Footer parTitle={parTitle} />
    </div>
  );
}

export default App;
