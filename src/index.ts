import { useEffect, useRef } from "react";

export const useClickOutside = (
  clickedOutside: Function
): React.RefObject<HTMLElement> => {
  const node = useRef<HTMLElement>(null);

  const click = (event: Event): void => {
    if (
      node.current &&
      event.target instanceof Node &&
      !node.current.contains(event.target)
    ) {
      event.stopPropagation();
      event.preventDefault();
      clickedOutside();
    }
  };

  useEffect(
    (): (() => void) => {
      document.addEventListener("click", click, true);

      return (): void => {
        document.removeEventListener("click", click, true);
      };
    }
  );

  return node;
};
