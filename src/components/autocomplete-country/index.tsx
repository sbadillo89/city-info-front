import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AutocompleteCountryProps } from "./types";
import React from "react";

export const AutocompleteCountry = ({
  countries,
  setCountry,
  isDisabled,
}: AutocompleteCountryProps): React.ReactElement => {
  return (
    <Autocomplete
      style={{ margin: "1rem" }}
      id="country-select"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.name}
      onChange={(event, newValue) => setCountry(newValue?.code)}
      disabled={isDisabled}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.name} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Seleccione un país"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};
