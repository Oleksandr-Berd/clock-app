import { useEffect } from "react";

import * as SC from "./TimeSetStyled";

import { ReactComponent as Day } from "../../assets/icons/day.svg";
import { TimezoneType } from "../../utils/types";


type Props = {
  ipAddress: string | null;
  fetchTimeZone: (ipAddress: string) => void;
  timeSetData: TimezoneType | null;
};

const TimeSet: React.FC<Props> = ({
  ipAddress,
  fetchTimeZone,
  timeSetData,
}) => {


  useEffect(() => {
    fetchTimeZone(ipAddress!)
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipAddress]);

  const timeZoneCode = timeSetData?.abbreviation;
  const currentTime = timeSetData?.datetime;
 const city = timeSetData?.timezone ? timeSetData?.timezone.split("/")[1] : null;
 const region = timeSetData?.timezone
   ? timeSetData?.timezone.split("/")[0]
   : null;


const formattedTime = currentTime?.split("T")[1].split(".")[0];
const hours = formattedTime?.split(":")[0];
const minutes = formattedTime?.split(":")[1];

const actualTime = hours+":"+minutes


  return (
    <SC.CommonCon>
      <SC.GreetingCon>
        <Day />
        <SC.GreetingText>good morning</SC.GreetingText>
      </SC.GreetingCon>
      <SC.TimeCon>
        <p>{actualTime}</p>
        <p>{timeZoneCode}</p>
      </SC.TimeCon>
      <SC.LocationCon>
        <p>In</p>
        <p>{city ? city : null}</p>
        <p>{region ? region : null}</p>
      </SC.LocationCon>
    </SC.CommonCon>
  );
};

export default TimeSet;
