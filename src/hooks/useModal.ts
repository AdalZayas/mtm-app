import { useState } from "react";

function useModal<T>() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const openModal = (item: T) => {
    setData(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setData(null);
    setIsOpen(false);
  };

  return { isOpen, data, openModal, closeModal };
}

export default useModal;
