import { useState, useEffect, useRef } from 'react';

const useComponentVisibility = (initialState, userEvent) => {
  const [isVisible, setIsVisible] = useState(initialState);
  const ref = useRef(null);

  const toggleVisibility = (event) => {
    if (event.type === userEvent && !isVisible && ref.current.contains(event.target)) {
      setIsVisible(true);
    } else if (event.type === userEvent && isVisible) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener(userEvent, toggleVisibility);

    return () => {
      document.removeEventListener(userEvent, toggleVisibility);
    };
  }, [isVisible, ref]);

  return { isVisible, setIsVisible, ref };
};

export default useComponentVisibility;
