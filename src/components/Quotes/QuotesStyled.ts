import styled from "@emotion/styled";

export const QuoteContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 8px;
`;

export const Quote = styled.p`
max-width: 280px;
margin-right: 17px;

font-size: 12px;
line-height: 1.83;
`

export const Author = styled.h3`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.83;
`;

export const RefreshButton = styled.button`
background: transparent;
border: none;
`