import { useCallback, useState } from 'react';
import { APIError } from '../errors/APIError';
import { api } from '../services/api.service';

export function useTranspileCode() {
  const [isTranspiling, setIsTranspiling] = useState(false);
  const [errorFeedback, setErrorFeedback] = useState<string | null>(null);

  const transpileCode = useCallback(async (code: string) => {
    try {
      setErrorFeedback(null);
      setIsTranspiling(true);

      const transpiledCode = await api.transpileCode(code);

      return transpiledCode;
    } catch (err: APIError | any) {

      if(err instanceof APIError) {
        setErrorFeedback(err.message);
      } else {
        setErrorFeedback(err.message || 'Houve um problema interno do cliente, por favor, tente novamente.');
      }

    } finally {
      setIsTranspiling(false);
    }
  }, []);

  const removeErrorFeedback = useCallback(() => {
    setErrorFeedback(null);
  }, []);

  return {
    isTranspiling,
    errorFeedback,
    transpileCode,
    removeErrorFeedback,
  };
}
