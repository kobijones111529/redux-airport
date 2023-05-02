import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";

function AirplaneForm() {
  const [nameInput, setNameInput] = useState('');
  const [numberInput, setNumberInput] = useState('');

  const dispach = useDispatch();

  const addAirplane = airline => dispach({ type: 'airline/add', payload: airline })

  const validInput = useMemo(
    () => {
      if (nameInput.trim() === '') {
        return false;
      }

      const number = Number(numberInput);
      if (numberInput.trim() === '' || Number.isNaN(number) || !Number.isFinite(number) || number < 0) {
        return false;
      }

      return true;
    },
    [nameInput, numberInput]
  );

  const handleSubmit = event => {
    event.preventDefault();

    if (!validInput) {
      return;
    }

    addAirplane({ name: nameInput.trim(), number: Number(numberInput) });
    setNameInput('');
    setNumberInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Airline Name' value={nameInput} onChange={event => setNameInput(event.target.value)} />
      <input placeholder="Number" value={numberInput} onChange={event => setNumberInput(event.target.value)} />
      <button disabled={!validInput}>Add Airline</button>
    </form>
  );
}

export default AirplaneForm;
