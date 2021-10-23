import { useEffect, useMemo, useState } from 'react';

function useOnScreenEffect(ref, options) {
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries, observer) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const memoisedOptions = useMemo(() => (options), [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, memoisedOptions);
    const currentTarget = ref.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => { 
      if (currentTarget) observer.unobserve(currentTarget);
    }
  }, [ref, memoisedOptions]);

  return isVisible;
}

export default useOnScreenEffect;