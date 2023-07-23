import Tariff from "./components/tariff";
import tariffs from "./data/tariffs.json";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Наши мобильные тарифы</h1>
      <div className="App-container">
        {tariffs.map((tariff) => (
          <Tariff
            name={tariff.name}
            price={tariff.price}
            speed={tariff.speed}
            traffic={tariff.traffic}
            blueColor={tariff.blueColor}
            greenColor={tariff.greenColor}
            redColor={tariff.redColor}
            blackColor={tariff.blackColor}
            isSelected={tariff.isSelected}
            key={tariff.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
