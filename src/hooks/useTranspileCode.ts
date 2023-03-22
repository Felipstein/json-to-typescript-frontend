import { useState } from 'react';

export function useTranspileCode(initialCode?: string) {
  const [code, setCode] = useState<string | null>(initialCode ?? null);
  const [transpiledCode, setTranspiledCode] = useState<string | null>(null);

  async function transpileCode() {

  }

  return {
    originalCode: code,
    useTranspileCode: transpiledCode,
    transpileCode,
  };
}
