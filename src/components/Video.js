import React from "react";
import videoA from "./videoA.mp4";

export default class Video extends React.Component {
  render() {
    return (
      <video width="900" height="450" controls>
        <source src={videoA} type="video/mp4" />
      </video>
    );
  }
}
