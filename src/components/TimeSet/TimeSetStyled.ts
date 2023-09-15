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

  @media (min-width: 768px){
    padding-left: 64px;
    padding-top: 80px;
  }

  @media (min-width: 1440px){

    padding-left: 165px;
    padding-right: 165px;
    padding-top:56px;
    padding-bottom: 98px;
  }
`;

export const FlexCon = styled.div`
@media (min-width: 1440px){
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
}
`

export const GreetingCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;

  @media (min-width: 768px){
    margin-bottom: 0;
  }
`;

export const GreetingText = styled.p`
  margin-left: 16px;

  text-transform: uppercase;
  
  @media (min-width: 768px){
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: 3.6px;
    font-weight: normal;
  }

  @media (min-width: 1440px){
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 4px;
  }
`;

export const TimeCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  margin-bottom: 16px;

  @media (min-width: 768px){
    margin-bottom: 0;
  }

  @media (min-width: 1440px){
    margin-bottom: 16px;
  }
`;

export const Time = styled.p`
  font-size: 100px;
  letter-spacing: -2.5px;
  font-weight: bold;

  @media (min-width: 768px){
margin-bottom: 0;
margin-right: 11px;

    font-size: 175px;
    letter-spacing: 4.38px;
  }

  @media (min-width: 1440px){
    font-size: 200px;
    letter-spacing: -5px;
  }
`;

export const Zone = styled.p`
  margin-bottom: 16px;

  font-size: 15px;
  font-weight: lighter;
  line-height: 1.87;

  @media (min-width: 768px) {
    margin-bottom: 36px;

    font-size: 32px;
    line-height: 0.86;
  }

  @media (min-width: 1440px){
    font-size: 40px;
    line-height: 1.42;
  }
`;

export const LocationCon = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 48px;

  text-transform: uppercase;

  @media (min-width: 768px){
    margin-bottom: 80px;
  }

  @media (min-width: 1440px){
    margin-bottom: 0;
  }

  & > * {
    font-size: 15px;
    font-weight: bold;
    line-height: 1.87;
    letter-spacing: 3px;

    @media (min-width: 768px) {
      font-size: 18px;
      letter-spacing: 3.6px;
      line-height: 1.56;
    }

    @media (min-width: 1440px){
      font-size: 24px;
      letter-spacing: 4.8px;
      line-height: 1.17;
    }
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

  @media (min-width: 768px) {
    width: 146px;

    justify-content: space-between;

    padding-left: 21px;
    padding-right: 9px;
    padding-top: 15px;
    padding-bottom: 13px;
  }

  & > span {
    margin-right: 15px;

    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3.75px;
    line-height: 1.67;

    @media (min-width: 768px) {
      font-size: 16px;
      letter-spacing: 5px;
      line-height: 1.56;
    }
  }
`;

export const AddCon = styled.ul`
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 26px;
  padding-right: 26px;

  background: linear-gradient(to bottom, #979797, #fff);

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;

    padding-left: 64px;
    padding-top: 119px;
    padding-bottom: 119px;
  }

  @media (min-width: 1440px){
    padding-left: 165px;
    padding-top: 74px;
    padding-bottom: 74px;
  }

  & > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;
    color: #000;

    @media (min-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
    &:not(:last-child) {
      margin-bottom: 16px;

      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    & > h6 {
      font-size: 10px;
      letter-spacing: 2px;
      line-height: 2.8;
      font-weight: normal;

      @media (min-width: 768px) {
        font-size: 13px;
        line-height: 2.6;
        line-height: 2.15;
      }

      @media (min-width: 1440px){
        font-size: 15px;
        letter-spacing: 3px;
        line-height: 1.87;
      }
    }

    & > p {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.4;

      @media (min-width: 768px){
        font-size: 40px;
      }

      @media (min-width: 1440px){
        font-size: 56px;
      }
    }
  }
`;
