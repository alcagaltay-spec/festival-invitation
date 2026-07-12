import Welcome from "./sections/Welcome/Welcome";
import Invitation from "./sections/Invitation/Invitation";
import Story from "./sections/Story/Story";
import FestivalProgram from "./sections/FestivalProgram/FestivalProgram";
import Artists from "./sections/Artists/Artists";
import FestivalArea from "./sections/FestivalArea/FestivalArea";
import Tosya from "./sections/Tosya/Tosya";
import Protocol from "./sections/Protocol/Protocol";
import Thanks from "./sections/Thanks/Thanks";

function App() {
  return (
    <main className="festival-app" id="top">
      <Welcome />
      <Invitation />
      <Story />
      <FestivalProgram />
      <Artists />
      <FestivalArea />
      <Tosya />
      <Protocol />
      <Thanks />
    </main>
  );
}

export default App;