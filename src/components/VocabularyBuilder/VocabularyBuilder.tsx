import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { removeVocabularyData } from '../../services/AppService';

const VocabularyBuilder = (props:any) => {

    const removeHandler = (id:number) => {
        removeVocabularyData(id).then(() => {
          let arr = props.wordsList;
          for (let i = 0; i < arr.length; i++) {
              if (arr[i].id === id) {
                  arr = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
              }
          }
          props.setVocabularyData(arr);
          console.log('Item Removed');
      });
    }

    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Word</th>
            <th>Meaning</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.wordsList.map((input: any, i: number) => (
            <tr key={i}>
              <td>{input.word}</td>
              <td>{input.meaning}</td>
              <td>
                <IconButton onClick={() => removeHandler(input.id)}>
                  <DeleteIcon sx={{ color: red[800] }}></DeleteIcon>
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );

}

export default VocabularyBuilder;