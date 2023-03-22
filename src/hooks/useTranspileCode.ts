import { useCallback, useState } from 'react';

export function useTranspileCode() {
  const [isTranspiling, setIsTranspiling] = useState(false);

  const transpileCode = useCallback(async (code: string) => {
    try {
      setIsTranspiling(true);

      return `${code}\noii\ntest`;
    } finally {
      setIsTranspiling(false);
    }
  }, []);

  return {
    isTranspiling,
    transpileCode,
  };
}
