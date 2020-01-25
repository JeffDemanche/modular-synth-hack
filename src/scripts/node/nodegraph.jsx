import React from "react";
import { createOutputNode } from "./nodes";

/**
 * The idea here is there's one NodeGraph per workspace.
 */
class NodeGraph {
  constructor() {
    // The workspace will be initialized with the nodes in this array.
    this.nodes = [createOutputNode(0)];
  }

  getComponents() {
    return <>{this.nodes.map(node => node.getComponent())}</>;
  }

  getNextKey() {
    return this.nodes.length;
  }
}

export default NodeGraph;
