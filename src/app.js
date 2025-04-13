import { createElement } from "./utils/createElement.js";
import { ComponentButton1 } from "./components/componentButton.js";
import { resolveTree } from "./utils/resolveTree.js";

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
