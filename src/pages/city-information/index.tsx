import { Button, CircularProgress } from "@mui/material";
import { useCountries } from "../../services/country";
import { useCityInformation } from "../../services/city";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import { AutocompleteCountry } from "../../components/autocomplete-country";
import "./index.css";
import { Weather } from "../../components/weather";
import { News } from "../../components/news";

export const CityInformation = () => {
  const { data } = useCountries();
  const [country, setCountry] = useState<string | undefined>("");
  const countries = data ?? [];

  const {
    data: cityInformation,
    isLoading,
    refetch,
  } = useCityInformation(country!);

  const handleOnSearch = () => {
    refetch();
  };

  return (
    <div className="main-container">
      <div className="search-country">
        <AutocompleteCountry
          countries={countries}
          setCountry={setCountry}
          isDisabled={isLoading}
        />
        <div>
          <Button
            onClick={() => handleOnSearch()}
            variant="contained"
            endIcon={<Search />}
            disabled={isLoading}
          >
            {!isLoading ? "Buscar" : "Buscando..."}
          </Button>
        </div>
      </div>

      {isLoading && (
        <div className="center">
          <CircularProgress color="primary" size="6rem" />
        </div>
      )}
      {cityInformation && (
        <>
          <Weather currentWeather={cityInformation.currentWeather} />
          <News articles={cityInformation.news} />
        </>
      )}
    </div>
  );
};
