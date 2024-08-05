// src/app/api/auth/admin/route.ts

import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

interface LoginRequest {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const { email, password }: LoginRequest = await req.json();

  // Simple validation (replace with actual database check)
  if (email === "admin@yahoo.com" && password === "BDm2JrqdB!QwAc7") {
    // Create a token
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

    return new Response(
      JSON.stringify({ message: "Login successful!", token }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    return new Response(
      JSON.stringify({ message: "Invalid email or password." }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
