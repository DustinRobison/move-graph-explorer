import React from "react";

const Session = props => {
  return (
    <>
      {props && props.sessionId ? (
        <button>Logout</button>
      ) : (
        <button
          onClick={() => {
            const hostname = window.location.hostname;
            if (hostname === "localhost") {
              alert(
                "Set cookie name: 'V2_SESSION_ID' for domain 'localhost' then refresh page."
              );
            } else {
              alert("Login with another tab then refresh page");
              const win = window.open(window.location.hostname + "#/a/login");
              win.focus();
            }
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Session;
