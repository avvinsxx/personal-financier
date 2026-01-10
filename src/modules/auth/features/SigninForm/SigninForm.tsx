"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { sendOtp } from "@/data";
import { Button, Input, VALIDATION_MESSAGES } from "@/shared";

import { OtpForm } from "./OtpForm";
import styles from "./styles.module.scss";

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
        <form onSubmit={handleSubmit(_onSubmit)} className={styles.signinForm}>
          <Input
            label="Email"
            type="text"
            autoComplete="email"
            autoFocus
            error={formState.errors.email?.message}
            {...register("email", {
              required: VALIDATION_MESSAGES.required,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: VALIDATION_MESSAGES.email,
              },
            })}
          />
          <Button variant="filled" color="primary" size="md" type="submit">
            ВОЙТИ
          </Button>
        </form>
      )}
      {email && <OtpForm email={email} timeout={otpSendTimeout} />}
    </>
  );
};
