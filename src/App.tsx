import Cta from "./components/Cta";
import FooterCard from "./components/FooterCard";
import Header from "./components/header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="w-full relative md:flex">
      <Header />
      <main className="w-full px-6  mt-[85px] md:mt-0 md:pt-5 lg:px-12">
        <Hero />
        <Cta />
        <FooterCard/>
      </main>
    </div>
  );
}

export default App;
