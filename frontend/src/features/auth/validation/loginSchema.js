import { z } from "zod";

export const loginSchema = (t) =>
    z.object({
        email: z
            .email(t("validation:email"))
            .min(1, t("validation:required")),

        password: z
            .string()
            .min(8, t("validation:password_min")),
    });