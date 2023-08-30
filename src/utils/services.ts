import axios from "axios";
import { ipAddress, quotesUrl, worldTimeUrl } from './api';

export const getQuote = async () => {
  try {
    const res = await axios.get<any>(`${quotesUrl}/random`);
    
    return res.data;
  } catch (error:any) {
    return error.response;
  }
};

// export const getGeoLocation = async () => {
//     try {
//          const res = await axios.get<any>(`${geoLocationUrl}`);

//          return res.data;
//     } catch (error:any) {
//          return error.response;
//     }
// }

export const getTimeZone = async(ipAddress:string | null) => {

    try {
         const res = await axios.get<any>(`${worldTimeUrl}/${ipAddress}`);

         return res.data;
    } catch (error: any) {
         return error.response;
    }
}


export const getIpAddress = async() => {
    try {
          const res = await axios.get<any>(`${ipAddress}`);

          return res.data;
    } catch (error:any) {
          return error.response;
    }
}