import "./App.css";
import {
  Header,
  Banner,
  Presentation,
  Products,
  Discoveries,
  Footer,
} from "./components";
import banner1Mobile from "./assets/banners/banner1Mobile.png";
import banner2Mobile from "./assets/banners/banner2Mobile.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner>
        <img src={banner1Mobile} alt="Banner Top" />
      </Banner>
      <Presentation />
      <Products />
      <Banner>
        <img src={banner2Mobile} alt="Banner Bottom" />
      </Banner>
      <Discoveries />
      <Footer />
    </div>
  );
}

export default App;
