import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from '../lib/api'
import {useEffect} from 'react'
import LoadingSpinner from '../components/UI/LoadingSpinner'

// const DUMMY_DATA = [
//   {
//     id: "q1",
//     author: "Aristotle",
//     text: "Knowing yourself is the beginning of wisdom.",
//   },
//   {
//     id: "q2",
//     author: "Davinci",
//     text: "Art is never finished only abandoned",
//   },
//   {
//     id: "q3",
//     author: "Galelio",
//     text: "I have never met a man so ignorant that could not learn something from him",
//   },
// ];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const {quoteId} = params

  const {  sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote)

  useEffect(() =>{
    sendRequest(quoteId)
  }, [sendRequest, quoteId])


  if(status === "pending") {
    return <div className="centered">
      <LoadingSpinner/>
    </div>
  }

  if(!loadedQuote){
    return <p className="centered">No quote found!</p>
  }


  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
