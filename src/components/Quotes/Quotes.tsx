import { useEffect, useState } from "react";

import * as SC from "./QuotesStyled";

import { getQuote } from "../../utils/services";
import { QuoteType } from "../../utils/types";
import { ReactComponent as Refresh } from "../../assets/icons/Combined Shape.svg";

const Quotes: React.FC = () => {
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const fetchQuote = async () => {
    const response = await getQuote();
    setQuote(response[0]);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  const refreshQuote = () => {
    fetchQuote();
  };

  const content = quote?.content;
  const author = quote?.author;

  return (
    <div>
      <SC.QuoteContainer>
        <SC.Quote>{content}</SC.Quote>
        <SC.RefreshButton onClick={refreshQuote}>
          <Refresh />
        </SC.RefreshButton>
      </SC.QuoteContainer>
      <SC.Author>{author}</SC.Author>
    </div>
  );
};

export default Quotes;
