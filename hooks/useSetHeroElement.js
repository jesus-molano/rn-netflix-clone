import { useEffect, useState } from "react";

export const useSetHeroElement = (elements, selectedElement = 0) => {
  const [heroElement, setHeroElement] = useState(null);

  useEffect(() => {
    if (elements && elements.length > 1) {
      setHeroElement({
        ...elements[selectedElement],
        index: selectedElement
      });
    }
  }, [selectedElement, elements]);

  return [heroElement];
};
