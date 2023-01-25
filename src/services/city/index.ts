import {publicRequest} from '../../utils/public-request'
import { CityInformationAttr } from './types'
import {
  UseQueryResult,
  useQuery,
} from "react-query";


const COUNTRY_ENDPOINT = "/api/City";
const COUNTRY_KEY = "country";

const useCityInformation = (code: string): UseQueryResult<CityInformationAttr> => {

  const queryResult = useQuery([COUNTRY_KEY, code], async () => {
    const response = await publicRequest.get<CityInformationAttr>(
      `${COUNTRY_ENDPOINT}/${code}`
    );

    return response.data;
  },{
    enabled:false
  });

  return queryResult;
};

export { useCityInformation }