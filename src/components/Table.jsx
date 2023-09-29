export default function Table(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((ele) => {
          return (
            <tr key={ele.year}>
              <td>{ele.year}</td>
              <td>{ele.savingsEndOfYear}</td>
              <td>{ele.yearlyInterest}</td>
              <td>
                {ele.savingsEndOfYear -
                  props.initialInvestment -
                  ele.yearlyContribution * ele.year}
              </td>
              <td>
                {props.initialInvestment + ele.yearlyContribution * ele.year}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
