import { useEffect } from "react";

import * as SC from "./TimeSetStyled";

import { ReactComponent as Day } from "../../assets/icons/day.svg";
import { ReactComponent as More } from "../../assets/icons/more.svg";
import { ReactComponent as Less } from "../../assets/icons/less.svg";
import bgMobileDay from "../../assets/mobile/bg-image-daytime.jpg";


import { TimezoneType } from "../../utils/types";
import Quotes from "../Quotes/Quotes";


type Props = {
  ipAddress: string | null;
  fetchTimeZone: (ipAddress: string) => void;
  timeSetData: TimezoneType | null;
  handleToggle: () => void;
  isMore:boolean;
};

const TimeSet: React.FC<Props> = ({
  ipAddress,
  fetchTimeZone,
  timeSetData,
  handleToggle,
  isMore,
}) => {
  useEffect(() => {
    fetchTimeZone(ipAddress!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipAddress]);

  const timeZoneCode = timeSetData?.abbreviation;
  const currentTime = timeSetData?.datetime;
  const dayOfTheYear = timeSetData?.day_of_year;
  const dayOfTheWeek = timeSetData?.day_of_week;
const weekNumber = timeSetData?.week_number;


  const currentTimeZone = timeSetData?.timezone;
  const city = timeSetData?.timezone
    ? timeSetData?.timezone.split("/")[1]
    : null;
  const region = timeSetData?.timezone
    ? timeSetData?.timezone.split("/")[0]
    : null;

  const formattedTime = currentTime?.split("T")[1].split(".")[0];
  const hours = formattedTime?.split(":")[0];
  const minutes = formattedTime?.split(":")[1];

  const actualTime = hours + ":" + minutes;

  const buttonText = !isMore ? "more" : "less"

  return (
    <>
      <SC.CommonCon bg={bgMobileDay}>
        {!isMore ? <Quotes /> : null}
        <div>
          <SC.GreetingCon>
            <Day />
            <SC.GreetingText>good morning</SC.GreetingText>
          </SC.GreetingCon>
          <SC.TimeCon>
            <SC.Time>{actualTime}</SC.Time>
            <SC.Zone>{timeZoneCode}</SC.Zone>
          </SC.TimeCon>
          <SC.LocationCon>
            <p>In</p>
            <p>{city ? city : null},</p>
            <p>{region ? region : null}</p>
          </SC.LocationCon>
          <SC.ToggleButton onClick={handleToggle}>
            <span>{buttonText}</span>
            {!isMore ? <More /> : <Less />}
          </SC.ToggleButton>
        </div>
      </SC.CommonCon>
      {isMore ? (
        <SC.AddCon>
          <div>
            <p>current timezone</p>
            <p>{currentTimeZone}</p>
          </div>
          <div>
            <p>day of the year</p>
            <p>{dayOfTheYear}</p>
          </div>
          <div>
            <p>day of the week</p>
            <p>{dayOfTheWeek}</p>
          </div>
          <div>
            <p>week number</p>
            <p>{weekNumber}</p>
          </div>
        </SC.AddCon>
      ) : null}
    </>
  );
};

export default TimeSet;
