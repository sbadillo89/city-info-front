import { CircularProgress } from "@mui/material";
import { TableHistory } from "../../components/table-history";
import { useHistory } from "../../services/history";
import "./index.css";

export const History = () => {
  const { data, isLoading } = useHistory();

  return (
    <div className="flex-container">
      {isLoading && (
        <div className="center">
          <CircularProgress color="primary" size="6rem" />
        </div>
      )}
      {data && data.length > 0 ? (
        <>
          <h3>Paises consultados</h3>
          <TableHistory history={data} />
        </>
      ) : (
        !isLoading && <p className="center">No existe historial de busqueda</p>
      )}
    </div>
  );
};
