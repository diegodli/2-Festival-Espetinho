import {
  Navbar,
  Hero,
  LogoTicker,
  Stats,
  About,
  Voting,
  Fane,
  Participate,
  Faq,
  Footer,
} from './components';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LogoTicker />
        <Stats />
        <About />
        <Voting />
        <Participate />
        <Fane />
        <Faq />
      </main>

      <Footer />
    </>
  );
}

export default App;
