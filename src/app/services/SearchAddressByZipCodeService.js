import { API_URL } from "../../config/api";
import fetch from "node-fetch";
import AppError from "../shared/errors/AppError";

class SearchAddressByZipCodeService {
  constructor(){}

  async execute(cep){
    const result = await (await fetch(API_URL + cep + "/json")).json();

    if(result.erro) {
      throw new AppError("Invalid zip code !");
    }

    return result;
  }
}

export default SearchAddressByZipCodeService;
