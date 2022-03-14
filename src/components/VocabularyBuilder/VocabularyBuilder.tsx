import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { removeVocabularyData } from "../../services/AppService";
import jsPDF from "jspdf";
import "jspdf-autotable";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const VocabularyBuilder = (props: any) => {
  
  const removeHandler = (id: number) => {
    removeVocabularyData(id).then(() => {
      let arr = props.wordsList;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          arr = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
        }
      }
      props.setVocabularyData(arr);
      console.log("Item Removed");
    });
  };

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc: any = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Vocabulary Builder";
    const headers = [["WORD", "MEANING"]];

    const data = props.wordsList.map((elt: any) => [elt.word, elt.meaning]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Word</th>
          <th>Meaning</th>
          <th>
            <IconButton onClick={exportPDF}>
              <FileDownloadIcon style={{ color: 'white' }}></FileDownloadIcon>
            </IconButton>
          </th>
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
};

export default VocabularyBuilder;
