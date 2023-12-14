import { useEffect, useRef, useState } from "react";
import "./App.css";
import TimeSet from "./components/TimeSet/TimeSet";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { getIpAddress, getTimeZone } from "./utils/services";
import { TimezoneType } from "./utils/types";
import Loader from "./components/Loader/Loader";

function App() {
  const ipAddress = useRef(null);

  const [isMore, setIsMore] = useState<boolean>(false);
  const [locationData, setLocationData] = useState<TimezoneType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchTimeZone = async (ip:string | null) => {
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
      if (res?.data?.message) setError(res.data.message);

      ipAddress.current = res.ip;
      localStorage.setItem("ip", res.ip);
    };
    fetchIpAddress();
  },[]);

  useEffect(()=>{
   if (ipAddress) {

    const {current} = ipAddress

    fetchTimeZone(current)
  
  };
    
  },[ipAddress])

  const handleToggle = () => {
    setIsMore(!isMore);
  };
console.log(ipAddress);

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <SharedLayout>
          {locationData && ipAddress ?  <TimeSet
            ipAddress={
              ipAddress.current ? ipAddress.current : localStorage.getItem("ip")
            }
            fetchTimeZone={fetchTimeZone}
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
