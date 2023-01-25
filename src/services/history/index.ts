import {publicRequest} from '../../utils/public-request'
import {
  UseQueryResult,
  useQuery,
} from "react-query";

type HistoryAttr = {
  country:string,
  info:string
}

const HISTORY_ENDPOINT = "/api/History";
const HISTORY_KEY = "history";

const useHistory = (): UseQueryResult<HistoryAttr[]> => {

  const queryResult = useQuery([HISTORY_KEY], async () => {
    const response = await publicRequest.get<HistoryAttr[]>(
      HISTORY_ENDPOINT
    );

    return response.data;
  });

  return queryResult;
};

export { useHistory }
export type {HistoryAttr}