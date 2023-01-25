import {publicRequest} from '../../utils/public-request'
import { CountryAttr } from './types'
import { UseQueryResult, useQuery } from "react-query";


const COUNTRY_ENDPOINT = "/api/Country";
const COUNTRY_KEY = "countries";

const useCountries = (): UseQueryResult<Array<CountryAttr>> => {

  const queryResult = useQuery([COUNTRY_KEY], async () => {
    const response = await publicRequest.get<Array<CountryAttr>>(
      `${COUNTRY_ENDPOINT}`
    );

    return response.data;
  });

  return queryResult;
};

export { useCountries  }