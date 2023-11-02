import { Home, Navbar, AboutUs, Houses, HouseType, Footer } from "./components";

export default function App() {
  return (
    <main className="tracking-widest">
      <Navbar />

      <section>
        <Home />
      </section>

      <section className="main-layout">
        <AboutUs />
      </section>

      <section>
        <Houses />
      </section>

      <section className="main-layout">
        <HouseType />
      </section>

      {/* <Footer />  */}
    </main>
  );
}
