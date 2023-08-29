import { useEffect, useState } from "react";

import { getQuote } from "../../utils/services";
import { QuoteType } from '../../utils/types';

const Quotes: React.FC = () => {
  const [quote, setQuote] = useState<QuoteType | null>(null);
const fetchQuote = async () => {
  const response = await getQuote();
  setQuote(response[0]);
};
  useEffect(() => {
    
    fetchQuote();
  }, []);

const content = quote?.content;
const author = quote?.author

  return <div>
    <p>{content}</p>
    <h3>{author}</h3>
  </div>;
};

export default Quotes;
