import React from "react";
import { useCookies } from "react-cookie";

import "./App.css";
import Explorer from "./explorer/Explorer";
import Session from "./session/Session";

// TODO Features
// Stylize page for Movemedical
// Send posts with valid MOVE-SESSION-ID (allow users to login)

const App = () => {
  const [cookies] = useCookies();

  return (
    <div className={"App"}>
      <div className={"AppContent"}>
        <div className={"AppHeader"}>
          <h3>Movemedical GraphQL API</h3>
          <Session sessionId={cookies.V2_SESSION_ID} />
        </div>
        <Explorer sessionId={cookies.V2_SESSION_ID} />
      </div>
    </div>
  );
};

export default App;
