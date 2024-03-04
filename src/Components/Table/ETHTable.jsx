import "./Table.css";
const ETHTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>10:00 AM</td>
          <td>100</td>
          <td>4s8er5s5fe57rjmxnfuewrurks</td>
        </tr>
        <tr>
          <td>2</td>
          <td>11:30 AM</td>
          <td>200</td>
          <td>sf7s7ers4e7r7wser</td>
        </tr>
        <tr>
          <td>3</td>
          <td>01:00 PM</td>
          <td>150</td>
          <td>se4s7er7</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ETHTable;
