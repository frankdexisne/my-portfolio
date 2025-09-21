import { MantineProvider } from "@mantine/core";
import Header from "./components/header";
import TechStack from "./components/tech-stack";
function App() {
  return (
    <MantineProvider>
      <div className="bg-[#101928]">
        <Header />
      </div>
      <div className="bg-[#1f2b37] py-[10px]">
        <TechStack />
      </div>
    </MantineProvider>
  );
}

export default App;
