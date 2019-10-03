import React from "react";
import MoveLogoFull from "../assets/MoveLogoFull";
import GraphiQL from "graphiql";
import fetch from "isomorphic-fetch";

import "./graphiql.css";

const Explorer = () => {
  const graphQlFetcher = params => {
    return fetch(window.location.origin + "/graphql", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    }).then(response => response.json());
  };

  return (
    <GraphiQL fetcher={graphQlFetcher}>
      <GraphiQL.Logo>
        <MoveLogoFull height={50} width={150} />
      </GraphiQL.Logo>
    </GraphiQL>
  );
};

export default Explorer;
