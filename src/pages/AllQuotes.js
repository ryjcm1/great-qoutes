import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound"

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

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(()=>{
    sendRequest();
  },[sendRequest])

  if(status === "pending"){
    return <div className='centered'>
      <LoadingSpinner/>
    </div>
  }
  if(error){
    return <p className="centered focused">{error}</p>
  }

  if(status ==="completed" &&(!loadedQuotes || loadedQuotes.length ===0)){
    return <NoQuotesFound/>
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
