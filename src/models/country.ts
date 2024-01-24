interface Cat {
  official: string;
  common: string;
}

interface NativeName {
  cat: Cat;
}

interface CountryName {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Currencies {
  [key: string]: Currency;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Languages {
  [key: string]: string;
}

interface Translation {
  official: string;
  common: string;
}

interface Translations {
  [key: string]: Translation;
}

interface Demonyms {
  f: string;
  m: string;
}

interface LanguageDemonyms {
  [key: string]: Demonyms;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface PostalCode {
  format: string;
  regex: string;
}

export interface Country {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: LanguageDemonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}
