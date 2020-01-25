import React from "react";
import "./channel.css";

const Channel = ({channel}) => {
  if (channel.connections == null) {
    return (
      <div className="channel">
        <div className="circle"></div>
        {channel.name}
      </div>
    );
  } else {
    return (
      <div className="channel">
        {channel.name}
        <div className="circle"></div>
      </div>
    );
  }
};

export default Channel;
