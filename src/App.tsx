import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TableContainer,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  useGetAllCountriesQuery,
  useGetCountryQuery,
} from "./store/reducers/coutries/country.reducer";
import React, { KeyboardEventHandler, useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState("");
  const { data } = useGetAllCountriesQuery();
  const { data: searchedData } = useGetCountryQuery(search, {
    skip: !search,
  });

  const mappedData = searchValue && search ? searchedData : data;

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setSearch("");
    }
    setSearchValue(event.target.value);
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") onSearch();
  };

  const onSearch = () => {
    setSearch(searchValue);
  };

  return (
    <Box
      padding="24px 0 64px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 700 }}
      >
        <TextField
          label="Search"
          sx={{ width: 700, marginBottom: 6 }}
          placeholder="Search a Country"
          onChange={onSearchChange}
          onKeyDown={onKeyPress}
          value={searchValue}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={onSearch}
                  aria-label="search for a country"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Flag</TableCell>
                <TableCell>Country name</TableCell>
                <TableCell>Population</TableCell>
                <TableCell>Continent</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mappedData?.map((country) => (
                <TableRow key={country.area + country.name.official}>
                  <TableCell>
                    <img
                      src={country.flags.png}
                      height={60}
                      width={100}
                      alt={`${country.name} flag`}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography>{country.name.official}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {country.population.toLocaleString("pt-BR")}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {country.continents.map((continent) => (
                      <Typography key={continent}>{continent}</Typography>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default App;
