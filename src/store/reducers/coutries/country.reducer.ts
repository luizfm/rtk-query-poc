import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country } from "../../../models/country";

export const countryApi = createApi({
  reducerPath: "country",
  tagTypes: ["Country"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => "/all",
    }),
    getCountry: builder.query<Country[], string>({
      query: (name) => `/name/${name}`,
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryQuery } = countryApi;
