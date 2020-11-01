import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./searchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="papper" animal="bird" breed="cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mixed" /> */}
    </div>
  );
};
render(<App />, document.getElementById("root"));
