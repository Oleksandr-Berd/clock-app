import axios from "axios";
import { quotesUrl } from "./api";

export const getQuote = async () => {
  try {
    const res = await axios.get<any>(`${quotesUrl}/random`);
    return res.data;
  } catch (error:any) {
    return error.response;
  }
};
