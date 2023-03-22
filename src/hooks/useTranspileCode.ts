import { useState } from 'react';

export function useTranspileCode() {
  const [isTranspiling, setIsTranspiling] = useState(false);
  const [codeTranspiled, setCodeTranspiled] = useState<string | null>(null);

  async function transpileCode(code: string) {
    try {
      setIsTranspiling(true);

      setCodeTranspiled(`${code}\noii\ntest`);
    } finally {
      setIsTranspiling(false);
    }
  }

  return {
    isTranspiling,
    codeTranspiled,
    transpileCode,
  };
}
