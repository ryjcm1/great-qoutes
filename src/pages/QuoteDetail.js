import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'


const DUMMY_DATA = [
  {
    id: "q1",
    author: "Aristotle",
    text: "Knowing yourself is the beginning of wisdom.",
  },
  {
    id: "q2",
    author: "Davinci",
    text: "Art is never finished only abandoned",
  },
  {
    id: "q3",
    author: "Galelio",
    text: "I have never met a man so ignorant that could not learn something from him",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if(!quote){
      return <p>No Quote Found!</p>
  }

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
        <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
