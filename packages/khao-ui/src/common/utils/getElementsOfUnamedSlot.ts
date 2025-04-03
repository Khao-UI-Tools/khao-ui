const getElementsOfUnamedSlot = (parentElement: HTMLElement): HTMLElement[] => {
  let elements: HTMLElement[] = [];

  if (parentElement) {
    const slot = parentElement.querySelector("slot");

    if (slot) {
      elements = <HTMLElement[]>slot.assignedElements();
    }
  }

  return elements;
};

export default getElementsOfUnamedSlot;
