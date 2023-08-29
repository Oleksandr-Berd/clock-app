import styled from "@emotion/styled";

type Props = {
  bg: string;
};

export const MainLayout = styled.main<Props>`

  height: 100vh;

  padding-left: 26px;
  padding-right: 26px;
  padding-bottom: 40px;
  padding-top: 36px;

  background-image: url(${(props) => props.bg});
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-size: cover;
`;
