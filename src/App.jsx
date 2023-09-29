import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/form";
import Table from "./components/table";
function App() {
  const [results, setResults] = useState([]);
  let initialInvestment;
  const calculateHandler = (userInput) => {
    initialInvestment = userInput["current-savings"];
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResults(yearlyData);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <Form onFormSubmit={calculateHandler} />
      {results.length === 0 ? (
        "No Data Avalilable"
      ) : (
        <Table data={results} initialInvestment={initialInvestment} />
      )}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
