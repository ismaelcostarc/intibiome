import "./App.css";
import {
  Header,
  Banner,
  Presentation,
  Products,
  Discoveries,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Presentation />
      <Products />
      <Banner />
      <Discoveries />
      <Footer />
    </div>
  );
}

export default App;
