import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Timeline from "../components/timeline/Timeline";
import Blog from "../components/blog/Blog";
import Stack from "../components/stack/Stack";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="max-w-10xl mx-auto">
      <Intro />
      <Portfolio />
      <Timeline />
      <Stack />
      <Blog />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Home;
