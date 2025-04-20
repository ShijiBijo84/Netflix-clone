import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import PosterRow from "./components/PosterRow/PosterRow";
import "./App.css";
import { original, action } from "./api/urls";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <PosterRow title="Netflix Original" url={original} />
      <PosterRow title="Action" isSmall url={action} />
    </div>
  );
}

export default App;
