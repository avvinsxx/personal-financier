import { authClient } from "@/shared";

export const sendOtp = async (
  email: string,
  onTooManyRequests?: (timeout: number) => void,
) => {
  return await authClient.emailOtp.sendVerificationOtp({
    email: email,
    type: "sign-in",
    fetchOptions: {
      onError: async (context) => {
        const { response } = context;
        if (response.status === 429) {
          const retryAfter = response.headers.get("X-Retry-After");
          if (retryAfter) {
            onTooManyRequests?.(Number(retryAfter));
          }
        }
      },
    },
  });
};
