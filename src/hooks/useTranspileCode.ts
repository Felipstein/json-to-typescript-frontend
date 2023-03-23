import { useCallback, useState } from 'react';
import { APIError } from '../errors/APIError';
import { api } from '../services/api.service';
import { TranspilationType } from '../types/Transpilations';

export function useTranspileCode() {
  const [isTranspiling, setIsTranspiling] = useState(false);
  const [errorFeedback, setErrorFeedback] = useState<string | null>(null);

  const transpileCode = useCallback(async (code: string, transpilationType: TranspilationType) => {
    try {
      setErrorFeedback(null);
      setIsTranspiling(true);

      const transpiledCode = await api.transpileCode(code, transpilationType);

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

  const cancelTranspilation = useCallback(() => {
    api.cancelTranspilation();
  }, []);

  const removeErrorFeedback = useCallback(() => {
    setErrorFeedback(null);
  }, []);

  return {
    isTranspiling,
    errorFeedback,
    transpileCode,
    cancelTranspilation,
    removeErrorFeedback,
  };
}
