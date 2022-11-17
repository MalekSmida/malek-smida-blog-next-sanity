// node modules
import { useState, useEffect } from 'react';

/**
 * Custom hook that detect when y scroll is > 300
 * Using event listener on window scroll
 */
function useShowBackToTop() {
  // state
  const [showArrowButton, setShowArrowButton] = useState(false);

  // event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowArrowButton(true);
    } else {
      setShowArrowButton(false);
    }
  };

  useEffect(() => {
    // set event listener for scroll position
    window.addEventListener('scroll', handleScroll);

    return () => {
      // clear event listener when unmount (optimization)
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { showArrowButton };
}

export default useShowBackToTop;
