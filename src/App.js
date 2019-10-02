import React from "react";
import GraphiQL from "graphiql";
import fetch from "isomorphic-fetch";
import "graphiql/graphiql.css";

function App() {
  const graphQlFetcher = params => {
    return fetch(window.location.origin + "graphql", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    }).then(response => response.json());
  };

  return <GraphiQL fetcher={graphQlFetcher} />;
}

export default App;
