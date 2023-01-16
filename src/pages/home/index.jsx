import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Featured from "../../components/featured";
import Hero from "../../components/hero";
import NewArrival from "../../components/newArrival";
import "./style.css";
import Videos from "./../../components/videos/index";
import Casts from "../../components/casts";
import Footer from "../../components/footer";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  };

  const userEmail = user?.email;

  return (
    <div className="home">
      <header>
        <Hero userEmail={userEmail} logOut={logOut} />
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
