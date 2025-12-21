import { useCallback, useEffect, useRef, useState } from "react";

export const useResendTimer = (timeout: number) => {
  const [secondsToResend, setSecondsToResend] = useState(timeout);
  const resendAvailableAtRef = useRef<number>(0);

  const _getNowDate = useCallback(() => Date.now(), []);

  const _recalcSecondsToResend = () => {
    const secondsLeft = Math.ceil(
      (resendAvailableAtRef.current - _getNowDate()) / 1000,
    );
    setSecondsToResend(secondsLeft);
    if (secondsLeft > 0) {
      return setTimeout(() => {
        _recalcSecondsToResend();
      }, 1000);
    }
  };

  useEffect(() => {
    resendAvailableAtRef.current = _getNowDate() + timeout * 1000;
    const timeoutId = _recalcSecondsToResend();
    return () => clearTimeout(timeoutId);
  }, []);

  return {
    secondsToResend,
    setSecondsToResend: (timeout: number) => {
      resendAvailableAtRef.current = _getNowDate() + timeout * 1000;
      _recalcSecondsToResend();
    },
  };
};
