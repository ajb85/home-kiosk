import { useCallback, useState } from "react";

export function useBoolean(initialValue?: boolean) {
  const [state, setState] = useState<boolean>(initialValue === true);
  const toggleValue = useCallback(() => {
    setState((v) => !v);
  }, []);

  const setFalse = useCallback(() => setState(false), []);
  const setTrue = useCallback(() => setState(true), []);

  return {
    value: state,
    setValue: setState,
    toggleValue,
    setFalse,
    setTrue,
  };
}
