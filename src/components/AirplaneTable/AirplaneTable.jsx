import { useSelector } from "react-redux";

function AirplaneTable() {
  const airlines = useSelector(state => state.airlines);

  return (
    <table>
        <thead>
          <tr>
            <th>Airline Name</th>
            <th>Number of Planes</th>
          </tr>
        </thead>
        <tbody>
          {airlines.map(airline =>
            <tr key={airline.id}>
              <td>{airline.name}</td>
              <td>{airline.number}</td>
            </tr>
          )}
        </tbody>
      </table>
  );
}

export default AirplaneTable;
