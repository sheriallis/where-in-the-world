import React from "react";

import { Spinner } from "./Loading.styles";

export default function Loading() {
  return (
    <Spinner>
      <div className="cube1" />
      <div className="cube2" />
    </Spinner>
  );
}
