import Header from "../components/header";
import TechStack from "../components/tech-stack";
import Projects from "../components/projects";
import Contact from "../components/contact";
import { Divider } from "@mantine/core";
const Home = () => {
  return (
    <>
      <div className="bg-[#101928]">
        <Header />
      </div>
      <div className="bg-[#1f2b37] py-[10px]">
        <TechStack />
      </div>
      <div className="bg-[#101928]">
        <Projects />
        <Divider />
        <Contact />
      </div>
    </>
  );
};

export default Home;
