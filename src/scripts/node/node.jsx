import React from "react";
import NodeComponent from "../../components/view/node/node";

export class Channel {
  constructor(channelName, connections, type) {
    this._name = channelName;
    this._connections = connections;
    this._type = type;
  }

  set name(name) {
    this._name = name;
  }

  set connections(connections) {
    this._connections = connections;
  }

  set type(type) {
    this._type = type;
  }

  get name() {
    return this._name;
  }

  get connections() {
    return this._connections;
  }

  get type() {
    return this._type;
  }
}

class Node {
  constructor(nodeName, nodeId, channels) {
    this._nodeName = nodeName;
    this._nodeId = nodeId;
    this._channels = channels;
  }

  set nodeName(nodeName) {
    this._nodeName = nodeName;
  }

  set nodeId(nodeId) {
    this._nodeId = nodeId;
  }

  set channels(channels) {
    this._channels = channels;
  }

  get nodeName() {
    return this._nodeName;
  }

  get nodeId() {
    return this._nodeId;
  }

  get channels() {
    return this._channels;
  }

  getComponent() {
    return (
      <NodeComponent
        nodeName={this.nodeName}
        nodeId={this.nodeId}
        channels={this.channels}
      ></NodeComponent>
    );
  }
}

export default Node;
