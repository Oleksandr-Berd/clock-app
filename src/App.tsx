import { useEffect, useRef, useState } from 'react';
import './App.css';
import Quotes from './components/Quotes/Quotes';
import TimeSet from './components/TimeSet/TimeSet';
import SharedLayout from './layouts/SharedLayout/SharedLayout';
import { getIpAddress, getTimeZone } from './utils/services';
import { TimezoneType } from './utils/types';


function App() {
  const ipAddress = useRef<string | null>(null);

    const [locationData, setLocationData] = useState<TimezoneType | null>(null);
    const [error, setError] = useState<string | null>(null)






const fetchTimeZone = async (ipAddress:string) => {
  const res = await getTimeZone(ipAddress);

if (res?.data?.message) {setError(res.data.message)} else {
setLocationData(res);

};

};


useEffect(() => {
const fetchIpAddress = async () => {
  const res = await getIpAddress();
  if (res?.data?.message) setError(res.data.message);

  ipAddress.current = res.ip;
  localStorage.setItem("ip", res.ip);
};

  fetchIpAddress();
});


  
  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <SharedLayout>
          <Quotes />
          <TimeSet
            ipAddress={
              ipAddress.current ? ipAddress.current : localStorage.getItem("ip")
            }
            fetchTimeZone={fetchTimeZone}
            timeSetData={locationData}
          />
        </SharedLayout>
      )}
    </div>
  );
}

export default App;
