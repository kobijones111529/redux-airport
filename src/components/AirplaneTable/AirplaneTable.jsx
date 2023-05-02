import { useSelector } from "react-redux";

function AirplaneTable() {
  const airplanes = useSelector(state => state.airplanes);

  return (
    <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {airplanes.map(airplane =>
            <tr key={airplane.id}>
              <td>{airplane.name}</td>
            </tr>
          )}
        </tbody>
      </table>
  );
}

export default AirplaneTable;
