import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";

function AirplaneForm() {
  const [nameInput, setNameInput] = useState('');

  const dispach = useDispatch();

  const addAirplane = name => dispach({ type: 'airplane/add', payload: { name } })

  const validInput = useMemo(
    () => {
      if (nameInput.trim() === '') {
        return false;
      }

      return true;
    },
    [nameInput]
  );

  const handleSubmit = event => {
    event.preventDefault();

    if (!validInput) {
      return;
    }

    addAirplane(nameInput.trim());
    setNameInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Airline Name' value={nameInput} onChange={event => setNameInput(event.target.value)} />
      <button disabled={!validInput}>Add Airline</button>
    </form>
  );
}

export default AirplaneForm;
