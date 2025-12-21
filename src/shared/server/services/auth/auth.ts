import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins";

import { prismaClient } from "@/shared/db/prisma/client";

export const auth = betterAuth({
  database: prismaAdapter(prismaClient, {
    provider: "postgresql",
  }),
  emailVerification: {
    autoSignInAfterVerification: true,
  },
  plugins: [
    emailOTP({
      sendVerificationOnSignUp: true,
      otpLength: 6,
      expiresIn: 300,
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "sign-in") {
          // Send the OTP for sign in
        } else if (type === "email-verification") {
          // Send the OTP for email verification
        } else {
          // Send the OTP for password reset
        }
      },
    }),
  ],
  rateLimit: {
    enabled: true,
    customRules: {
      "/email-otp/send-verification-otp": {
        max: 1,
        window: 60,
      },
    },
  },
});
