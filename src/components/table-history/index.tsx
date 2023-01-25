import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { HistoryAttr } from "../../services/history";

type TableHistoryProps = {
  history: HistoryAttr[];
};

export const TableHistory = ({ history }: TableHistoryProps) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 600,
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>País</TableCell>
            <TableCell align="right">Tipo consulta</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((row) => (
            <TableRow
              key={row.country}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell align="right">{row.info}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
