import { useEffect, useState } from 'react';

function SupportsRendering(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return mounted;
}

export default SupportsRendering;
