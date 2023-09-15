import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

import * as SC from "./TimeSetStyled";

import { ReactComponent as Day } from "../../assets/icons/day.svg";
import { ReactComponent as Night } from "../../assets/icons/night.svg";

import { ReactComponent as More } from "../../assets/icons/more.svg";
import { ReactComponent as Less } from "../../assets/icons/less.svg";
import bgMobileDay from "../../assets/mobile/bg-image-daytime.jpg";
import bgMobileNight from "../../assets/mobile/bg-image-nighttime.jpg";
import bgTabletDay from "../../assets/tablet/bg-image-daytime.jpg"
import bgTabletNight from "../../assets/tablet/bg-image-nighttime.jpg";
import bgDesktopDay from "../../assets/desktop/bg-image-daytime.jpg"
import bgDesktopNight from "../../assets/desktop/bg-image-nighttime.jpg"




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

    const isTablet = useMediaQuery("(min-width:768px) and (max-width:1439px)");
    const isDesktop = useMediaQuery("(min-width:1440px)")

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

const greetings = hours >= 5 && hours < 12 ? "good morning" 
: hours >= 12 && hours < 18 ? "good afternoon"
: "good evening" 

  const minutes = formattedTime?.split(":")[1];

  const actualTime = hours + ":" + minutes;

  const buttonText = !isMore ? "more" : "less"

  const bgDay = isTablet ? bgTabletDay : isDesktop ? bgDesktopDay : bgMobileDay;
  const bgNight = isTablet ? bgTabletNight : isDesktop ? bgDesktopNight : bgMobileNight

  return (
    <>
      <SC.CommonCon bg={hours >= 5 && hours < 18 ? bgDay : bgNight}>
        {!isMore ? <Quotes /> : null}
        <SC.FlexCon>
          <div>
            <SC.GreetingCon>
              {hours >= 5 && hours < 18 ? <Day /> : <Night />}
              {isTablet || isDesktop ? (
                <SC.GreetingText>{greetings}, it's current</SC.GreetingText>
              ) : (
                <SC.GreetingText>{greetings}</SC.GreetingText>
              )}
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
          </div>
          <SC.ToggleButton onClick={handleToggle}>
            <span>{buttonText}</span>
            {!isMore ? <More /> : <Less />}
          </SC.ToggleButton>
        </SC.FlexCon>
      </SC.CommonCon>
      {isMore ? (
        <SC.AddCon>
          <li>
            <h6>current timezone</h6>
            <p>{currentTimeZone}</p>
          </li>
          <li>
            <h6>day of the year</h6>
            <p>{dayOfTheYear}</p>
          </li>
          <li>
            <h6>day of the week</h6>
            <p>{dayOfTheWeek}</p>
          </li>
          <li>
            <h6>week number</h6>
            <p>{weekNumber}</p>
          </li>
        </SC.AddCon>
      ) : null}
    </>
  );
};

export default TimeSet;
