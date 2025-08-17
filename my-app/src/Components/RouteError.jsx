import React from "react";
import { useRouteError } from "react-router-dom";

export default function RouteError() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ padding: 20 }}>
      <h1>Oops! Route error occurred.</h1>
      <p>
        {error?.status ? `Status: ${error.status}` : null}
        <br />
        {error?.statusText || error?.message || "Unknown routing error"}
      </p>
    </div>
  );
}
