import { useEffect, useState } from "react";
import "./App.css";
import TimeSet from "./components/TimeSet/TimeSet";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { getIpAddress, getTimeZone } from "./utils/services";
import { TimezoneType } from "./utils/types";
import Loader from "./components/Loader/Loader";

function App() {
  const [ipAddress, setIpAddress] = useState(null);

  const [isMore, setIsMore] = useState<boolean>(false);
  const [locationData, setLocationData] = useState<TimezoneType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchTimeZone = async (ip:string) => {


    const res = await getTimeZone(ip);

    if (res?.data?.message) {
      setError(res.data.message);
    } else {
      setLocationData(res);
    }
  };

  useEffect(() => {
    const fetchIpAddress = async () => {
      const res = await getIpAddress();
     setIpAddress(res)
      localStorage.setItem("ip", res.ip);
    };
    fetchIpAddress();
  },[]);

  useEffect(() => {

    if (ipAddress) {
      const {ip} = ipAddress
      fetchTimeZone(ip);
    }
  }, [ipAddress]);

  const handleToggle = () => {
    setIsMore(!isMore);
  };

  
  return (
    <div>
      {!ipAddress ? <Loader/> : null}
      {error ? (
        <h1>{error}</h1>
      ) : (
        <SharedLayout>
          {locationData ?  <TimeSet
           
            timeSetData={locationData}
            handleToggle={handleToggle}
            isMore={isMore}
          /> : <Loader/>}
         
        </SharedLayout>
      )}
    </div>
  );
}

export default App;
