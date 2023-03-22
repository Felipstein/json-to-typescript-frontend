import { useCallback, useState } from 'react';
import { APIError } from '../errors/APIError';
import { api } from '../services/api.service';

export function useTranspileCode() {
  const [isTranspiling, setIsTranspiling] = useState(false);
  const [errorFeedback, setErrorFeedback] = useState<string | null>(null);

  const transpileCode = useCallback(async (code: string) => {
    try {
      setIsTranspiling(true);

      const transpiledCode = await api.transpileCode(code);

      return transpiledCode;
    } catch (err: APIError | unknown) {

      if(err instanceof APIError) {

        if(err.statusCode === -1) {
          setErrorFeedback('Houve um problema interno do cliente, por favor, tente novamente.');
        } else {
          setErrorFeedback(err.message);
        }

      } else {
        setErrorFeedback('Houve um problema interno do cliente, por favor, tente novamente.');
      }

    } finally {
      setIsTranspiling(false);
    }
  }, []);

  return {
    isTranspiling,
    errorFeedback,
    transpileCode,
  };
}
