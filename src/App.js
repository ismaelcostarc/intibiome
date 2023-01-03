import "./App.css";
import {
  Header,
  Banner,
  Presentation,
  Products,
  Discoveries,
  Footer,
} from "./components";
import banner1Mobile from "./assets/img/banners/banner1Mobile.png";
import banner2Mobile from "./assets/img/banners/banner2Mobile.png";
import banner1Desktop from "./assets/img/banners/banner1Desktop.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner breakpoint="sm">
        <img src={banner1Mobile} alt="Banner Top" />
      </Banner>
      <Banner breakpoint="md">
        <img src={banner1Desktop} alt="Banner Top" />
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
