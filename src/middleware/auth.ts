// src/middleware/auth.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

function verifyToken(token: string): boolean {
  try {
    jwt.verify(token, SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;

  if (!token || !verifyToken(token)) {
    return NextResponse.redirect("/auth/admin");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/dashboard/**"], // Apply to all routes
};

export function logout() {
  // Remove the token from cookies
  document.cookie =
    "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";

  // Redirect to the login page
  window.location.href = "/auth/admin";
}
