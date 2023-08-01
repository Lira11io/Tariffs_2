import React, { useState } from "react";
import Tariff from "./components/tariff";
import tariffs from "./data/tariffs.json";
import "./styles/App.scss";

function App() {
  const [selectedTariff, setSelectedTariff] = useState(null);
  const handleTariffSelect = (tarifName) => {
    setSelectedTariff(tarifName);
  };

  return (
    <div className="App">
      <h1 className="App-title">Наши мобильные тарифы</h1>
      <div className="App-container">
        {tariffs.map((tariff) => (
          <Tariff
            {...tariff}
            isSelected={tariff.name === selectedTariff}
            onTariffClick={handleTariffSelect}
            key={tariff.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
