import {useState, useEffect} from 'react';

const getDeviceConfig = (width) => {
  if(width < 320) {
    return 'xs';
  } else if(width >= 320 && width < 720 ) {
    return 'sm';
  } else if(width >= 720 && width < 1024) {
    return 'md';
  } else if(width >= 1024) {
    return 'lg';
  }
};

const useBreakpoint = () => {
  const [breakPoint, setBreakPoint] = useState(() => getDeviceConfig(window.innerWidth));
  
  useEffect(() => {
    const calcInnerWidth = () => {
      setBreakPoint(getDeviceConfig(window.innerWidth));
    };
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return breakPoint;
}
export default useBreakpoint;