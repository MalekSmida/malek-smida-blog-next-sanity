// node modules
import { useState, useEffect } from 'react';

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
