import Featured from "../../components/featured";
import Hero from "../../components/hero";
import NewArrival from "../../components/newArrival";
import "./style.css";
import Videos from "./../../components/videos/index";
import Casts from "../../components/casts";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Hero />
      </header>
      <main>
        <section>
          <Featured />
        </section>
        <section>
          <NewArrival />
        </section>
        <section>
          <Videos />
        </section>
        <section>
          <Casts />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
