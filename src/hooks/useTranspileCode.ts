import { useCallback, useState } from 'react';
import { api } from '../services/api.service';

export function useTranspileCode() {
  const [isTranspiling, setIsTranspiling] = useState(false);

  const transpileCode = useCallback(async (code: string) => {
    try {
      setIsTranspiling(true);

      const transpiledCode = await api.transpileCode(code);

      return transpiledCode;
    } finally {
      setIsTranspiling(false);
    }
  }, []);

  return {
    isTranspiling,
    transpileCode,
  };
}
