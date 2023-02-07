import { useEffect, useState } from "react";
import List from "./components/List/List";

function App() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {isLoading ? "Loading..." : <List users={users} />}
    </div>
  );
}

export default App;
