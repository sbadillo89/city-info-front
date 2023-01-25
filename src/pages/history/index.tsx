import { TableHistory } from "../../components/table-history";
import { useHistory } from "../../services/history";

export const History = () => {
  const { data } = useHistory();

  if (!data) return <p>No existe historial de busqueda</p>;

  return <TableHistory history={data} />;
};
