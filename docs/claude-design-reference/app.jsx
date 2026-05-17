/* Root composition + mount */
function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Pillars />
        <Versus />
        <Process />
        <Operators />
        <CodeSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
