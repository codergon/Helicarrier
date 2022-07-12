import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import Home from "./Home";

const httpLink = createHttpLink({
  uri: "https://helicarrier-task.herokuapp.com/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
