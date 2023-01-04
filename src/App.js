import { useState, useRef, useMemo } from "react";
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
import banner2Desktop from "./assets/img/banners/banner1Desktop.png";
import MobileMenu from "./components/MobileMenu";
import { useResize } from "./hooks/useResize";

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const componentRef = useRef();
  const { width } = useResize(componentRef);

  const isMobile = useMemo(() => (width < 768 ? true : false), [width]);

  return (
    <div className="App" ref={componentRef}>
      <Header isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} isMobile={isMobile}/>
      {isMenuOpened ? (
        <MobileMenu />
      ) : (
        <>
          {isMobile ? (
            <Banner>
              <img src={banner1Mobile} alt="Banner Top" />
            </Banner>
          ) : (
            <Banner>
              <img src={banner1Desktop} alt="Banner Top" />
            </Banner>
          )}

          <Presentation isMobile={isMobile} />
          <Products />

          {isMobile ? (
            <Banner>
              <img src={banner2Mobile} alt="Banner Bottom" />
            </Banner>
          ) : (
            <Banner>
              <img src={banner2Desktop} alt="Banner Bottom" />
            </Banner>
          )}

          <Discoveries />
          <Footer isMobile={isMobile}/>
        </>
      )}
    </div>
  );
}

export default App;
