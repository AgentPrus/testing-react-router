import { Link } from "react-router-dom";

const NoMatch = () => (
  <div>
    <h2>No match</h2>
    <Link to={"/"}>Back to Home Page</Link>
  </div>
);

export default NoMatch;
