import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import Navigation from "./components/navigation";
import Food from "./components/food";

function App() {
  return (
    <div className="App p-d-flex">
      <Navigation></Navigation>
      <Food></Food>
    </div>
  );
}

export default App;
