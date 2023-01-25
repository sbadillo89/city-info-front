import { Dispatch, SetStateAction } from "react";
import {CountryAttr} from '../../services/country/types'


type AutocompleteCountryProps = {
  countries: Array<CountryAttr>,
  setCountry: Dispatch<SetStateAction<string|undefined>>,
  isDisabled:boolean
}

export type { AutocompleteCountryProps}