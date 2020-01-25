import Node, { Channel } from "./node";

export const createOutputNode = id =>
  new Node("Output", id, [new Channel("Signal", null, "Voltage"), new Channel("test", null, "Voltage")]);
