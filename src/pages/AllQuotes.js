import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
