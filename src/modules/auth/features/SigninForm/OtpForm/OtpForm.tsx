import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useRef,
  useState,
} from "react";
import { Box, Button, FormHelperText, TextField } from "@mui/material";

import { sendOtp, signin } from "@/data";

import { styles } from "./styles";
import { useResendTimer } from "./hoooks";
import { KEYBOARD_KEY, OTP_LENGTH } from "./constants";

type Props = {
  email: string;
  timeout: number;
};

export const OtpForm = ({ email, timeout }: Props) => {
  const [otp, setOtp] = useState<string[]>([]);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { secondsToResend, setSecondsToResend } = useResendTimer(timeout);

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const _selectInput = (inputIndex: number) => {
    const inputRef = inputsRef.current[inputIndex];
    if (inputRef) {
      inputRef.select();
    }
  };

  const _debouncedSubmit = (otpString: string) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(async () => {
      setIsSubmitting(true);
      const { data, error } = await signin(email, otpString);

      if (data) {
        //TODO redirect to dashboard
      } else if (error?.status === 429) {
        setError("Попытки ичсчерпаны, получите другой код и попробуйте снова");
      } else if (error?.status === 400) {
        setError("Неверный код");
      } else {
        let message = "Непредвиденная ошибка";
        if (error?.message) {
          message = error.message;
        }
        setError(message);
      }

      setIsSubmitting(false);
    }, 1000);
  };

  const _onKeyDown = (event: KeyboardEvent, inputIndex: number) => {
    if (KEYBOARD_KEY.backspace === event.key) {
      event.preventDefault();
      const newOtp = [...otp];
      newOtp[inputIndex] = "";
      setOtp(newOtp);
      _selectInput(inputIndex - 1);
    } else if (KEYBOARD_KEY.left === event.key) {
      event.preventDefault();
      _selectInput(inputIndex - 1);
    } else if (KEYBOARD_KEY.right === event.key) {
      event.preventDefault();
      _selectInput(inputIndex + 1);
    } else if (KEYBOARD_KEY.home === event.key) {
      event.preventDefault();
      _selectInput(0);
    } else if (KEYBOARD_KEY.end === event.key) {
      event.preventDefault();
      _selectInput(5);
    }
  };

  const _onFocus = (event: FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const _onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputIndex: number,
  ) => {
    setError(null);
    const newOtp = [...otp];
    newOtp[inputIndex] = event.target.value[0];
    setOtp([...newOtp]);
    const otpString = newOtp.join("");
    if (otpString.length === OTP_LENGTH) {
      _debouncedSubmit(otpString);
    }
    _selectInput(inputIndex + 1);
  };

  const _onResendClick = async () => {
    const { data, error } = await sendOtp(email);

    if (data?.success) {
      setSecondsToResend(60);
      setOtp([]);
      setError(null);
      _selectInput(0);
    } else {
      let message = "Непредвиденная ошибка";
      if (error?.message) {
        message = error.message;
      }
      setError(message);
    }
  };

  return (
    <Box sx={styles.otpForm}>
      <Box>
        <Box sx={styles.otpForm__inputsRow}>
          {Array.from({ length: OTP_LENGTH }).map((_, i) => (
            <TextField
              inputRef={(el) => (inputsRef.current[i] = el)}
              key={i}
              autoFocus={i === 0}
              value={otp[i] || ""}
              sx={styles.otpForm__inputContainer}
              slotProps={{
                htmlInput: {
                  sx: styles.otpForm__input,
                },
              }}
              onChange={(e) => _onChange(e, i)}
              onKeyDown={(e) => _onKeyDown(e, i)}
              onFocus={_onFocus}
              disabled={isSubmitting}
            />
          ))}
        </Box>
        <FormHelperText error sx={styles.otpForm__error}>
          {error}
        </FormHelperText>
      </Box>
      <Button
        variant="contained"
        size="large"
        fullWidth
        type="submit"
        disabled={secondsToResend > 0 || isSubmitting}
        onClick={_onResendClick}
      >
        Отправить повторно {secondsToResend ? `(${secondsToResend} с)` : ""}
      </Button>
    </Box>
  );
};
