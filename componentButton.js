import { createElement } from "./createElement.js";

export function ComponentButton1(props) {
  return createElement(
    "button",
    { color: "blue" },
    createElement("p", null, "hello"),
    createElement(ComponentButton2, { color: "blue" }, "no"),
    createElement(ComponentButton3, { color: "blue" }, "no")
  );
}

export function ComponentButton2(props) {
  return createElement("button", { color: props.color }, props.children);
}

export function ComponentButton3(props) {
  return createElement("button", { color: props.color }, props.children);
}
