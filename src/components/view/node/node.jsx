import React from "react";
import "./node.css";
import Draggable from "react-draggable";
import PropTypes from "prop-types";
import Channel from "./channel";

const NodeComponent = ({ nodeName, nodeId, channels }) => {
  return (
    <Draggable>
      <div className="node-draggable">
        <div className="node-header">{nodeName} {nodeId}</div>
        <br></br>
        {channels.map(channel => (
          <Channel channel={channel}></Channel>
        ))}
      </div>
    </Draggable>
  );
};

NodeComponent.propTypes = {
  nodeName: PropTypes.string.isRequired,
  nodeId: PropTypes.number.isRequired,
  channels: PropTypes.array
};

export default NodeComponent;
