import Table from 'react-bootstrap/Table';

export const CustomTable = (props:any) => (
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Word</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
      {props.data.map((input: any, i: number) => (
        <tr key={i}>
          <td>{input.word}</td>
          <td>{input.meaning}</td>
        </tr>
      ))}
  </tbody>
</Table>
);
