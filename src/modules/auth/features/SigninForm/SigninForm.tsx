"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";

import { sendOtp } from "@/data";

import { styles } from "./styles";
import { OtpForm } from "./OtpForm";

type Inputs = {
  email: string;
};

export const SigninForm = () => {
  const [email, setEmail] = useState<string>();
  const [otpSendTimeout, setOtpSendTimeout] = useState<number>(60);

  const { register, handleSubmit, setError, formState } = useForm<Inputs>();
  const _onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const { data, error } = await sendOtp(formData.email, setOtpSendTimeout);

    if (data?.success || error?.status === 429) {
      setEmail(formData.email);
    } else {
      let message = "Непредвиденная ошибка";
      if (error?.message) {
        message = error.message;
      }
      setError("email", { type: "manual", message });
    }
  };

  return (
    <>
      {!email && (
        <Box
          component="form"
          onSubmit={handleSubmit(_onSubmit)}
          sx={styles.signinForm}
        >
          <TextField
            error={!!formState.errors.email?.message}
            helperText={formState.errors.email?.message}
            label="Email"
            type="text"
            autoComplete="email"
            autoFocus
            variant="outlined"
            fullWidth
            {...register("email", {
              required: { value: true, message: "Обязательное поле" },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Введенное значение не является email",
              },
            })}
          />
          <Button variant="contained" size="large" fullWidth type="submit">
            ВОЙТИ
          </Button>
        </Box>
      )}
      {email && <OtpForm email={email} timeout={otpSendTimeout} />}
    </>
  );
};
