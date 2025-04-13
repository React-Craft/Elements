import { createElement } from "./createElement.js";
import { ComponentButton1 } from "./componentButton.js";
import { resolveTree } from "./resolveTree.js";

const element = createElement(
  "div",
  { id: "delete-account" },
  createElement("p", null, "Elements"),
  createElement(ComponentButton1)
);

const result = {};
const domTree = resolveTree(element, result);
const finalOutput = {
  ...domTree,
  ...result,
};

console.log(JSON.stringify(finalOutput, null, 2));
