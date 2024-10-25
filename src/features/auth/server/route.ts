import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { loginSchema, registerSchema } from "../schemas";

const app = new Hono()
  .post(
    "/login", 
    zValidator("json", loginSchema), c => {
    return c.json({
        success: 200
    });
})
.post(
    "/register",
    zValidator("json", registerSchema),
    c => {
        return c.json({
            success: 201
        })
    } 
)

export default app;