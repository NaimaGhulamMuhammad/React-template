import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Slider from "../sections/Slider";
import Ourteam from "../sections/Ourteam";
import BlogPost from "../sections/BlogPost";
import Services from "../sections/Services";
import AboutUs from "../sections/AboutUs";
import Qualities from "../sections/Qualities";
import Portfolio from "../sections/Portfolio";

export default function Home() {
  return (
    <>
      <div className="wraper">
        <Topbar />
        <Navbar />
        <Slider />
        <Qualities />
        <AboutUs />
        <Services />
        <Ourteam />
        <BlogPost />
        <Portfolio />
      </div>
    </>
  );
}
