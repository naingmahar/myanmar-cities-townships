"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTownshipById = exports.getTownshipsByName = exports.getTownshipsByCityId = exports.getTownshipByCityCode = exports.getTownshipByCityName = exports.getTownships = exports.getCityById = exports.getCityByCode = exports.getCityByName = exports.getCities = void 0;
const data_1 = __importDefault(require("./data"));
class CityProps {
    constructor() {
        this.code = "";
        this.id = 0;
        this.name = "";
        return this;
    }
}
class TownshipProps {
    constructor() {
        this.code = "";
        this.id = 0;
        this.city_id = 0;
        this.name = "";
        this.area_id = 0;
        return this;
    }
}
/**
 * @returns {Array<CityProps>}
 */
exports.getCities = () => {
    return data_1.default.city;
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
exports.getCityByName = (name) => {
    let data = data_1.default.city;
    return data.find((row) => row.name == name);
};
/**
 * @param {"AYY"|"BGO"|"CHN"|"KCN"|"KYR"|"KYN"|"MGW"|"MDY"|"MON"|"NPT"|"RKE"|"SGG"|"SHN"|"TNY"|"YGN"} code
 * @returns {CityProps | undefined}
 */
exports.getCityByCode = (code) => {
    let data = data_1.default.city;
    return data.find((row) => row.code === code);
};
/**
 * @param {number} id
 * @returns {CityProps | undefined}
 */
exports.getCityById = (id) => {
    let data = data_1.default.city;
    return data.find((row) => row.id == id);
};
/**
 * @returns {Array<TownshipProps>}
 */
exports.getTownships = () => {
    return data_1.default.township;
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
exports.getTownshipByCityName = (cityName) => {
    let data = data_1.default.township;
    return data.filter((row) => { var _a; return row.city_id == ((_a = exports.getCityByName(cityName)) === null || _a === void 0 ? void 0 : _a.id); });
};
/**
 * @param {"AYY"|"BGO"|"CHN"|"KCN"|"KYR"|"KYN"|"MGW"|"MDY"|"MON"|"NPT"|"RKE"|"SGG"|"SHN"|"TNY"|"YGN"} code
 * @returns {Array<TownshipProps>}
 */
exports.getTownshipByCityCode = (code) => {
    let data = data_1.default.township;
    return data.filter((row) => { var _a; return row.city_id == ((_a = exports.getCityByCode(code)) === null || _a === void 0 ? void 0 : _a.id); });
};
/**
 * @param {number} id
 * @returns {Array<TownshipProps>}
 */
exports.getTownshipsByCityId = (id) => {
    let data = data_1.default.township;
    return data.filter((row) => row.city_id == id);
};
/**
 * @param {string} name
 * @returns {TownshipProps}
 */
exports.getTownshipsByName = (name) => {
    let data = data_1.default.township;
    return data.find((row) => row.name == name);
};
/**
 * @param {number} id
 * @returns {TownshipProps}
 */
exports.getTownshipById = (townshipId) => {
    let data = data_1.default.township;
    return data.find((row) => row.id == townshipId);
};
