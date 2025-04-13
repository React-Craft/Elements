export function resolveTree(element, result) {
  if (Array.isArray(element)) {
    return element.map((child) => resolveTree(child, result));
  }

  if (typeof element !== "object" || element === null) {
    return element;
  }

  if (typeof element.type === "function") {
    const componentName = element.type.name || "Anonymous";
    const rendered = element.type(element.props);
    const resolvedRendered = resolveTree(rendered, result);
    result[componentName] = resolvedRendered;
    return { type: componentName };
  }

  const resolvedChildren = resolveTree(element.props.children, result);
  return {
    type: element.type,
    props: {
      ...element.props,
      children: resolvedChildren,
    },
  };
}
