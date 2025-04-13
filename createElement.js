import { ReactElement } from "./ReactElement.js";

const RESERVED_PROPS = { key: true, ref: true };

export function createElement(type, config, ...children) {
  let props = {};
  let key = null,
    ref = null;

  if (config != null) {
    if (config.key !== undefined) key = "" + config.key;
    if (config.ref !== undefined) ref = config.ref;

    for (let prop in config) {
      if (!RESERVED_PROPS.hasOwnProperty(prop)) {
        props[prop] = config[prop];
      }
    }
  }

  if (children.length === 1) {
    props.children = children[0];
  } else if (children.length > 1) {
    props.children = children;
  }

  if (type && type.defaultProps) {
    for (let prop in type.defaultProps) {
      if (props[prop] === undefined) props[prop] = type.defaultProps[prop];
    }
  }

  return ReactElement(type, key, ref, props);
}
