import DATA from "./data";

export interface cityProps {
  code: string;
  id: number;
  name: string;
}
export interface townshipProps {
  code: string;
  id: number;
  city_id: number;
  name: string;
  area_id: number;
}

class CityProps {
  code: string = "";
  id: number = 0;
  name: string = "";

  constructor() {
    return this;
  }
}

class TownshipProps {
  code: string = "";
  id: number = 0;
  city_id: number = 0;
  name: string = "";
  area_id: number = 0;

  constructor() {
    return this;
  }
}

export type codeTypes =
  | "AYY"
  | "BGO"
  | "CHN"
  | "KCN"
  | "KYR"
  | "KYN"
  | "MGW"
  | "MDY"
  | "MON"
  | "NPT"
  | "RKE"
  | "SGG"
  | "SHN"
  | "TNY"
  | "YGN";

export type cityTypes =
  | "Ayarwaddy"
  | "Bago"
  | "Chin"
  | "Kachin"
  | "Kayar"
  | "Kayin"
  | "Magway"
  | "Mandalay"
  | "MON"
  | "Naypyitaw"
  | "Rakhine"
  | "Sagaing"
  | "Shan"
  | "Tanintharyi"
  | "Yangon";

/**
 * @returns {Array<CityProps>}
 */
export const getCities = () => {
  return DATA.city;
};

/**
 * @param {"Ayarwaddy"
  | "Bago"
  | "Chin"
  | "Kachin"
  | "Kayar"
  | "Kayin"
  | "Magway"
  | "Mandalay"
  | "MON"
  | "Naypyitaw"
  | "Rakhine"
  | "Sagaing"
  | "Shan"
  | "Tanintharyi"
  | "Yangon"} name
 * @returns {CityProps | undefined}
 */
export const getCityByName = (name: cityTypes) => {
  let data: Array<cityProps> = DATA.city;
  return data.find((row) => row.name == name);
};

/**
 * @param {"AYY"|"BGO"|"CHN"|"KCN"|"KYR"|"KYN"|"MGW"|"MDY"|"MON"|"NPT"|"RKE"|"SGG"|"SHN"|"TNY"|"YGN"} code
 * @returns {CityProps | undefined}
 */
export const getCityByCode = (code: codeTypes) => {
  let data: Array<cityProps> = DATA.city;
  return data.find((row) => row.code === code);
};

/**
 * @param {number} id
 * @returns {CityProps | undefined}
 */
export const getCityById = (id: number) => {
  let data: Array<cityProps> = DATA.city;
  return data.find((row) => row.id == id);
};

/**
 * @returns {Array<TownshipProps>}
 */
export const getTownships = () => {
  return DATA.township;
};

/**
 * @param {"Ayarwaddy"
 | "Bago"
 | "Chin"
 | "Kachin"
 | "Kayar"
 | "Kayin"
 | "Magway"
 | "Mandalay"
 | "MON"
 | "Naypyitaw"
 | "Rakhine"
 | "Sagaing"
 | "Shan"
 | "Tanintharyi"
 | "Yangon"} cityName
* @returns {CityProps | undefined}
 * @returns {Array<TownshipProps>}
 */
export const getTownshipByCityName = (cityName: cityTypes) => {
  let data: Array<townshipProps> = DATA.township;
  return data.filter((row) => row.city_id == getCityByName(cityName)?.id);
};

/**
 * @param {"AYY"|"BGO"|"CHN"|"KCN"|"KYR"|"KYN"|"MGW"|"MDY"|"MON"|"NPT"|"RKE"|"SGG"|"SHN"|"TNY"|"YGN"} code
 * @returns {Array<TownshipProps>}
 */
export const getTownshipByCityCode = (code: codeTypes) => {
  let data: Array<townshipProps> = DATA.township;
  return data.filter((row) => row.city_id == getCityByCode(code)?.id);
};

/**
 * @param {number} id
 * @returns {Array<TownshipProps>}
 */
export const getTownshipsByCityId = (id: number) => {
  let data: Array<townshipProps> = DATA.township;
  return data.filter((row) => row.city_id == id);
};

/**
 * @param {string} name
 * @returns {TownshipProps}
 */
export const getTownshipsByName = (name: string) => {
  let data: Array<townshipProps> = DATA.township;
  return data.find((row) => row.name == name);
};

/**
 * @param {number} id
 * @returns {TownshipProps}
 */
export const getTownshipById = (townshipId: number) => {
  let data: Array<townshipProps> = DATA.township;
  return data.find((row) => row.id == townshipId);
};
