import { authClient } from "@/shared";

export const signin = async (email: string, otp: string) => {
  return await authClient.signIn.emailOtp({
    email,
    otp,
  });
};
