import styled from "@emotion/styled";

type Props = {
  bg: string;
};
export const CommonCon = styled.div<Props>`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 26px;
  padding-right: 26px;
  padding-bottom: 40px;
  padding-top: 36px;

  background-image: url(${(props) => props.bg});
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-size: cover;
`;

export const GreetingCon = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  align-items: center;

  margin-bottom: 16px;
`;

export const GreetingText = styled.p`
  margin-left: 16px;

  text-transform: uppercase;    
`;

export const TimeCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  margin-bottom: 16px;
`;

export const Time = styled.p`
  font-size: 100px;
  letter-spacing: -2.5px;
  font-weight: bold;
`;

export const Zone = styled.p`
  margin-bottom: 16px;

  font-size: 15px;
  font-weight: lighter;
  line-height: 1.87;
`;

export const LocationCon = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 48px;

  text-transform: uppercase;

  & > * {
    font-size: 15px;
    font-weight: bold;
    line-height: 1.87;
    letter-spacing: 3px;
  }

  & > *:not(:last-child) {
    margin-right: 6px;
  }
`;

export const ToggleButton = styled.button`
  width: 115px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;

  padding-left: 17px;
  padding-right: 4px;
  padding-top: 3px;
  padding-bottom: 4px;

  border: none;
  border-radius: 28px;

  & > span {
    margin-right: 15px;

    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3.75px;
    line-height: 1.67;
  }
`;

export const AddCon = styled.ul`
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 26px;
  padding-right: 26px;

  background: linear-gradient(to bottom, #979797, #fff);

  & > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;
    color: #000;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    & > h6 {
      font-size: 10px;
      letter-spacing: 2px;
      line-height: 2.8;
      font-weight: normal;
    }

    &>p{
        font-size: 20px;
        font-weight: bold;
        line-height: 1.4;
    }
  }
`;
