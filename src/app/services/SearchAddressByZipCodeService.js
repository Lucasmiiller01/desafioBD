import { API_URL } from "../../config/api";
import fetch from "node-fetch";
class SearchAddressByZipCodeService {
  constructor(){}

  async execute(cep){
    const result = await fetch(API_URL + cep + "/json");
    return result.json();
  }
}

export default SearchAddressByZipCodeService;
