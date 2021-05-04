import { useCallback } from 'react';
import { executeFetch } from '../services';

export const useFetch = () => {
  const executeFetchRequest = useCallback((url, options) => {
    return executeFetch(url, options)
      .catch(error => {
        console.error(error);
        return null;
      });
  }, []);

  return [executeFetchRequest];
}
