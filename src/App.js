import React from "react";
import "./App.css";
import Description from "./components/Description";
import Video from "./components/Video";
import Prerequisites from "./components/Prerequisites";
import Schema from "./components/Schema";

function App() {
  return (
    <div className="App">
      <Description />
      <Prerequisites />
      <Video />
      <Schema />
    </div>
  );
}

export default App;
