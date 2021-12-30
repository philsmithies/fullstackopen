const StatisticsLine = ({ value, text }) => {
  return (
    <tr>
      <td>
        <p>{text} </p>
      </td>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticsLine;
