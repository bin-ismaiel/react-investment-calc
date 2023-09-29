import { useState } from "react";
import styles from "./form.module.css";
const INIT_USERINPUT = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};
export default function Form(props) {
  const [userInput, setUserInput] = useState(INIT_USERINPUT);

  const onInputChangeHandler = (val, name) => {
    setUserInput((perv) => {
      return {
        ...perv,
        [name]: val,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onFormSubmit(userInput);
    setUserInput(INIT_USERINPUT);
  };
  const resetHandler = () => {
    setUserInput(INIT_USERINPUT);
  };
  return (
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) =>
              onInputChangeHandler(e.target.value, "current-savings")
            }
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) =>
              onInputChangeHandler(e.target.value, "yearly-contribution")
            }
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) =>
              onInputChangeHandler(e.target.value, "expected-return")
            }
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => onInputChangeHandler(e.target.value, "duration")}
            value={userInput.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button
          type="submit"
          className={styles.button}
          onClick={onSubmitHandler}
        >
          Calculate
        </button>
      </p>
    </form>
  );
}
