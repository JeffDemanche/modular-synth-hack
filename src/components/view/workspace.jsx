import React, { useState } from "react";
import "./workspace.css";
import NodeGraph from "../../scripts/node/nodegraph";

const Workspace = () => {
  const [nodeGraph, setNodeGraph] = useState(new NodeGraph());

  return <div className="workspace">{nodeGraph.getComponents()}</div>;
};

export default Workspace;
