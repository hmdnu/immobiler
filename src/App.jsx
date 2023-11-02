import { Home, Navbar, AboutUs, Houses, Footer } from "./components";

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

      {/* <Footer />  */}
    </main>
  );
}
